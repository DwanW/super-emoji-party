import React from 'react';
import { useContext } from 'react';
import { store } from '../../context/store';
import { setSoundVolume } from '../../context/action';

import './audio-setting.styles.scss';

import CustomSlider from '../custom-slider/custom-slider.component';

const AudioSetting = () => {
    const { state, dispatch } = useContext(store);

    const onVolumnChange = (e) => {
        dispatch(setSoundVolume(Number(e.target.value)/100))
    }


    return (
        <div className='audio-setting'>
            <div className='option-container'>
                <CustomSlider
                    label='Volume'
                    name='Volume'
                    max='100'
                    min='0'
                    value={Math.floor(state.soundVolume*100)}
                    onChange={onVolumnChange}
                />
            </div>
        </div>
    )
}

export default AudioSetting;