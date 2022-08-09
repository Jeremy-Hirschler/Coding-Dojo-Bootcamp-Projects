import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {list} = props;

    return (
        <div>
            <h2>All Products:</h2>
            {
                list.map((item, index) => {
                    return <div key = {index} style = {{
                        margin: '10px',
                        fontSize: '1.3em'
                    }}>
                        
                        <Link to = {`/products/${item._id}`}>{item.title}</Link>

                    </div>
                })
            }
        </div>
    );
}

export default ProductList;