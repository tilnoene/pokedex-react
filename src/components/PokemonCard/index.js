import React from 'react';
import PokemonType from '../PokemonType';

import style from './styles.css';

const PokemonCard = ({ title="a", styles="btn" }) => {
    return (
      <div className="PokemonCard">
        foto
        <p>nome</p>
        <div className="PokemonCardTypes"><PokemonType /><PokemonType /></div>
      </div>
    );
};

export default PokemonCard;