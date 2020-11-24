import React from 'react';
import { NavLink } from "react-router-dom";

import './styles.css';

const Login = () => {
    return (
        <div className="container-login">
            <NavLink to="/pokemon"> 
                listar pokemon (provisório)
            </NavLink>
        </div>
    );
};

export default Login;