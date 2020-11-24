import React from 'react';
import MainMenu from '../../components/MainMenu';
import PokemonList from '../../components/PokemonList';

import style from './styles.css';

const Home = ({ page=1 }) => {
    return (
        <div>
            <MainMenu page={page} />
            <div className="home">
                <PokemonList pageRef={page} />
            </div>
            <MainMenu page={page} />
        </div>
    );
};

export default Home;