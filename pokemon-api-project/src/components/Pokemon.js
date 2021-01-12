import React, { useState } from 'react';


const Pokemon = (props) => {
    const [characters, setCharacters] = useState([]);

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setCharacters(response.results))
    };
    
    return (
        <div>
        <button onClick={getPokemon}>Get 'em</button>
            {characters.length > 0 && characters.map((characters, index)=>{
                return (<div key={index}>{characters.name}</div>)
                
            })}
        </div>
    );
}
export default Pokemon;
