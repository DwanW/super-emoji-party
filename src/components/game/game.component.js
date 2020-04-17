import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';

import './game.styles.scss';

import Banner from '../banner/banner.component';
import EffectCard from '../effect-card/effect-card.component';
import Modal from '../custom-modal/custom-modal.component';
import { effects } from '../../assests/emoji/effects';

//this component sets up the view layer
const GameBoard = ({ ctx, G, moves, events, mapLayout, mapSize }) => {
  const [moveTrigger, setMoveTrigger] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [showEffectResult, setShowEffectResult] = useState(false);

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

  const currentplayerObj = G.players[Number(ctx.currentPlayer)];
  const currentEffect = mapLayout[currentplayerObj.position].effect;
  const currentEffectCategory = mapLayout[currentplayerObj.position].effectCategory;

  // roll dice
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

  //move player
  const travel = async (value) => {
    setShowInfo(false);
    let currentPosition = currentplayerObj.position;
    let positionPointer = currentPosition;
    if (value > 0) {
      //move forward;
      let goalPosition = currentPosition + value;
      if (goalPosition < mapSize - 1) {
        for (let i = 0; i < value; i++) {
          await new Promise((res, rej) => setTimeout(() => res(moves.traverse(true)), i ? 400 : 0));
          positionPointer++;
        }
      } else {
        for (let i = 0; i < ((mapSize - 1) - currentPosition); i++) {
          setTimeout(() => moves.traverse(true), i * 500);
          positionPointer++;
        }
      }
    } else if (value < 0) {
      // move backward;
      let goalPosition = currentPosition - value;
      if (goalPosition >= 0) {
        for (let i = 0; i < Math.abs(value); i++) {
          await new Promise((res, rej) => setTimeout(() => res(moves.traverse(false)), i ? 400 : 0));
          positionPointer--;
        }
      } else {
        for (let i = 0; i < currentPosition; i++) {
          setTimeout(() => moves.traverse(false), i * 500);
          positionPointer--;
        }
      }
    } else {
      return;
    }
    if (mapLayout[positionPointer].effect !== 'none') {
      setTimeout(() => setShowEffect(true), 500);
    }
  }

  //calculate effect value
  const getValue = (baseValue) => {
    // can be modified 
    // G.currentEffectType
    moves.setValue(baseValue);
  }

  //hide effect modal and open result modal
  const onEffectExit = () => {
    if (G.choicePointer !== -1) {
      getValue(effects[currentEffectCategory][currentEffect].choices[G.choicePointer].outCome[G.outComeIdx].baseValue);
      setShowEffect(false);
      setShowEffectResult(true);
    }
  }

  // apply result
  const onDescriptionExit = () => {
    setShowEffectResult(false);
    switch (G.currentEffectType) {
      case 'MODIFY_HEALTH':
        moves.setHealth(G.currentEffectValue);
        break;
      case 'MODIFY_SPIRIT':
        moves.setSpirit(G.currentEffectValue);
        break;
      case 'MOVE':
        travel(G.currentEffectValue);
        break;
      default:
        console.log('no action');
    }
    moves.resetValue();
  }

  // show result before apply result
  const displayResultText = () => {
    switch (G.currentEffectType) {
      case 'MODIFY_HEALTH':
        return `Your Health is ${(G.outComeIdx === 0)? 'recovered':'decreased'} by ${G.currentEffectValue}`;
      case 'MODIFY_SPIRIT':
        return `Your Spirit is ${(G.outComeIdx === 0)? 'replenished':'decreased'} by ${G.currentEffectValue}`;
      case 'MOVE':
        return `Move ${(G.outComeIdx === 0)? 'forward':'backward'} by ${G.currentEffectValue}`;
      default:
        console.log('not a coded action description');
    }
  }


  // generate background position (this is an EXPENSIVE operation)
  const bgPosition = mapLayout[currentplayerObj.position].elevation % 6 === 0 ? 'right bottom'
    : mapLayout[currentplayerObj.position].elevation % 6 === 1 ? 'right top'
      : mapLayout[currentplayerObj.position].elevation % 6 === 2 ? 'center top'
        : mapLayout[currentplayerObj.position].elevation % 6 === 3 ? 'center bottom'
          : mapLayout[currentplayerObj.position].elevation % 6 === 4 ? 'left bottom'
            : mapLayout[currentplayerObj.position].elevation % 6 === 5 ? 'left top' : null;

  // generate cell;
  const cellWidth = 50;
  const cellHeight = 50;

  const cellStyle = {
    width: `${cellWidth}px`,
    height: `${cellHeight}px`,
  };

  // Generates board with Top Left at 0,0
  const boardNode = mapLayout.map((e, idx) =>
    (<div
      className='cell'
      style={{
        ...cellStyle,
        top: `${cellHeight * e.top}px`,
        left: `${cellWidth * e.left}px`,
        transform: `translateZ(${(e.elevation * 50)}px)`,
        opacity: `${(e.elevation === mapLayout[currentplayerObj.position].elevation) ? 1 : 0.1}`
      }}
      key={idx}
    >
      <span className='effect-icon'>{e.effect !== 'none' ? effects[e.effectCategory][e.effect].icon : null}</span>
    </div>
    )
  )

  //generate players on board
  const playerNode = G.players.map((e, idx) =>
    (<div
      className='player'
      style={{
        top: `${cellHeight * mapLayout[e.position].top}px`,
        left: `${cellWidth * mapLayout[e.position].left}px`,
        transform: `translateZ(${(mapLayout[e.position].elevation * 50)}px)`,
        opacity: `${(currentplayerObj.playerName === e.playerName) ? 1 : 0.6}`,
        zIndex: `${(currentplayerObj.playerName !== e.playerName) ? 0 : 1}`
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

      <Modal
        handleClose={onEffectExit}
        show={showEffect}
      >
        <EffectCard
          playerObj={currentplayerObj}
          effect={currentEffect}
          effectCategory={currentEffectCategory}
          onSelect={moves.setChoice}
          currentChoice={G.choicePointer}
        />
      </Modal>

      <Modal
        handleClose={onDescriptionExit}
        show={showEffectResult}
      >
        {showEffectResult ? <div className="result-container">
          <div className='result-description'>{effects[currentEffectCategory][currentEffect].choices[G.choicePointer].outCome[G.outComeIdx].resultDescription}</div>
          <div className='result-value'>
            {displayResultText()}
          </div>
        </div> : null
        }
      </Modal>

      {
        showBanner ?
          <Banner
            turn={ctx.turn}
            playerName={currentplayerObj.playerName}
          /> : null
      }


      {showInfo ? <div className='info' onAnimationEnd={() => travel(updatedRollValue.current)}>You rolled {updatedRollValue.current}</div> : null}

      {(ctx.gameover && ctx.gameover.winner) ? (<div className="winner">Winner: {ctx.gameover.winner}</div>) : null}

      <div className='controls'>
        <button className='roll-dice' onClick={onClick} style={{ color: G.numOfRoll ? 'green' : 'gray' }}>
          <FontAwesomeIcon icon={faDiceFour} />
        </button>
        <button className='end-turn' onClick={() => events.endTurn()}>End Turn</button>
      </div>

      <div className='background' style={{ backgroundPosition: `${bgPosition}` }}></div>
    </React.Fragment>
  );
}

export default GameBoard;