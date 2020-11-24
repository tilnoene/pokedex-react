import { useState, React } from 'react';
import { useHistory, NavLink } from "react-router-dom";

import Button from '../../components/Button';

import './styles.css';

export default function Login() {
    const [username, setUsername]  = useState(null);
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();

        if(username == null){
            alert('Insira um nome válido!')
        } else{
            history.push('/pokemon');

            localStorage.setItem("current_username", username);
            const current_data = localStorage.getItem(username);
            
            if(current_data == null){
                localStorage.setItem(username, "null");
            }
        } 
    };
  
    return (
        <form onSubmit={handleLogin} className="container-login">
            <label htmlFor="username">Treinador: </label>
            <input name="username" type="text" id="username" autoComplete="off" 
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button title="Login" />
        </form>
    );
}