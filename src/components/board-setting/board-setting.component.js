import React from 'react';
import {useContext} from 'react';
import { store } from '../../context/store';
import { setMapSize } from '../../context/action';

import './board-setting.styles.scss';

import CustomSlider from '../custom-slider/custom-slider.component';

const BoardSetting = () => {
    const {state, dispatch} = useContext(store)

    const onChange = (e) => {
        dispatch(setMapSize(Number(e.target.value)))
    }

    return(
    <div className='board-setting'>
        <CustomSlider 
            label='Board Size'
            name='board-size'
            max='100'
            min='10'
            value = {state.mapSize}
            onChange={onChange}
        />
    </div>
    )
}

export default BoardSetting;