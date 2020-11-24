import { useEffect, useState } from 'react';
import PokemonCard from '../PokemonCard';
import axios from 'axios';

export default function PokemonList( {pageRef=1} ) {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(pageRef);

    useEffect(() => {
        axios
            .get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
            .then((response) => response.data)
            .then((data) => setPokemons(data.data));
    }, []);
    
    return (
        <PokemonCard pokemons={pokemons}/>
    );
}