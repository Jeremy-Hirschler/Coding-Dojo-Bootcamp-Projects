import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';


const Item = (props) => {

    const {id} = useParams();
    const [oneItem, setOneItem] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setOneItem(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <div className='single-item'>
            <p>{oneItem.title}</p>
            <p>Price: ${oneItem.price}</p>
            <p>Description: {oneItem.desc}</p>
            <Link to = '/home'>Back To Home</Link>
        </div>
        
    );
}

export default Item;