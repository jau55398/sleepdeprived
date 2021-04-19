import React from 'react'


function DefaultImage(props) {
    return (
        <div>

            
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{width:'35%'}} 
                            src={`http://localhost:5000/${image}`} alt="productImage" />
                    </div>
                ))}
            
        </div>
    )
}

export default DefaultImage