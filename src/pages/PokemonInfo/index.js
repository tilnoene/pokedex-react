import { useEffect, useState, React } from 'react';
import { useLocation, useRouteMatch, useParams, useHistory } from "react-router-dom";
import axios from 'axios';

import PokemonPage from '../../components/PokemonPage';
import PokemonError from '../../components/PokemonError';

import './styles.css';

const PokemonInfo = () => {
    const [pokemons, setPokemons] = useState([]);

    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch(useHistory());

    var { name } = useParams();
    var info = location.pokemon;

    function loadPokemons( page ) {
        axios
            .get(`https://pokedex20201.herokuapp.com/pokemons`)
            .then((response) => response.data)
            .then((data) => setPokemons(data.data));
    }

    if(info === undefined){ 
        axios
            .get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
            .then((response) => setPokemons(response.data))
            .catch((error) => {
                alert('ERRO! Reinicie a página.');
            });

        info = pokemons;
    }

    return (
        <div>     
            {(info === null || info.length === 0) && <PokemonError name={name}/> }
            {info !== null && info.length !== 0 && <PokemonPage pokemon={info} /> }
        </div>
    );
};

export default PokemonInfo;