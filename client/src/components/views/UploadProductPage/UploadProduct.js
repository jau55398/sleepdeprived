import React from 'react'
import { useState } from 'react'
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios'
function UploadProduct(props) {

    const Category = [
        { keys: 1, value: "All" },
    ]

    const [NameValue, setNameValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState(1)
    const [Images, setImages] = useState([])

    const [Sizes, setSizes] = useState("")
    const [Colors, setColors] = useState("")
    const [Material, setMaterial] = useState("")
    const [Quantity, setQuantity] = useState("")

    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }
    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }
    const onCategoryChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        console.log(newImages)
        setImages(newImages)
    }

    // new part of schema tesing 11/22/20
    const onSizeChange = (event) => {
        setSizes(event.currentTarget.value)
        console.log(Sizes)
    }
    const onMaterialChange = (event) => {
        setMaterial(event.currentTarget.value)
    }
    const onChangeColor = (event) => {
        setColors(event.currentTarget.value)
    }
    const onQuantityChange = (event) => {
        setQuantity(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!NameValue || !DescriptionValue || !PriceValue ||
            !CategoryValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            product_name: NameValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            category: CategoryValue,
            sizes: Sizes,
            colors: Colors,
            quantity: Quantity,
            material: Material
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }



    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <p className="heading">Product Upload</p>

            <form onSubmit={onSubmit}>
                <FileUpload
                    style={{}}
                    refreshFunction={updateImages}>

                </FileUpload>
            </form>
            <br />
            <br />

            <div style={{
                float: "left",
                width: "200px"
            }}>

                <label className="upload-label">SIZES</label>
                <input
                    className="upload-input"
                    onChange={onSizeChange}
                    value={Sizes}
                ></input>
                <br />
                <label className="upload-label">QUANTITY</label>
                <input
                    className="upload-input"
                    onChange={onQuantityChange}
                    value={Quantity}
                    type="number"
                ></input>
                <br />
                <label className="upload-label">PRICE</label>
                <input
                    className="upload-input"
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                ></input>
                <br />

                <label className="upload-label">CATEGORY</label>
                <select
                    className="upload-input"
                    onChange={onCategoryChange}
                    value={CategoryValue}>

                    {Category.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}

                </select>
                <br />
            </div>

            <label className="upload-label-right">NAME</label>
            <input
                className="upload-input"
                onChange={onNameChange}
                value={NameValue}
            ></input>
            <br />

            <label className="upload-label-right">DESCRIPTION</label>
            <textarea
                className="upload-input"
                style={{minHeight:"40px", maxHeight:"100px"}}
                onChange={onDescriptionChange}
                value={DescriptionValue}
            ></textarea>
            <br />
            <label className="upload-label-right">COLORS</label>
            <input
                className="upload-input"
                onChange={onChangeColor}
                value={Colors}
            ></input>
            <br />

            <label className="upload-label-right">MATERIAL</label>
            <input
                className="upload-input"
                onChange={onMaterialChange}
                value={Material}
            ></input>
            <br />

            <div>
                <button
                    style={{marginLeft: "30%"}}
                    className="form-input-btn"
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </div>

        </div>
    )
} export default UploadProduct;