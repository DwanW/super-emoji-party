import React from 'react';
import { useContext } from 'react';
import { store } from '../../context/store';
import { setPlayerNum } from '../../context/action';

import { Link } from 'react-router-dom';

import AppHeader from '../../components/app-header/app-header.component';

import './front-page.styles.scss';


// FrontPage that sets up number of players for the game and Link to the Game Page;
const FrontPage = () => {
    const { state, dispatch } = useContext(store);

    return (
        <div className="start-menu">
            <AppHeader />
            <div className='option-container'>
                <Link to="/game" className="menu-option">New Game</Link>
                <div onClick={() => dispatch(setPlayerNum(2))} className="menu-option">Two Players</div>
                <div onClick={() => dispatch(setPlayerNum(3))} className="menu-option">Three Players</div>
                <Link to="/setting" className="menu-option">Settings</Link>
                <span className='playerNum-pointer' style={{top:`${state.playerNum===2?'60px':'100px'}`}} role='img' aria-label='selected'>👍</span>
            </div>
        </div>
    )
}

export default FrontPage;