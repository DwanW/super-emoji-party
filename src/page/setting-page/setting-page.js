import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './setting-page.styles.scss';

import BoardSetting from '../../components/board-setting/board-setting.component';

const SettingPage = () => {
    const [displaySetting, setDisplaySetting] = useState(0);

    return (
        <div className='setting-page'>
            <div className='setting-nav'>
                <div className={`nav-options ${displaySetting === 0 ? 'selected-option' : ''}`} onClick={() => setDisplaySetting(0)}>Board</div>
                <div className={`nav-options ${displaySetting === 1 ? 'selected-option' : ''}`} onClick={() => setDisplaySetting(1)}>Turn Length</div>
                <div className={`nav-options ${displaySetting === 2 ? 'selected-option' : ''}`} onClick={() => setDisplaySetting(2)}>Audio</div>
                <Link to="/" className='nav-options'>Return to Main Screen</Link>
            </div>
            <div className='setting-display'>
                {
                    displaySetting === 0 ? <BoardSetting />
                        : displaySetting === 1 ? <div>Turn Length</div>
                            : displaySetting === 2 ? <div>Audio </div> : ''
                }
            </div>
        </div>
    )
}

export default SettingPage;