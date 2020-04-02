import React from 'react';
import { useContext } from 'react';
import { store } from '../../context/store';

import { GameBoard, emojiParty } from '../../components/game/game.component';
import { Client } from 'boardgame.io/react';

import './game-page.styles.scss';

//Game Page that renders the game client using the MainGame component;
const GamePage = () => {
    const { state } = useContext(store);
    
    const gameObj = {
        game: emojiParty,
        board: GameBoard,
        numPlayers: state.playerNum,
    };

    const Game = Client(gameObj);

    return (
        <div className="game-page">
            <Game />
        </div>
    )
}

export default GamePage;