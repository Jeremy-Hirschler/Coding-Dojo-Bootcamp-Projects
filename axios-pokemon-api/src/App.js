import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  
  const [names, setNames] = useState([]);

  useEffect(()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0')
      .then(response => {
        setNames(response.data.results);
      }).catch(error => {
        console.log(error);
      })
  },[])


  //each item passed into map function is {name: 'bulbasaur, url: '...'}
  return (
    <div className="App">
      <ol className='mx-auto p-4 col-2 bg-light list-group'>
        {
          names.map((pokemon, index) => {
            return <li key = {index} className='m-2 p-1 rounded bg-info'>
              {pokemon.name}
              </li>
          })
        }
      </ol>
    </div>
  );
}

export default App;