import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Main from './components/Main';
import Item from './views/Item';
import Edit from './views/Edit';

function App() {
  const [list, setList] = useState([])



  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = '/home' element = {<Main list = {list} setList = {setList}/>} default/>
          <Route path = '/products/:id' element = {<Item list = {list} setList = {setList}/>} />
          <Route path = '/products/edit/:id' element = {<Edit  list = {list} setList = {setList}/>} />
          <Route path='/' element = {<Navigate to = '/home'/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;