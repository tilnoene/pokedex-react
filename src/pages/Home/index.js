import React from 'react';
import MainMenu from '../../components/MainMenu';
import Pokemons from '../Pokemons';

import style from './styles.css';

const Home = ({ type }) => {
    return (
        <div>
            <MainMenu />
            <div class="home">
                <Pokemons />
            </div>
            <MainMenu />
        </div>
    );
};

export default Home;