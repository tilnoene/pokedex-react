import React from 'react';
import PokemonType from '../PokemonType';
import {converteID} from '../functions.js';

import './styles.css';

const PokemonPage = ({ pokemon }) => (
    <div className="ContainerPokemonPage">
        <div className="PokemonPage">
            <img src={pokemon.image_url} />
            <h1 className="pokemonName">{pokemon.name}</h1>
            <p>Número: {converteID(pokemon.id)}</p>
            <div className="PokemonPageTypes">
                {pokemon.kind.split(';').map((type, index) => (
                <PokemonType key={index} type={type}/>
                ))}
            </div>
            
        </div>
    </div>
);

export default PokemonPage;