import React from 'react';
import { NavLink } from 'react-router-dom';

import PokemonType from '../PokemonType';
import Button from '../Button';
import {converteID} from '../functions.js';

import './styles.css';

const PokemonPage = ({ pokemon }) => (
    <div>
        <NavLink to="/pokemon/" className="btn btn-back" >Voltar</NavLink> 
        <div className="ContainerPokemonPage">
            <div className="PokemonPage">
                <img src={pokemon.image_url} />
                <p className="pokemonName">{pokemon.name}</p>
                <p>número: {converteID(pokemon.id)}</p>
                <div className="PokemonPageTypes">
                    {pokemon.kind.split(';').map((type, index) => (
                    <PokemonType key={index} type={type}/>
                    ))}
                </div>
                <Button title="Favoritar" />
            </div>
        </div>
    </div>
);

export default PokemonPage;