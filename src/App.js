import React from 'react';
import './App.css';
import { Client} from 'boardgame.io/react';


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

    const board = [[0, 1], [1, 0], [1, 1], [1, 2], [2, 2], [3, 2], [4, 2], [4, 3], [4, 4], [4, 5]];
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
    p0Position: 0,
    p1Position: 0,
   }),
  moves: {
    rollDie: (G, ctx) => {
      G.spaces[G.p0Position] = null;
      G.spaces[G.p1Position] = null;
      G.dieRoll = ctx.random.Die(6);
      ctx.currentPlayer === "0" ? G.p0Position += G.dieRoll:G.p1Position += G.dieRoll;
      G.spaces[G.p0Position] = "p0";
      G.spaces[G.p1Position] = "p1";
    },
  },
  endIf: (G, ctx) => {
    // change 10 later
    if (G.p0Position > 10 || G.p1Position > 10) {
      return { winner: ctx.currentPlayer };
    }
  },
}

const App = Client({
  game: emojiParty,
  board: GameBoard,
});

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
