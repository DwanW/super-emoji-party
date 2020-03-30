import { createContext } from 'react';

const players = {
    playerNum: 2,
    setPlayerNum: () => {}
}

const PlayerContext = createContext(players);

export default PlayerContext;