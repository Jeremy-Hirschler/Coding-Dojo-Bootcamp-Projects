import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    
    const {list, setList} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            desc
        })
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setList([...list, res.data])
        })
        .catch((err) => {
            console.log(err)
        });
        setTitle('');
        setPrice('');
        setDesc('');
    }
    
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit = {submitHandler} className = 'form'>
                <div className='text-wrapper'>
                    <label>Title</label>
                    <input type = 'text' value = {title} 
                        onChange = {(e) => setTitle(e.target.value)} />
                </div>
                <div className='text-wrapper'>
                    <label>Price</label>
                    <input type = 'text' value = {price} 
                        onChange = {(e) => setPrice(e.target.value)} />
                </div>
                <div className='text-wrapper'>
                    <label>Description</label>
                    <input type = 'text' value = {desc} 
                        onChange = {(e) => setDesc(e.target.value)} />
                </div>
                <button className = 'button'>Create</button>
            </form>
        </div>
    );
}

export default Form;