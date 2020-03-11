import React from 'react';
import './App.css';
import { Client} from 'boardgame.io/react';


//this class sets up board and dom event listeners.
class GameBoard extends React.Component {
  onClick() {
    this.props.moves.rollDie();
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

    const board = [[1, 1], [1, 0], [1, 1], [1, 2], [2, 2], [3, 2], [4, 2], [4, 3], [4, 4], [4, 5]];
    // translate into an array of node
    // Generates board with Top Left at 0,0
    const boardNode = board.map((e, idx) => (<div style={{ ...cellStyle, top: `${cellHeight * e[1]}px`, left: `${cellWidth * e[0]}px` }} key={idx} ></div>))
    return (
      <React.Fragment>
        <div style={{ position: 'relative' }}>
          {boardNode}
        </div>
        {/* arrow function grabs this */}
        <button onClick={() => this.onClick()}>roll dice</button>
      </React.Fragment>
    );
  }
}

// initialize game state, define game interaction(moves), and define victory condition here.
const emojiParty = {
  //setup global state object where it has a space property with value of an array, length 10 and value null for each array element.
  setup: () => ({ spaces: Array(10).fill(null), dieRoll: 1 }),
  moves: {
    rollDie: (G, ctx) => {
      G.dieRoll = ctx.random.Die(6);
    },
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
