import React from 'react';
import './game.styles.scss';

//this class sets up board and dom event listeners.
class GameBoard extends React.Component {

  async onClick() {
    // this.props.moves.traverse()
    await this.props.moves.rollDie();
    // let currentPlayer = this.props.G.players[Number(this.props.ctx.currentPlayer)];
    let rollValue = this.props.G.dieRoll;
    for (let i = 0; i < rollValue; i++) {
      setTimeout(() => this.props.moves.traverse(), i * 500);
    }
    this.props.events.endTurn();
  }

  render() {
    console.log(this.props );
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
    const board = [[0, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5]];
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
    if (currentPlayer.position > 9) {
      return { winner: currentPlayer.playerName };
    }
  },
}


export { GameBoard, emojiParty };