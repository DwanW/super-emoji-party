import React from 'react';
import { useContext } from 'react';
import { store } from '../../context/store';
import { setPlayerNum } from '../../context/action';

import { Link } from 'react-router-dom';

import './front-page.styles.scss';


// FrontPage that sets up number of players for the game and Link to the Game Page;
const FrontPage = () => {
    const { dispatch } = useContext(store);


    //Game object to setup the game;

    return (
        <div className="start-menu">
            <header>to do Game Header component</header>
            <Link to="/game" className="menu-option">Start Game</Link>
            <button onClick={() => dispatch(setPlayerNum(2))} className="menu-option">Two Player</button>
            <button onClick={() => dispatch(setPlayerNum(3))} className="menu-option">Three Player</button>
            <Link to="/setting" className="menu-option">Settings</Link>
        </div>
    )
}

export default FrontPage;