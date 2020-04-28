import React from 'react';
import { useContext } from 'react';

import { Switch, Route, __RouterContext } from 'react-router-dom';
import FrontPage from './page/front-page/front-page';
import GamePage from './page/game-page/game-page';
import SettingPage from './page/setting-page/setting-page';

import './App.scss';
import { animated, useTransition } from 'react-spring';

//Primary function is to have routes to different pages of the app, and pass context to child component
const App = () => {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
    </React.Fragment>
  )
}

export default App;