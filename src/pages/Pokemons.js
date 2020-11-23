import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import axios from 'axios';

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokedex20201.herokuapp.com/pokemons?page=1')
            .then((response) => response.data)
            .then((data) => setPokemons(data.data));
    }, []);
    
    return (
        <PokemonCard pokemons={pokemons}/>
    );
}