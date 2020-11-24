import React from 'react';
import { NavLink } from "react-router-dom";
import PokemonType from '../PokemonType';
import PokemonInfo from '../../pages/PokemonInfo'
import {converteID} from '../functions.js';

import style from './styles.css';

const PokemonList = ({ pokemons }) => {
    return (
      <div className="ContainerPokemonCard">
        {pokemons.map((pokemon) => (
        <NavLink to={{ pathname: `/pokemon/${pokemon.name}`, pokemon: pokemon }} key={pokemon.id} className="PokemonCard">
          <img src={pokemon.image_url}/>
          <p>{pokemon.name} # {converteID(pokemon.number)}</p>
          <div className="PokemonCardTypes">
            {pokemon.kind.split(';').map((type, index) => (
              <PokemonType key={index} type={type}/>
            ))}
          </div>
        </NavLink>
      ))}
      </div>
    );
};

export default PokemonList;