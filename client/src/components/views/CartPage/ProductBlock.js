import React from 'react'



function ProductBlock(props) {

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="img" src />
                </td>
                <td>{product.quantity} EA</td>
                <td>$ {product.price} EA</td>
                <td><button onClick>Remove</button></td>

            </tr>
        ))
    )
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
} export default ProductBlock