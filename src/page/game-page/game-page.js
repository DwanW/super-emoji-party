import React from 'react';
import { useContext } from 'react';
import { store } from '../../context/store';

import GameBoard from '../../components/game/game.component';
import { Client } from 'boardgame.io/react';


import './game-page.styles.scss';



//Game Page that renders the game client using the MainGame component;
const GamePage = () => {
  const { state } = useContext(store);

  const playerArray = Array(state.playerNum).fill('').map((e,idx) => ({playerName: state.playerIcon[idx], position: 0}));

  // initialize game state, define game interaction(moves), and define victory condition here.
  const emojiParty = {
    //setup global state object where it has a space property with value of an array, length 10 and value null for each array element.
    setup: () => ({
      // change 10 later
      dieRoll: 6,
      players: playerArray
    }),
    // phase: {
    //   rollDie:{

    //   }
    // },
    moves: {
      rollDie: (G, ctx) => {
        G.dieRoll = ctx.random.Die(6);
      },
      traverse: (G, ctx) => {
        let currentPlayer = G.players[Number(ctx.currentPlayer)];
        currentPlayer.position++;
      }
    },
    endIf: (G, ctx) => {
      // change 10 later
      let currentPlayer = G.players[Number(ctx.currentPlayer)];
      if (currentPlayer.position >= state.mapSize - 1) {
        console.log(currentPlayer.position);
        return { winner: currentPlayer.playerName };
      }
    },
  }

  const gameObj = {
    game: emojiParty,
    board: GameBoard,
    numPlayers: state.playerNum,
    debug: true 
  };

  const Game = Client(gameObj);
  return (
    <div className="game-page">
      <Game mapLayout={state.mapLayout} mapSize={state.mapSize} />
    </div>
  )
}

export default GamePage;