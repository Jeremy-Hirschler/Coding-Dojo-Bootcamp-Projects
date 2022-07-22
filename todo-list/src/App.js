
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import React, {useState} from 'react';

function App() {

  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);
  
  return (
    <div className='App border border-secondary rounded w-50 mx-auto'>
      <h1>To-do</h1>
      <Form task = {task} setTask = {setTask} taskArray = {taskArray} setTaskArray = {setTaskArray}/>
      <Todo taskArray = {taskArray} setTaskArray = {setTaskArray}/>
    </div>
  );
}

export default App;
