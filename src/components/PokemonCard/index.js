import React from 'react';
import { NavLink } from "react-router-dom";
import PokemonType from '../PokemonType';
import PokemonInfo from '../../pages/PokemonInfo'

import style from './styles.css';

function converteID(id) {
  if(id < 10) return `00${id}`;
  if(id < 100) return `0${id}`;
  return `${id}`;
}

const Teste = () => (
  <div>
    oi
  </div>
);

const redirecionaPokemonInfo = ( {pokemon} ) => (
  <div>
    oiasd
  </div>
);

const PokemonCard = ({ pokemons }) => {
    return (
      <div className="ContainerPokemonCard">
        {pokemons.map((pokemon) => (
        <NavLink to={{ pathname: `/pokemons/${pokemon.name}`, state: { pokemon } }} key={pokemon.id} className="PokemonCard" onClick={() => { 
          <PokemonInfo pokemon={pokemon}/>
          }}>

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

export default PokemonCard;