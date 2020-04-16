import React from 'react';
import { effects } from '../../assests/emoji/effects'

import './effect-card.styles.scss';

const EffectCard = ({ playerObj, effect, effectCategory, onSelect, currentChoice }) => {
    return (
    <div className='effect-card'>
        <div className='player-container'>
            <div className='status-container'>
                <div className='large-icon'>{playerObj.playerName}</div>
                <div>{playerObj.health}</div>
                <div>{playerObj.spirit}</div>
            </div>
            <div className='inventory'>
                <div>slot 1</div>
                <div>slot 2</div>
                <div>slot 3</div>
            </div>
        </div>
        <div className='effect-description'>
            <div className='large-icon'>{effects[effectCategory][effect].icon}</div>
            {effects[effectCategory][effect].description}
        </div>
        <div className='effect-choices'>
            {
                effects[effectCategory][effect].choices.map((choiceObj, idx) => (
                    <div className='choice' key={idx} onClick={()=> onSelect(idx,choiceObj.type)} style={{backgroundColor: idx===currentChoice? '#cfcfcf':'white'}}>
                        <h2>{choiceObj.title}</h2>
                        {choiceObj.text}
                    </div>
                ))
            }
        </div>
    </div>
)}

export default EffectCard;