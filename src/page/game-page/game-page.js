import React from 'react';
import { useContext } from 'react';
import { store } from '../../context/store';

import GameBoard from '../../components/game/game.component';
import { Client } from 'boardgame.io/react';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './game-page.styles.scss';

//Game Page that renders the game client using the MainGame component;
const GamePage = () => {
  const { state } = useContext(store);

  const playerArray = Array(state.playerNum).fill('').map((e, idx) => ({ playerName: state.playerIcon[idx], health: 11, spirit: 30, inventory: {}, position: 0 }));

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
      currentEffectValue: 0,
      outComeIdx: -1
    }),
    moves: {
      rollDie: (G, ctx) => {
        let currentPlayer = G.players[Number(ctx.currentPlayer)];
        let rollNum = Math.floor(10 / (1 + Math.pow(Math.E, 0.027425 * (50 - currentPlayer.spirit))));
        G.dieRoll = ctx.random.Die(rollNum);
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
      setChoice: (G, ctx, idx, choiceObj) => {
        let currentPlayerHealth = G.players[Number(ctx.currentPlayer)].health;
        G.choicePointer = idx;
        let randomNum = ctx.random.Number();
        if (currentPlayerHealth >= 30) {
          let positiveChance = 0.1186 + 0.1693 * Math.log(currentPlayerHealth + 1);
          if (randomNum < positiveChance) {
            G.currentEffectType = choiceObj.outCome[0].type;
            G.outComeIdx = 0;
          } else {
            G.currentEffectType = choiceObj.outCome[1].type;
            G.outComeIdx = 1;
          }
        } else {
          let positiveChance = 0.006777 * currentPlayerHealth + 0.5
          if (randomNum < positiveChance) {
            G.currentEffectType = choiceObj.outCome[0].type;
            G.outComeIdx = 0;
          } else {
            G.currentEffectType = choiceObj.outCome[1].type;
            G.outComeIdx = 1;
          }
        }
      },
      setValue: (G, ctx, value) => {
        G.currentEffectValue = value;
      },
      setStats: (G, ctx, value) => {
        let currentPlayerHealth = G.players[Number(ctx.currentPlayer)].health;
        let currentPlayerSpirit = G.players[Number(ctx.currentPlayer)].spirit;
        if (value[0]){
          let resultHealth = currentPlayerHealth + value[0];
          if (resultHealth > 0) {
            G.players[Number(ctx.currentPlayer)].health = resultHealth;
          } else {
            G.players[Number(ctx.currentPlayer)].health = 0;
          }
        }
        if (value[1]){
          let resultSpirit = currentPlayerSpirit + value[1];
          if (resultSpirit > 0) {
            G.players[Number(ctx.currentPlayer)].spirit = resultSpirit;
          } else {
            G.players[Number(ctx.currentPlayer)].spirit = 0;
          }
        }
      },
      resetValue: (G) => {
        G.choicePointer = -1;
        G.currentEffectType = '';
        G.currentEffectValue = 0;
        G.outComeIdx = -1;
      }
    },

    turn: {
      onBegin: (G) => {
        G.numOfRoll = 1;
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
    debug: false
  };

  const Game = Client(gameObj);
  return (
    <div className="game-page">
      <Game mapLayout={state.mapLayout} mapSize={state.mapSize} />
    </div>
  )
}

export default GamePage;