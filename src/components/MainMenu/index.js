import React from 'react';
import Button from '../Button';
import Home from '../../pages/Home';

import './styles.css';

function nextPage( page ) {
    return (
        <Home page={2}/>
    );
}

const MainMenu = ( {page} ) => (
    <header id="main-footer">
        <Button title={"<"} onClick={() => {alert(page)} } />
        <Button title={">"} onClick={() => {nextPage(page)} } />
    </header>
);

export default MainMenu;