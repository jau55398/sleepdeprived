import React from 'react';
import '../../App.css';
import '../../Products.css';

import { useEffect } from 'react';
import Axios from 'axios'
import { useState } from 'react'
import ImageGallery from 'react-image-gallery'

import '../../App.css';
import '../../Products.css';
/**/
function CartButton(props) {

    // cart handler
    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    return (
        <div>
            <button
                onClick={addToCarthandler}
                className="button">
                Add to cart
            </button>
        </div>
    )
}

export default CartButton;
