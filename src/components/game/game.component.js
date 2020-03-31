import React from 'react';
import './game.styles.scss';

const smallboard = [[0, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5]];
//this class sets up the view layer
class GameBoard extends React.Component {

  async onClick() {
    // this.props.moves.traverse()
    if (!this.props.ctx.gameover) {
      //roll dice
      await this.props.moves.rollDie();
      let currentPlayer = this.props.G.players[Number(this.props.ctx.currentPlayer)];
      let rollValue = this.props.G.dieRoll;
      let goalPosition = currentPlayer.position + rollValue;
      //move player position and end turn after move is done;
      if (goalPosition < this.props.G.spaces.length - 1) {
        for (let i = 0; i < rollValue; i++) {
          setTimeout(() => this.props.moves.traverse(), i * 500);
          if (i === rollValue - 1) {
            setTimeout(() => this.props.events.endTurn(), i * 500);
          }
        }
      } else {
        for (let i = 0; i < ((this.props.G.spaces.length - 1) - currentPlayer.position); i++) {
          setTimeout(() => this.props.moves.traverse(), i * 500);
        }
      }
    }
  }

  render() {
    // generate cell;
    const cellWidth = 50;
    const cellHeight = 50;

    const cellStyle = {
      boxSizing: 'border-box',
      border: '1px solid #555',
      width: `${cellWidth}px`,
      height: `${cellHeight}px`,
      lineHeight: '50px',
      textAlign: 'center',
      position: "absolute",
    };

    // generate board;
    const board = smallboard;
    // translate into an array of node
    // Generates board with Top Left at 0,0
    const boardNode = board.map((e, idx) => (<div style={{ ...cellStyle, top: `${cellHeight * e[1]}px`, left: `${cellWidth * e[0]}px` }} key={idx} >{this.props.G.spaces[idx]}</div>))

    // f
    let winner = null;
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
            <div id="winner"></div>
          );
    }

    return (
      <React.Fragment>
        <div style={{ position: 'relative' }}>
          {boardNode}
        </div>

        <button onClick={() => this.onClick()}>roll dice</button>
        <div>{winner}</div>
      </React.Fragment>
    );
  }
}

// initialize game state, define game interaction(moves), and define victory condition here.
const emojiParty = {
  //setup global state object where it has a space property with value of an array, length 10 and value null for each array element.
  setup: () => ({
    // change 10 later
    spaces: ["MattDwan", ...Array(9).fill(null)],
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
    if (currentPlayer.position >= 9) {
      return { winner: currentPlayer.playerName };
    }
  },
}


export { GameBoard, emojiParty };