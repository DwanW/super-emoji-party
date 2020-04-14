import React from 'react';
import { useState, useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import { store } from '../../context/store';
import { setMapSize, setNextIcon, setPreviousIcon } from '../../context/action';

import './board-setting.styles.scss';

import CustomSlider from '../custom-slider/custom-slider.component';

const BoardSetting = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const { state, dispatch } = useContext(store);

    //react-spring
    const transitions = useTransition(state.playerIcon[currentIdx], null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    console.log('player number', state.playerNum);
    const onMapSizeChange = (e) => {
        dispatch(setMapSize(Number(e.target.value)))
    }

    const nextIcon = () => {
        dispatch(setNextIcon(currentIdx))
    }

    const previousIcon = () => {
        dispatch(setPreviousIcon(currentIdx))
    }

    const nextPlayer = () => {
        if (state.playerIcon[currentIdx + 1]) {
            setCurrentIdx(currentIdx + 1);
        } else {
            setCurrentIdx(0);
        }
    }

    const previousPlayer = () => {
        if (state.playerIcon[currentIdx - 1]) {
            setCurrentIdx(currentIdx - 1);
        } else {
            let lastIdx = state.playerIcon.length - 1;
            setCurrentIdx(lastIdx)
        }
    }

    return (
        <div className='board-setting'>
            <div className='option-container'>
                <CustomSlider
                    label='Board Size'
                    name='board-size'
                    max='100'
                    min='10'
                    value={state.mapSize}
                    onChange={onMapSizeChange}
                />
            </div>
            <div className='option-container'>
                <div className='label'>Player Icon</div>
                <div className="player-name-tab">
                    <button className='previous' onClick={previousPlayer}>&#10094;</button>
                    <span>player {currentIdx}</span>
                    <button className='next' onClick={nextPlayer}>&#10095;</button>
                </div>
                <div className="player-icon-tab">
                    <button className='previous' onClick={previousIcon}>&#10094;</button>
                    {
                        transitions.map(({item, key, props}) => 
                        <animated.span key={key} style={props} className='icon'>{item}</animated.span>
                        )
                    }
                    {/* <span>{state.playerIcon[currentIdx]}</span> */}
                    <button className='next' onClick={nextIcon}>&#10095;</button>
                </div>
            </div>
        </div>
    )
}

export default BoardSetting;