import React from 'react';

import './banner.styles.scss';

const Banner = ({turn, playerName}) => (
    <div className='banner-container'>
        <div className='banner-header'>Turn: {turn}</div>
        <div className='banner-description'>{playerName} turn to move</div>
    </div>
)

export default Banner;