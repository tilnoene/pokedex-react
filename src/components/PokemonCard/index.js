import React from 'react';
import PokemonType from '../PokemonType';

import style from './styles.css';

function converteID(id) {
  if(id < 10) return `00${id}`;
  if(id < 100) return `0${id}`;
  return `${id}`;
}

const PokemonCard = ({ pokemons }) => {
    return (
      <div className="ContainerPokemonCard">
        {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="PokemonCard">
          <img src={pokemon.image_url}/>
          <p>{pokemon.name} # {converteID(pokemon.number)}</p>
          <div className="PokemonCardTypes">
            {pokemon.kind.split(';').map((type, index) => (
              <PokemonType key={index} type={type}/>
            ))}
          </div>
        </div>
      ))}
      </div>
    );
};

export default PokemonCard;