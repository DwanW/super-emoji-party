import React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

import './front-page.styles.scss';
import PlayerContext from '../../context/player-context';


// FrontPage that sets up number of players for the game and Link to the Game Page;
const FrontPage = () => {
    const { setPlayerNum } = useContext(PlayerContext);

    //Game object to setup the game;

    return (
        <div>
            <div className="start-menu">
                <header>to do Game Header component</header>
                <Link to="/game" className="menu-option">Start Game</Link>
                <button onClick={() => setPlayerNum(2)} className="menu-option">Two Player</button>
                <button onClick={() => setPlayerNum(3)} className="menu-option">Three Player</button>
                <Link to="/setting" className="menu-option">Settings</Link>
            </div>
        </div>
    )
}

export default FrontPage;