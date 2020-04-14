import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';

import './game.styles.scss';

import Banner from '../banner/banner.component';

//this component sets up the view layer
const GameBoard = ({ ctx, G, moves, events, mapLayout, mapSize }) => {
  const [moveTrigger, setMoveTrigger] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const updatedRollValue = useRef();

  //updating dieRoll value
  useEffect(() => {
    updatedRollValue.current = G.dieRoll;
  }, [G.dieRoll])

  //display turn banner at start of each turn
  useEffect(() => {
    setShowBanner(true);
    let hide = setInterval(() => setShowBanner(false), 1000);
    return () => clearInterval(hide);
  }, [ctx.turn])


  const onClick = async () => {
    if (!ctx.gameover && G.numOfRoll > 0) {
      //roll dice
      await moves.rollDie();
      //update component
      let temp = moveTrigger + 1;
      setMoveTrigger(temp);
      //display rolled number
      setShowInfo(true);
    }
  }

  const travel = async (value) => {
    let currentPlayer = G.players[Number(ctx.currentPlayer)];
    if (value > 0) {
      //move forward;
      let goalPosition = currentPlayer.position + value;
      if (goalPosition < mapSize - 1) {
        for (let i = 0; i < value; i++) {
          await new Promise((res, rej) => setTimeout(() => res(moves.traverse(true)), i ? 500 : 0));
        }
      } else {
        for (let i = 0; i < ((mapSize - 1) - currentPlayer.position); i++) {
          setTimeout(() => moves.traverse(true), i * 500);
        }
      }
      console.log('worked?');
      setShowInfo(false);
    } else if (value < 0) {
      // move backward;
      let goalPosition = currentPlayer.position - value;
      if (goalPosition >= 0) {
        for (let i = 0; i < Math.abs(value); i++) {
          setTimeout(() => moves.traverse(false), i * 500);
        }
      } else {
        for (let i = 0; i < currentPlayer.position; i++) {
          setTimeout(() => moves.traverse(false), i * 500);
        }
      }
    } else {
      return;
    }
  }
  // generate background position (this is an EXPENSIVE operation)
  const bgPosition = mapLayout[G.players[Number(ctx.currentPlayer)].position].elevation % 6 === 0 ? 'right bottom'
    : mapLayout[G.players[Number(ctx.currentPlayer)].position].elevation % 6 === 1 ? 'right top'
      : mapLayout[G.players[Number(ctx.currentPlayer)].position].elevation % 6 === 2 ? 'center top'
        : mapLayout[G.players[Number(ctx.currentPlayer)].position].elevation % 6 === 3 ? 'center bottom'
          : mapLayout[G.players[Number(ctx.currentPlayer)].position].elevation % 6 === 4 ? 'left bottom'
            : mapLayout[G.players[Number(ctx.currentPlayer)].position].elevation % 6 === 5 ? 'left top' : null;

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
        transform: `translateZ(${(e.elevation * 50)}px)`,
        opacity: `${(e.elevation === mapLayout[G.players[Number(ctx.currentPlayer)].position].elevation) ? 1 : 0.25}`
      }}
      key={idx}
    >
    </div>
    )
  )

  const playerNode = G.players.map((e, idx) =>
    (<div
      className='player'
      style={{
        top: `${cellHeight * mapLayout[e.position].top}px`,
        left: `${cellWidth * mapLayout[e.position].left}px`,
        transform: `translateZ(${(mapLayout[e.position].elevation * 50)}px)`,
        opacity: `${(G.players[Number(ctx.currentPlayer)].playerName === e.playerName) ? 1 : 0.6}`,
        zIndex: `${(G.players[Number(ctx.currentPlayer)].playerName === e.playerName) ? 5 : 1}`
      }}
      key={`player${idx}`}
    >
      {e.playerName}
    </div>)
  )

  return (
    <React.Fragment>
      <div className='board'>
        <div className='cell-container'>{boardNode}</div>
        {playerNode}
      </div>

      {showBanner ?
        <Banner
          turn={ctx.turn}
          playerName={G.players[Number(ctx.currentPlayer)].playerName}
        /> : null}


      {showInfo ? <div className='info' onAnimationEnd={() => travel(updatedRollValue.current)}>You rolled {updatedRollValue.current}</div> : null}
      <div className='controls'>
        <button className='roll-dice' onClick={onClick} style={{ color: G.numOfRoll ? 'green' : 'gray' }}>
          <FontAwesomeIcon icon={faDiceFour} />
        </button>
        <button className='end-turn' onClick={() => events.endTurn()}>End Turn</button>
      </div>
      {(ctx.gameover && ctx.gameover.winner) ? (<div className="winner">Winner: {ctx.gameover.winner}</div>) : null}

      <div className='background' style={{ backgroundPosition: `${bgPosition}` }}></div>
    </React.Fragment>
  );
}

export default GameBoard;