import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

import PokemonType from '../PokemonType';
import Button from '../Button';
import { converteID } from '../functions';

import './styles.css';

const PokemonPage = ({ pokemon }) => {
    const username = localStorage.getItem("current_username");
    const data = localStorage.getItem(username);
    const [favorited, setFavorited] = useState(false);

    // verificar se já está favoritado percorrendo o array
    // repetir elementos está causando os erros de referência no console
    /*function seeFav(){
        if(data !== null){
            const oldData = JSON.parse(data);
            
            oldData.map(e => {
                if(e.id === pokemon.id){
                    return setFavorited(true);
                }
            });

            return false;
        }
    }*/

    return (
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
                    
                    {!favorited &&
                        <Button title="Favoritar" onClick={() => { 
                            setFavorited(true);
                            if(data === "null"){
                                localStorage.setItem(username, JSON.stringify([pokemon]));
                            } else{
                                const oldData = JSON.parse(data);
                                localStorage.setItem(username, JSON.stringify([...oldData, pokemon]));
                            }
                        }}/>
                    }

                    {favorited &&
                        <Button title="Remover" warning={true} onClick={() => { 
                            setFavorited(false);
                            
                        }}/>
                    }

                </div>
            </div>
        </div>
    );
}

export default PokemonPage;