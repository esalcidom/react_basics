import React from 'react'

const Product = ({product}) => (
    <div>
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
    </div>
)

export default Product;