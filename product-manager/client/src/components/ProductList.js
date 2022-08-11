import axios from 'axios';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';



const ProductList = (props) => {
    const {list, setList} = props;

    const deleteItem = (itemId) => {
        axios.delete(`http://localhost:8000/api/products/${itemId}`)
            .then((res) => {
                const updatedList = list.filter((item) => {
                    return item._id !== itemId
                })
                setList(updatedList)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>All Products:</h2>
            {/* each item is an object with _id, title, price, desc, etc.*/}
            {
                list.map((item, index) => {
                    return <div key = {index} className = 'map'>
                        <Link to = {`/products/${item._id}`} className = 'link'>{item.title}</Link>
                        <Link to = {`/products/edit/${item._id}`} className = 'link'>Edit</Link>
                        <button onClick = {(e) => {deleteItem(item._id)}}>Delete</button>
                    </div>
                })
            }
        </div>
    );
}

export default ProductList;