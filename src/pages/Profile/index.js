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
                {data === "null" && 
                <div>
                    <p className="not-pokemon-found">Nenhum pokémon encontrado!</p>
                    <div className="container-btn-back">
                        <NavLink to="/pokemon" className="btn" >Voltar</NavLink> 
                    </div>
                </div>}
                {data !== "null" && 
                <div className="teste">
                    <div className="container-btn-back">
                        <NavLink to="/pokemon" className="btn" >Voltar</NavLink> 
                    </div>
                    <PokemonList pokemons={JSON.parse(data)} />
                </div>}
            </div>
        </div>
    );
}

export default Profile;