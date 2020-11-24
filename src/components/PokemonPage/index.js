import React from 'react';
import { NavLink } from 'react-router-dom';

import PokemonType from '../PokemonType';
import Button from '../Button';
import { converteID } from '../functions';

import './styles.css';

const PokemonPage = ({ pokemon }) => (
    <div>
        <div className="container-btn-back">
            <NavLink to="/pokemon" className="btn" >Voltar</NavLink> 
        </div>
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
                <Button title="Favoritar" onClick={() => { 
                    const username = localStorage.getItem("current_username");
                    const data = localStorage.getItem(username);

                    if(data === "null"){
                        localStorage.setItem(username, JSON.stringify([pokemon]));
                    } else{
                        const oldData = JSON.parse(data);
                        localStorage.setItem(username, JSON.stringify([...oldData, pokemon]));
                    }
                    // mudar botao para remover...
                    
                }}/>
            </div>
        </div>
    </div>
);

export default PokemonPage;