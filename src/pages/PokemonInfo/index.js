import React from 'react';
import { useLocation, useRouteMatch, useParams, useHistory } from "react-router-dom";

import PokemonPage from '../../components/PokemonPage';
import PokemonError from '../../components/PokemonError';

import './styles.css';

const PokemonInfo = () => {
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch(useHistory());

    var { name } = useParams();
    var info = location.pokemon;

    if(info === undefined){ // procura os dados do pokémon na API props == undefined
        // recebe a API completa e faz dois for aninhado
        // até encontrar um com o name == name.lower()
        // se não, retorna um erro
        //info = "batata";

        return (
            <PokemonError name={name}/>
        );

    }

    return (
        <PokemonPage pokemon={info} />
    );
};

export default PokemonInfo;