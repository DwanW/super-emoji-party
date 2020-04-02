import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './setting-page.styles.scss';

import BoardSetting from '../../components/board-setting/board-setting.component';

// const settings = {
//     // change 10 later
//     spaces: ["MatthewDwan", ...Array(9).fill(null)],
//     dieRoll: 1,
//     players: [{ playerName: 'Dwan', position: 0 }, { playerName: 'Matthew', position: 0 }]
// }

const SettingPage = () => {
    const [displaySetting, setDisplaySetting] = useState(0);

    return (
        <div className='setting-page'>
            <div className='setting-nav'>
                <div className='nav-options' onClick={() => setDisplaySetting(0)}>Board</div>
                <div className='nav-options' onClick={() => setDisplaySetting(1)}>Turn Length</div>
                <div className='nav-options' onClick={() => setDisplaySetting(2)}>Audio</div>
                <Link to="/" className="nav-option">Return to Main Screen</Link>
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