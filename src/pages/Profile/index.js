import React from 'react';
import { NavLink } from 'react-router-dom';

import PokemonList from '../../components/PokemonList';

import './styles.css';

const Profile = () => {
    const username = localStorage.getItem("current_username");
    const data = localStorage.getItem(username);

    return (
        <div className="container-profile">
            <div>
                {username === "null" && 
                <div>
                    Insira um nome para acessar essa página!
                    <div className="container-btn-back">
                        <NavLink to="/login" className="btn">Voltar</NavLink> 
                    </div>
                </div>
                }
                {data === "null" && username !== "null" && 
                <div>
                    <p className="not-pokemon-found">Nenhum pokémon encontrado!</p>
                    <div className="container-btn-back">
                        <NavLink to="/pokemon" className="btn">Voltar</NavLink> 
                        <NavLink to="/login" className="btn btn-exit" onClick={() => {
                            localStorage.setItem("current_username", "null");
                        }}>Sair</NavLink> 
                    </div>
                </div>}
                {data !== "null" && username !== "null" && 
                <div>
                    <div className="container-pokemon-trainer">
                        <p>Favoritos do(a) treinador(a) <a>{username}</a></p>
                    </div>
                    <div className="container-btn-back">
                        <NavLink to="/pokemon" className="btn">Voltar</NavLink> 
                        <NavLink to="/login" className="btn btn-exit" onClick={() => {
                            localStorage.setItem("current_username", "null");
                        }}>Sair</NavLink> 
                    </div>
                    <div className="home">
                        <PokemonList pokemons={JSON.parse(data)} />
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Profile;