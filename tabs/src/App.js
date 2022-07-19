
import './App.css';
import Tabs from './components/Tabs';
import React, {useState} from 'react';


function App() {

  const items = [
    {tab: 'Tab 1', content: 'This is some tab 1 content!'},
    {tab: 'Tab 2', content: 'Tab 2 content is in here.'},
    {tab: 'Tab 3', content: 'This is tab 3 that you\'ve clicked.'},
]
  

  



  return (
    <div className="App">
      <Tabs itemArray = {items}/>
    </div>
  );
}

export default App;
