import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Client } from 'boardgame.io/react';

const board1 = [[0,0],[1,0],[1,1],[1,2],[2,2],[3,2],[4,2],[4,3],[4,4],[4,5]];

class GameBoard extends React.Component {
  render() {

    const cellStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
      position: "absolute",
    };

    let board = [];
    for (let i = 0; i < board1.length; i++) {
      let id = i;
        board.push(
          // Generates board with Top Left at 0,0
          <div style={{...cellStyle,top: `${50 * board1[i][1]}px`,left: `${50 * board1[i][0]}px`}} key={id} >
            {/* {this.props.G.cells[id]} */}
          </div>
        );
      }

    return (   
      <div style={{position:'relative'}}>
      { board }
      </div>
    );
  }
}

const TicTacToe = {
  setup: () => ({ cells: Array(25).fill(null) }),

  moves: {
    clickCell: (G, ctx, id) => {
      G.cells[id] = ctx.currentPlayer;
    },
  },
};

const App = Client({
  game: TicTacToe,
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
