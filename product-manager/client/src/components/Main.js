import React from 'react'
import Form from './Form';
import ProductList from './ProductList';

const Main = (props) => {
    const {list, setList} = props;
    
    return (
        <div>
            <Form list = {list} setList = {setList}/>
            <hr/>
            <ProductList list = {list} setList = {setList}/>
        </div>
    );
}

export default Main;