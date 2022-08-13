import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {
    const {authorList, setAuthorList} = props;
    const navigate = useNavigate();

    const removeItem = (itemId) => {
        axios.delete(`http://localhost:8000/api/authors/${itemId}`)
        .then((res)=> {
            console.log(res)
            const newList = authorList.filter((item)=> {
                return item._id !== itemId
            })
            setAuthorList(newList)
        })
        .catch((err)=> {
            console.log(err)
        })
    }




    //each item in map is object with _id, name, etc.
    return (
        <div>
            <div className='w-50 mx-auto d-flex flex-column align-items-start'>

                <h1>Favorite authors</h1>
                <Link to = '/new'>Add an author</Link>
                <p>We have quotes by:</p>
            </div>
            <div className='row'>

                <table className = 'w-50 mx-auto border border-dark table table-striped table-bordered'>
                    <thead className=''>
                        <tr>
            
                            <th>Author</th>
                            <th colSpan={2}>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        authorList.map((item, index)=> {
                            return <tr key = {item._id}>
                    
                                <td>{item.name}</td>
                                <td>
                                    <button className='btn btn-info text-light' onClick = {()=> navigate(`/authors/edit/${item._id}`)}>Edit</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger text-light' onClick = {()=> removeItem(item._id)}>Delete</button>
                                </td>
                                {console.log(item._id)}
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default AuthorList;