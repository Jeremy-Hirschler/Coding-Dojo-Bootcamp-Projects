import React, {useState} from 'react';
import {nanoid} from 'nanoid';

const Form = (props) => {

    const {task, setTask, taskArray, setTaskArray} = props;
    
    const addItem = (e) => {
        e.preventDefault();
        
        const taskObj = {
            id: nanoid(),
            task,
            textDecoration: 'none'
        };
        
        setTaskArray([...taskArray, taskObj]);
        setTask('');
    }
    
    return (
        <div>
            <form onSubmit = {addItem}>
                <input className='m-2'
                type = 'text' 
                value = {task}
                onChange = {(e) => setTask(e.target.value)}></input>
                <button className='m-2 bg-primary rounded'>Add</button>
            </form>
        </div>
    );
}

export default Form;