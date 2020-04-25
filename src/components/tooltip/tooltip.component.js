import React from 'react';

import './tooltip.styles.scss';

const ToolTip = ({ title, description, top, left }) => (
    <div className='tool-tip'
        style={{
            top: top,
            left: left
        }}
    >
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
    </div>
);

export default ToolTip;