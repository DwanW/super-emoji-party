import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';

import './game.styles.scss';

import Banner from '../banner/banner.component';
import EffectCard from '../effect-card/effect-card.component';
import Modal from '../custom-modal/custom-modal.component';
import ToolTip from '../tooltip/tooltip.component';
import { effects } from '../../assets/emoji/effects';
import { items } from '../../assets/emoji/items';

//this component sets up the view layer
const GameBoard = ({ ctx, G, moves, events, mapLayout, mapSize }) => {
  const [moveTrigger, setMoveTrigger] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [showEffectResult, setShowEffectResult] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const [toolTipInfo, setToolTipInfo] = useState({ top: '', left: '', playerObj: {} });

  const updatedRollValue = useRef();

  //updating dieRoll value
  useEffect(() => {
    updatedRollValue.current = G.dieRoll;
  }, [G.dieRoll])

  //display turn banner at start of each turn
  useEffect(() => {
    setShowBanner(true);
    let hide = setInterval(() => setShowBanner(false), 1400);
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
      let goalPosition = currentPosition + value;
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
    if (G.currentEffectType === 'MODIFY_STATS') {
      let newHealth = (baseValue[0] < 0) ? baseValue[0] * currentplayerObj.healthMod : baseValue[0];
      let newSpirit = (baseValue[1] < 0) ? baseValue[1] * currentplayerObj.spiritMod : baseValue[1];
      let newValue = [newHealth, newSpirit];
      moves.setValue(newValue);
    } else {
      moves.setValue(baseValue);
    }
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
      case 'MODIFY_STATS':
        moves.setStats(G.currentEffectValue);
        break;
      case 'MOVE':
        travel(G.currentEffectValue);
        break;
      case 'ADD_ITEM':
        moves.addItem(items[G.currentEffectValue]);
        break;
      default:
        console.log('no action');
    }
    moves.resetValue();
  }

  // show result before apply result
  const displayResultText = () => {
    switch (G.currentEffectType) {
      case 'MODIFY_STATS':
        if (G.currentEffectValue[0] && G.currentEffectValue[1]) {
          return `Your 💖Health is ${(G.currentEffectValue[0] > 0) ? 'recovered' : 'decreased'} by ${Math.abs(G.currentEffectValue[0])} and Your ✨Spirit is ${(G.currentEffectValue[0] > 0) ? 'replenished' : 'decreased'} by ${Math.abs(G.currentEffectValue[1])}`;
        } else if (G.currentEffectValue[0]) {
          return `Your 💖Health is ${(G.currentEffectValue[0] > 0) ? 'recovered' : 'decreased'} by ${Math.abs(G.currentEffectValue[0])}`;
        } else {
          return `Your ✨Spirit is ${(G.currentEffectValue[1] > 0) ? 'replenished' : 'decreased'} by ${Math.abs(G.currentEffectValue[1])}`;
        }
      case 'MOVE':
        if (G.currentEffectValue) {
          return `👣Move ${(G.currentEffectValue > 0) ? 'forward' : 'backward'} by ${Math.abs(G.currentEffectValue)}`;
        } else {
          return 'Nothing happened';
        };
      case 'ADD_ITEM':
        return `${items[G.currentEffectValue].icon} ${G.currentEffectValue} has been added to your inventory`;
      default:
        console.log('not a coded action description');
    }
  }

  // show player tooltip
  const displayToolTip = (e, player) => {
    setShowToolTip(true);
    let newInfo = { top: e.target.style.top, left: e.target.style.left, playerObj: player };
    setToolTipInfo(newInfo);
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
        transform: `translateZ(${(e.elevation * -50)}px)`,
        opacity: `${(e.elevation === mapLayout[currentplayerObj.position].elevation) ? 1 : 0.1}`
      }}
      key={idx}
    >
      <span className={`effect-icon ${(e.elevation === mapLayout[currentplayerObj.position].elevation) ?
        ((e.effectCategory === 'animals') ? 'jump'
          : (e.effectCategory === 'foods') ? 'float'
            : (e.effectCategory === 'transportation') ? 'shake'
              : 'breath'): ''}`}>
        {e.effect !== 'none' ? effects[e.effectCategory][e.effect].icon : null}
      </span>
    </div>
    )
  )

  //generate players on board
  const playerNode = G.players.map((ele, idx) =>
    (<div
      className='player'
      onMouseEnter={(e) => displayToolTip(e, ele)}
      onMouseLeave={() => setShowToolTip(false)}
      style={{
        top: `${cellHeight * mapLayout[ele.position].top}px`,
        left: `${cellWidth * mapLayout[ele.position].left}px`,
        transform: `translateZ(${(mapLayout[ele.position].elevation * -50)}px)`,
        opacity: `${(currentplayerObj.playerName === ele.playerName) ? 1 : 0.6}`,
        zIndex: `${(currentplayerObj.playerName === ele.playerName) ? 1 : 0}`
      }}
      key={`player${idx}`}
    >
      {ele.playerName}
    </div>)
  )

  return (
    <React.Fragment>
      <div className='board'>
        <div className='cell-container'>{boardNode}</div>
        {playerNode}
      </div>

      {
        showToolTip ?
          <ToolTip
            top={toolTipInfo.top}
            left={toolTipInfo.left}
            title={`${toolTipInfo.playerObj.playerName} Player Info`}
            description={`💖health: ${toolTipInfo.playerObj.health} ✨spirit: ${toolTipInfo.playerObj.spirit}`}
          /> : null
      }

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
        <button className='end-turn' onClick={() => events.endTurn()}>End</button>
        <button className={`roll-dice ${G.numOfRoll ? 'spin' : ''}`} onClick={onClick} style={{ color: G.numOfRoll ? 'lightgreen' : 'gray' }}>
          <FontAwesomeIcon icon={faDiceFour} />
        </button>
      </div>

      <div className='background' style={{ backgroundPosition: `${bgPosition}` }}></div>
    </React.Fragment>
  );
}

export default GameBoard;