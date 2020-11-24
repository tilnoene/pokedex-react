import React from 'react';
import { NavLink } from "react-router-dom";

import './styles.css';

const Header = () => (
    <header id="main-header">
        <h1>Focadex</h1>
        <NavLink to="/perfil" className="btn">Perfil</NavLink>
    </header>
);

export default Header;