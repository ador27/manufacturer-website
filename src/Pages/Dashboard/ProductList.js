import React from 'react';

const ProductList = ({ tool }) => {
    const { name, price } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl mb-12">

            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td><button class="btn btn-xs">Delete Product</button></td>
            </tr>
        </div>
    );
};

export default ProductList;