const express = require('express');
const router = express.Router();
const { Product } = require("../models/Product");
const multer = require('multer')
const { auth } = require("../middleware/auth");


//local storage
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})
var upload = multer({ storage: storage }).single("file")

//image upload to server
router.post("/uploadImage", auth, (req, res) => {

    upload(req, res, err => {
        if (err) return res.json({ success: false, err })
        return res.json({
            success: true, image: res.req.file.path,
            fileName: res.req.file.filename
        })
    })
});
//upload product to mongodb
router.post("/uploadProduct", auth, (req, res) => {

    const product = new Product(req.body)
    product.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});
//fetch products from mongodb
router.post("/getProducts", (req, res) => {

    Product.find().exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, products })
    })
});

//route for each product page
router.get("/products_by_id", (req, res) => {
    let type = req.query.type
    let productIds = req.query.id

    console.log("req.query.id", req.query.id)

    if (type === "array") {
        let ids = req.query.id.split(',');
        productIds = [];
        productIds = ids.map(item => {
            return item
        })
    }

    console.log("productIds", productIds)


    //we need to find the product information that belong to product Id 
    Product.find({ '_id': { $in: productIds } })
        .populate('writer')
        .exec((err, product) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(product)
        })
});


module.exports = router;
