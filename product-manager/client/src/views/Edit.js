import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom';

const Edit = (props) => {

    const {list, setList} = props;
    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setNewTitle(res.data.title)
                setNewPrice(res.data.price)
                setNewDesc(res.data.desc)
            })
            .catch((err) => {
                console.log('Error with axios get', err)
            })
    },[])

    const editItem = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/edit/${id}`, {
            title: newTitle,
            price: newPrice,
            desc: newDesc
        })
        .then((res) => {
            const newList = list.filter((item) => {
                return item._id !== res.data._id
            })
            setList([...newList, res.data])
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    

    return (
        <div>
            <h2>Update Item</h2>
            <form onSubmit = {editItem} className = 'edit'>
                <div>
                <label>Update Title: </label>
                <input type = 'text' value = {newTitle} onChange = {(e) => setNewTitle(e.target.value)}/>
                </div>
                <div>
                <label>Update Price: </label>
                <input type = 'text' value = {newPrice} onChange = {(e) => setNewPrice(e.target.value)}/>
                </div>
                <div>
                <label>Update Description: </label>
                <input type = 'text' value = {newDesc} onChange = {(e) => setNewDesc(e.target.value)}/>
                </div>
                <button>Update</button>
            </form>
            <Link to = '/home'>Back To Home</Link>
        </div>
    )
}

export default Edit;