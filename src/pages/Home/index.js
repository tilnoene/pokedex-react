import { React, useEffect, useState } from 'react';
import axios from 'axios';

import PokemonList from '../../components/PokemonList';
import Button from '../../components/Button';

import './styles.css';

const Home = ({ pageRef=1 }) => {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(pageRef);
    const totalPages = 32;

    useEffect(() => {
        axios
            .get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
            .then((response) => response.data)
            .then((data) => setPokemons(data.data));
    }, []);

    function loadPokemons( page ) {
        axios
            .get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
            .then((response) => response.data)
            .then((data) => setPokemons(data.data));
    }

    function nextPage( page ) {
        // ver tamanho max
        if(page !== totalPages){
            setPage(page+1);
            loadPokemons(page+1);
        } else{
            // estiliza botao
            console.log('fim');
        }
        
    }

    function prevPage( page ) {
        if(page !== 1){
            setPage(page-1);
            loadPokemons(page-1);
        } else{
            // muda o estilo
            console.log('pagina inicial');
        }
    }

    return (
        <div>
            <div className="main-menu">
                <Button title="<" onClick={() => { prevPage( page ) }} />
                <p>{page} / {totalPages}</p>
                <Button title=">" onClick={() => { nextPage( page ) }} />
            </div>
            
            <div className="home">
                <PokemonList pokemons={pokemons} />
            </div>

            <div className="main-menu">
                <Button title="<" onClick={() => { prevPage( page ) }} />
                <p>{page} / {totalPages}</p>
                <Button title=">" onClick={() => { nextPage( page ) }} />
            </div>
        </div>
    );
};

export default Home;