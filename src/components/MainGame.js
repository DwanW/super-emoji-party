import React from 'react';
import { Client } from 'boardgame.io/react';


//this class sets up board and dom event listeners.
class GameBoard extends React.Component {
  onClick() {
    console.log(this);
    this.props.moves.rollDie();
    this.props.events.endTurn();
  }

  render() {
    const cellWidth = 100;
    const cellHeight = 100;

    const cellStyle = {
      boxSizing: 'border-box',
      border: '1px solid #555',
      width: `${cellWidth}px`,
      height: `${cellHeight}px`,
      lineHeight: '50px',
      textAlign: 'center',
      position: "absolute",
    };

    const board = [[0, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5]];
    // translate into an array of node
    // Generates board with Top Left at 0,0
    const boardNode = board.map((e, idx) => (<div style={{ ...cellStyle, top: `${cellHeight * e[1]}px`, left: `${cellWidth * e[0]}px` }} key={idx} >{this.props.G.spaces[idx]}</div>))

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
        {/* arrow function grabs this */}
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
    spaces: Array(10).fill(null),
    dieRoll: 1,
    player1Obj: {position:0, equipment:null, ailment:null, buff: null, inventory:[]},
    player2Obj: {position:0, equipment:null, ailment:null, buff: null, inventory:[]},
  }),
  moves: {
    rollDie: (G, ctx) => {
      G.spaces[G.player1Obj.position] = null;
      G.spaces[G.player2Obj.position] = null;
      G.dieRoll = ctx.random.Die(6);
      ctx.currentPlayer === "0" ? G.player1Obj.position += G.dieRoll : G.player2Obj.position += G.dieRoll;
      if (G.player1Obj.position !== G.player2Obj.position) {
        G.spaces[G.player1Obj.position] = "p1";
        G.spaces[G.player2Obj.position] = "p2";
      } else if (G.player1Obj.position === G.player2Obj.position) {
        G.spaces[G.player1Obj.position] = "p1p2";
      }
    },
  },
  endIf: (G, ctx) => {
    // change 10 later
    if (G.player1Obj.position > 10 || G.player2Obj.position > 10) {
      return { winner: ctx.currentPlayer };
    }
  },
}


export {GameBoard, emojiParty};