import React from 'react';
import { useParams, useHistory } from "react-router-dom";

import './styles.css';

const PokemonInfo = ({ pokemon=null }) => {
    const history = useHistory();
    var { name } = useParams();
    var info = {};

    if(pokemon === null){ // procura os dados do pokémon na API
        // recebe a API completa e faz dois for aninhado
        // até encontrar um com o name == name
        // se não, retorna um erro
        info = "batata";
    } else{
        // adiciona a rota o endereço
        //history.push(`/${pokemon.name}`); // adiciona essa rota no URL
        
        info = "carro de malandro";
        name = pokemon.name;
    }

    return (
        <div>
            Página de um pokemon chamado {name} com {info}
        </div>
    );
};

export default PokemonInfo;