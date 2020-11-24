import React from 'react';
import MainMenu from '../../components/MainMenu';
import PokemonList from '../../components/PokemonList';

import style from './styles.css';

const Home = ({ type }) => {
    return (
        <div>
            <MainMenu />
            <div className="home">
                <PokemonList />
            </div>
            <MainMenu />
        </div>
    );
};

export default Home;