import React from 'react';
import { NavLink } from 'react-router-dom';

import PokemonList from '../../components/PokemonList';

import './styles.css';

const Profile = () => {
    const username = localStorage.getItem("current_username");
    const data = localStorage.getItem(username);
     console.log(username); //ver como fica quando vc remove
    return (
        <div className="container-profile">
            <div>
                {(username === "null" || username === null || username === undefined) && 
                <div>
                    Insira um nome para acessar essa página!
                    <div className="container-btn-back">
                        <NavLink to="/login" className="btn">Voltar</NavLink> 
                    </div>
                </div>
                }
                {data == "null" && username != null && username != undefined && 
                <div>
                    <p className="not-pokemon-found">Nenhum pokémon encontrado!</p>
                    <div className="container-btn-back">
                        <NavLink to="/pokemon" className="btn">Voltar</NavLink> 
                        <NavLink to="/login" className="btn btn-exit red" onClick={() => {
                            localStorage.setItem("current_username", "null");
                        }}>Sair</NavLink> 
                    </div>
                </div>}
                {data != "null" && username != undefined && username != "null" && 
                <div>
                    <div className="container-pokemon-trainer">
                        <p>Favoritos do(a) treinador(a) <a>{username}</a></p>
                    </div>
                    <div className="container-btn-back">
                        <NavLink to="/pokemon" className="btn">Voltar</NavLink> 
                        <NavLink to="/login" className="btn btn-exit red" onClick={() => {
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