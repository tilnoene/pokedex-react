import React from 'react';
import MainMenu from '../../components/MainMenu';
import Pokemons from '../Pokemons';

import style from './styles.css';

const Home = ({ type }) => {
    return (
        <div>
            <MainMenu />
            <Pokemons />
        </div>
    );
};

export default Home;