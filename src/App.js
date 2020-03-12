import React from 'react';
import { useState } from 'react';
import { GameBoard, emojiParty} from './components/MainGame';
import { Client } from 'boardgame.io/react';

export default function App() {
  const [playerNum, setPlayerNum] = useState(2);
  const [gameBegin, setGameBegin] = useState(false);
  
  const gameObj = {
    game: emojiParty,
    board: GameBoard,
    numPlayers: playerNum,
  };
  const Game = Client(gameObj);
  return (
    <React.Fragment>
        {gameBegin ? <Game />: 
        <div>
          <button onClick={() =>setGameBegin(true)}>Start Game</button>
          <button onClick={() =>setPlayerNum(2)}>Two Player</button>
          <button onClick={() =>setPlayerNum(3)}>Three Player</button>
        </div>}
    </React.Fragment>
  )
}