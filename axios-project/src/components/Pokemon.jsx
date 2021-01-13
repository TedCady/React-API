import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [characters, setCharacters] = useState([]);

    const getPokemon= () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setCharacters(response.data.results))
    };
    return (
        <div>
        
        <button onClick={getPokemon}>Get 'em</button>
        {characters.map((character, i)=>[
            <p>{character.name}</p>
        ])}
        </div>
    );
}
export default Pokemon;