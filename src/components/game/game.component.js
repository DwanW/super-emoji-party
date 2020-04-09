import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';

import './game.styles.scss';

import Banner from '../banner/banner.component';

//this component sets up the view layer
const GameBoard = ({ ctx, G, moves, events, mapLayout, ...otherProps }) => {
  const [moveTrigger, setMoveTrigger] = useState(0);
  const [showBanner, setShowBanner] = useState(false)

  const updatedRollValue = useRef();

  //updating dieRoll value
  useEffect(() => {
    updatedRollValue.current = G.dieRoll;
  }, [G.dieRoll])

  useEffect(() => {
    setShowBanner(true);
    let hide = setInterval(() => setShowBanner(false), 1400);
    return () => clearInterval(hide);
  }, [ctx.turn])


  const onClick = async () => {
    // moves.traverse()
    if (!ctx.gameover) {
      //roll dice
      await moves.rollDie();
      //update component
      let temp = moveTrigger + 1;
      setMoveTrigger(temp);
      //move with updated dieRoll
      travel();
    }
  }

  const travel = () => {
    let currentPlayer = G.players[Number(ctx.currentPlayer)];
    let rollValue = updatedRollValue.current;
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

  // generate cell;
  const cellWidth = 50;
  const cellHeight = 50;

  const cellStyle = {
    width: `${cellWidth}px`,
    height: `${cellHeight}px`,
  };

  // translate into an array of node
  // Generates board with Top Left at 0,0
  const boardNode = mapLayout.map((e, idx) =>
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
    winner = ctx.gameover.winner !== undefined ? (<div id="winner">Winner: {ctx.gameover.winner}</div>)
      : (<div id="winner"></div>);
  }
  return (
    <React.Fragment>
      <div className='cell-container'>
        {boardNode}
      </div>

      {showBanner ?
        <Banner
          turn={ctx.turn}
          playerName={G.players[Number(ctx.currentPlayer)].playerName}
        /> : null}
      <button className='roll-dice' onClick={onClick}>
        <FontAwesomeIcon icon={faDiceFour} />
      </button>
      <div>{winner}</div>
    </React.Fragment>
  );
}

export default GameBoard;