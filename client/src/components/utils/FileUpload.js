import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import {CloudUploadOutlined} from '@ant-design/icons';
import Axios from 'axios'


function FileUpload(props) {

    const [Images, setImages] = useState([])
    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }
    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])

        // save file to server
        Axios.post('/api/product/uploadImage', formData, config)
            .then(response => {
                if (response.data.success) {

                    setImages([...Images, response.data.image])
                    props.refreshFunction([...Images, response.data.image])

                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }

    return (
        <div style={{display: 'flex', 
                    justifyContent: 'space-between'
                    }}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={100000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '300px', 
                        height: '240px',
                        border: 'solid',
                        borderWidth:'2px', 
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />


                        <CloudUploadOutlined style={{ fontSize: '3rem' }} />


                    </div>
                )}
            </Dropzone>

            <div style={{
                display: 'flex', 
                width: '350px',
                height: '240px', 
                overflowX: 'scroll', 
                border: 'solid',
                borderWidth: '2px'
            }}>
                {Images.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '200px', width: '200px', height: '240px' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FileUpload