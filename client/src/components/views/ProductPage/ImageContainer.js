import React from 'react';
import '../../App.css';
import '../../Products.css';

import { useEffect } from 'react';
import Axios from 'axios'
import { useState } from 'react'
import ImageGallery from 'react-image-gallery'

/**/
function ImageContainer(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];

            props.detail.images && props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ImageContainer;
