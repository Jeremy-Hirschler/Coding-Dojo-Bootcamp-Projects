import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import AuthorList from '../components/AuthorList';

const Main = (props) => {
    const {authorList, setAuthorList} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            
            setAuthorList(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    //each item in map is object with _id, name, etc.
    return (
        <div className='container'>
            <AuthorList authorList = {authorList} setAuthorList = {setAuthorList}/>
            
        </div>
    );
}

export default Main;