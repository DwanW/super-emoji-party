import React from 'react';
import { useContext, useEffect, useState } from 'react';

import { Switch, Route, __RouterContext } from 'react-router-dom';
import FrontPage from './page/front-page/front-page';
import GamePage from './page/game-page/game-page';
import SettingPage from './page/setting-page/setting-page';
import { store } from './context/store';

import './App.scss';
import main from './assets/soundtrack/main.mp3'
import { animated, useTransition } from 'react-spring'

const backgroundAudio = new Audio(main);
backgroundAudio.loop = true;

//Primary function is to have routes to different pages of the app, and pass context to child component
const App = () => {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  //playbackground music
  const [showAudioButton, setShowAudioButton] = useState(false);
  const { state } = useContext(store);
  backgroundAudio.volume = state.soundVolume;

  // adjusted based on google chrome audio auto playback rule
  useEffect(() => {
    if (!state.gameIsOver && state.soundVolume) {
      let promise = backgroundAudio.play();
      if (promise !== undefined) {
        promise.catch(err => {
          console.log(err)
          setShowAudioButton(true);
        });
      }
    } else {
      backgroundAudio.pause();
    }
  }, [state.gameIsOver, state.soundVolume])

  const play = () => {
    backgroundAudio.play();
    setShowAudioButton(false)
  }

  return (
    <React.Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props} >
          <Switch location={item}>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/game" component={GamePage} />
            <Route exact path="/setting" component={SettingPage} />
          </Switch>
        </animated.div>
      ))}
      {
        showAudioButton ? <div className="playback" onClick={play}><span role='img' aria-label='sound-control'>🔊</span></div> : null
      }
    </React.Fragment>
  )
}

export default App;