import React from 'react';

import style from './styles.css';

const PokemonError = ( {name} ) => {
    return (
        <div className="containerError">
            <h1>ERRO</h1>
            <p>Não encontramos nenhum pokémon chamado "{name}"</p>
            <p>Certifique-se de que o nome foi inserido corretamente e tente novamente</p>
        </div>
    );
}

export default PokemonError;