import React from 'react';
import { useState } from 'react';

import { Switch, Route } from 'react-router-dom';
import FrontPage from './page/front-page/front-page';
import GamePage from './page/game-page/game-page';
import PlayerContext from './context/player-context';

const App = () => {
  const [playerNum, setPlayerNum] = useState(2);
  const value = { playerNum, setPlayerNum };

  return (
    <div>
      <header>to do component</header>
      <PlayerContext.Provider value={value}>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/game" component={GamePage} />
        </Switch>
      </PlayerContext.Provider>
    </div>
  )
}

export default App;