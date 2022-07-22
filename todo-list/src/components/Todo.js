import React, {useState} from 'react';

const Todo = (props) => {

    const {taskArray, setTaskArray} = props;
    const [complete, setComplete] = useState(false);

    //change CSS property to strik thru text in the list element
    const strikeTask = (specificTask) => {
        if (complete === false){
            setComplete(true);
            specificTask.textDecoration = 'line-through';
        }else{
            setComplete(false);
            specificTask.textDecoration = 'none';
        }
    }
    //p is each item from task array, ie taskObj = {id: , task: }
    const deleteItem = (uniqueId) => {
        const newList = taskArray.filter((p) => {
            return p.id !== uniqueId;
        })
        setTaskArray(newList);
    }

    //each item from taskArray is a taskObj = {id: , task: }
    return (
        <div>
            {
                taskArray.map((item, index) => {
                    return <div className='d-flex p-2 justify-content-center align-items-center'>
                        <ul key = {index} className = 'list-group'>
                            <li style = {{textDecoration: `${item.textDecoration}`}} className = 'list-group-item list-group-item-light m-2'>{item.task}</li>
                        </ul>
                        <input 
                        type = 'checkbox' 
                        className='me-4 ms-1' 
                        onClick = {(e) => strikeTask(item)}>
                        </input>
                        <button 
                        className='btn btn-info h-25'                    
                        onClick = {(e) => deleteItem(`${item.id}`)}>Delete</button>
                    </div>
                })
            }
        </div>
    );
}

export default Todo;