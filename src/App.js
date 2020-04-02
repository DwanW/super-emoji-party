import React from 'react';

import { Switch, Route } from 'react-router-dom';
import FrontPage from './page/front-page/front-page';
import GamePage from './page/game-page/game-page';
import SettingPage from './page/setting-page/setting-page';

import './App.scss';


//Primary function is to have routes to different pages of the app, and pass context to child component
const App = () => {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/setting" component={SettingPage} />
        </Switch>
    </div>
  )
}

export default App;