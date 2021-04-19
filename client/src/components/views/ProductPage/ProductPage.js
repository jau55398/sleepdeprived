import React from 'react';
import '../../App.css';
import '../../Products.css';

import { useEffect } from 'react';
import Axios from 'axios'
import { useState } from 'react'
import ImageContainer from './ImageContainer'
import CartButton from './CartButton'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../_actions/user_actions'

/**/
function ProductPage(props) {


    //const product = ProductData.products.find(x => x._id === '1');
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const [Product, setProduct] = useState([])
    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    // cart handler
    const addToCarthandler = (productId) => {
        dispatch(addToCart())
    }

    return (
        <div className="container">
            <div className="app">
                <div className="textpadding">
                    <div className="productformat">
                        <p>{Product.product_name}</p>
                        <b><p>${Product.price}</p></b>
                        <hr />
                        <p>⠀</p>
                        <p>S M L</p>
                        <p>⠀</p>
                        <p>RED/BLUE</p>
                        <p>⠀</p>
                        <p>IN STOCK: 35</p>
                        <p>⠀</p>
                        <hr />
                        <p>⠀</p>
                        <CartButton
                            addToCart={addToCarthandler}
                            detail={Product}
                        />
                        <p>⠀</p>
                        <hr />
                        <p>⠀</p>
                        <b><p> Description:
                            <br></br>{Product.description}</p></b>
                        <p>⠀</p>
                        <b><p> Material: 50% Cotton, 50% Polyester</p></b>
                    </div>
                </div>
                <div className="productpadding">
                    <ImageContainer detail={Product} />
                </div>
            </div>
        </div>

    )

}

export default ProductPage;
