import React from 'react';

import './banner.styles.scss';

const Banner = ({turn, playerName}) => (
    <div className='banner-container'>
        <h2>Turn: {turn}</h2>
        <div>{playerName} turn to move</div>
    </div>
)

export default Banner;