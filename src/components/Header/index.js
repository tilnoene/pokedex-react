import React from 'react';
import { NavLink } from "react-router-dom";

import './styles.css';

const Header = () => (
    <header id="main-header">
        <NavLink to="/" activeClassName="selected">Focadex</NavLink>
        <NavLink to="/perfil" className="btn">Perfil</NavLink>
    </header>
);

export default Header;