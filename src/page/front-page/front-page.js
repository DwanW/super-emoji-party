import React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

import './front-page.styles.scss';
import PlayerContext from '../../context/player-context';

const FrontPage = () => {
    const { setPlayerNum } = useContext(PlayerContext);

    //Game object to setup the game;

    return (
        <div>
                <div>
                    <Link to="/game">Start Game</Link>
                    <button onClick={() => setPlayerNum(2)}>Two Player</button>
                    <button onClick={() => setPlayerNum(3)}>Three Player</button>
                </div>
        </div>
    )
}

export default FrontPage;