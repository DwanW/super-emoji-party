import React from 'react';
import { useContext } from 'react';
import { store } from '../../context/store';

import GameBoard from '../../components/game/game.component';
import { Client } from 'boardgame.io/react';


import './game-page.styles.scss';



//Game Page that renders the game client using the MainGame component;
const GamePage = () => {
  const { state } = useContext(store);

  const playerArray = Array(state.playerNum).fill('').map((e, idx) => ({ playerName: state.playerIcon[idx], health: 50, spirit: 50, inventory: {}, position: 0 }));

  // initialize game state, define game interaction(moves), and define victory condition here.
  const emojiParty = {
    //setup global state object where it has a space property with value of an array, length 10 and value null for each array element.
    setup: () => ({
      // change 10 later
      dieRoll: 6,
      numOfRoll: 1,
      players: playerArray,
      choicePointer: -1,
      currentEffectType: '',
      currentEffectValue: 0
    }),
    // phase: {
    //   rollDie:{

    //   }
    // },
    moves: {
      rollDie: (G, ctx) => {
        G.dieRoll = ctx.random.Die(6);
        G.numOfRoll--;
      },
      traverse: (G, ctx, isForward) => {
        // console.log(isForward);
        let currentPlayer = G.players[Number(ctx.currentPlayer)];
        isForward ? currentPlayer.position++ : currentPlayer.position--;
      },
      relocate: (G, ctx, idx) => {
        let currentPlayer = G.players[Number(ctx.currentPlayer)];
        currentPlayer.position = idx;
      },
      setChoice: (G, ctx, idx, type) => {
        G.choicePointer = idx;
        G.currentEffectType = type;
      },
      setValue: (G, ctx, value) => {
        G.currentEffectValue = value;
      },
      setHealth: (G, ctx, value) => {
        let currentPlayerHealth = G.players[Number(ctx.currentPlayer)].health;
        let resultHealth = currentPlayerHealth + value;
        if (resultHealth > 0) {
          G.players[Number(ctx.currentPlayer)].health = resultHealth;
        } else {
          G.players[Number(ctx.currentPlayer)].health = 0;
        }
      },
      setSpirit: (G, ctx, value) => {
        let currentPlayerSpirit = G.players[Number(ctx.currentPlayer)].spirit;
        let resultSpirit = currentPlayerSpirit + value;
        if (resultSpirit > 0) {
          G.players[Number(ctx.currentPlayer)].spirit = resultSpirit;
        } else {
          G.players[Number(ctx.currentPlayer)].spirit = 0;
        }
      }
    },

    turn: {
      onBegin: (G) => {
        G.numOfRoll = 1;
        G.choicePointer = -1;
        G.currentEffectType = '';
        G.currentEffectValue = 0;
      }
    },

    endIf: (G, ctx) => {
      // change 10 later
      let currentPlayer = G.players[Number(ctx.currentPlayer)];
      if (currentPlayer.position >= state.mapSize - 1) {
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