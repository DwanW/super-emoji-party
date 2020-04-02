import React from 'react';
import './game.styles.scss';
import createMap from './map-generation'

const smallboard = createMap(30);
//this component sets up the view layer
const GameBoard = ({ ctx, G, moves, events, ...otherProps }) => {

  const onClick = async () => {
    // moves.traverse()
    if (!ctx.gameover) {
      //roll dice
      await moves.rollDie();
      let currentPlayer = G.players[Number(ctx.currentPlayer)];
      let rollValue = G.dieRoll;
      let goalPosition = currentPlayer.position + rollValue;
      //move player position and end turn after move is done;
      if (goalPosition < G.spaces.length - 1) {
        for (let i = 0; i < rollValue; i++) {
          setTimeout(() => moves.traverse(), i * 500);
          if (i === rollValue - 1) {
            setTimeout(() => events.endTurn(), i * 500);
          }
        }
      } else {
        for (let i = 0; i < ((G.spaces.length - 1) - currentPlayer.position); i++) {
          setTimeout(() => moves.traverse(), i * 500);
        }
      }
    }
  }

  // generate cell;
  const cellWidth = 50;
  const cellHeight = 50;

  const cellStyle = {
    width: `${cellWidth}px`,
    height: `${cellHeight}px`,
  };

  // generate board;
  const board = smallboard;
  // translate into an array of node
  // Generates board with Top Left at 0,0
  const boardNode = board.map((e, idx) =>
    (<div
      className='cell'
      style={{
        ...cellStyle,
        top: `${cellHeight * e.top}px`,
        left: `${cellWidth * e.left}px`,
        transform: `translateZ(${(e.elevation * 50)}px) rotateX(0deg)`,
      }}
      key={idx}
    >
      {G.spaces[idx]}
    </div>
    )
  )

  // f
  let winner = null;
  if (ctx.gameover) {
    winner = ctx.gameover.winner !== undefined ? ( <div id="winner">Winner: {ctx.gameover.winner}</div>)
     : (<div id="winner"></div>);
  }

  return (
    <React.Fragment>
      <div className='cell-container'>
        {boardNode}
      </div>

      <button onClick={onClick}>roll dice</button>
      <div>{winner}</div>
    </React.Fragment>
  );

}

// initialize game state, define game interaction(moves), and define victory condition here.
const emojiParty = {
  //setup global state object where it has a space property with value of an array, length 10 and value null for each array element.
  setup: () => ({
    // change 10 later
    spaces: ["MattDwan", ...Array(smallboard.length - 1).fill(null)],
    dieRoll: 1,
    players: [{ playerName: 'Dwan', position: 0 }, { playerName: 'Matt', position: 0 }]
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
      G.spaces[currentPlayer.position] === currentPlayer.playerName ?
        G.spaces[currentPlayer.position] = null
        : G.spaces[currentPlayer.position] = G.spaces[currentPlayer.position].replace(currentPlayer.playerName, '');

      currentPlayer.position++;

      G.spaces[currentPlayer.position] ?
        G.spaces[currentPlayer.position] += currentPlayer.playerName
        : G.spaces[currentPlayer.position] = currentPlayer.playerName;
    }
  },
  endIf: (G, ctx) => {
    // change 10 later
    let currentPlayer = G.players[Number(ctx.currentPlayer)];
    if (currentPlayer.position >= smallboard.length - 1) {
      return { winner: currentPlayer.playerName };
    }
  },
}


export { GameBoard, emojiParty };