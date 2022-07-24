import React, {useEffect, useState} from 'react';

const Pokemon = (props) => {

    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0')
            .then(response => {
                return response.json();
            }).then(res => {
                setNames(res.results)
            }).catch(error => {
                console.log(error);
            })
    }, []);
    //each item passing in is {name: 'bulbasaur', url: '...'}
    return (
        <div>
            {
                names.map((pokemon, index) => {
                    return <div key = {index} className='d-flex align-items'>
                        <ul className='col-2 mx-auto text-primary bg-light rounded'>
                            <li>{pokemon.name}</li>
                        </ul>
                    </div>
                })
            }
        </div>
    );  
}





export default Pokemon;