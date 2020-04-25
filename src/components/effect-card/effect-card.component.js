import React from 'react';
import { effects } from '../../assests/emoji/effects'

import './effect-card.styles.scss';

const EffectCard = ({ playerObj, effect, effectCategory, onSelect, currentChoice }) => {
    return (
        <div className='effect-card'>
            <div className='player-container'>
                <div className='status-container'>
                    <div className='large-icon'>{playerObj.playerName}</div>
                    <div className='stats'>{`💖 ${playerObj.health}`}</div>
                    <div className='stats'>{`✨ ${playerObj.spirit}`}</div>
                </div>
                <div className='inventory'>
                    {
                        playerObj.inventory ? playerObj.inventory.map((itemObj, idx) => <div key={idx}>{itemObj.icon}</div>) : null
                    }
            </div>
            </div>
            <div className='effect-description'>
                <div className='large-icon'>{effects[effectCategory][effect].icon}</div>
                {effects[effectCategory][effect].description}
            </div>
            <div className='effect-choices'>
                {
                    effects[effectCategory][effect].choices.map((choiceObj, idx) => (
                        <div className='choice' key={idx} onClick={() => onSelect(idx, choiceObj)} style={{ backgroundColor: idx === currentChoice ? 'cornflowerblue' : 'inherit' }}>
                            <h2 className='choice-title'>{choiceObj.title}</h2>
                            {choiceObj.text}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EffectCard;