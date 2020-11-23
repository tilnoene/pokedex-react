import React from 'react';

import style from './styles.css';

const PokemonType = ({ type }) => {
    return (
      <div className={`pokemon-type ${type}`}><p>{type}</p></div>
    );
};

export default PokemonType;