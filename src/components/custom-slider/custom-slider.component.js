import React from 'react';

import './custom-slider.styles.scss'

const CustomSlider = ({label,min,max, onChange, value}) => (
    <div className="custome-slider">
        <div className='custom-slider-value'>{value}</div>
        <label className='custom-slider-label'>{label}</label>
        <input type='range' min={min} max={max} value={value} onChange={onChange} />
    </div>
)

export default CustomSlider;