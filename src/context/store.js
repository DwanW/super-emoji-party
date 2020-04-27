import React, { createContext, useReducer } from 'react';
import createMap from '../components/game/map-generation';
import { emojiIcon } from '../assests/emoji/player-icons';

// Global App Initial State
const initialState = {
  playerNum: 2,
  mapSize: 20,
  mapLayout: createMap(20),
  playerIcon: [emojiIcon[0], emojiIcon[1]],
  soundVolume: 0.1,
  gameIsOver: false
};

// This create Global context
const store = createContext(initialState);
// This create Provider for the parent component
const { Provider } = store;

// This returns Provider with value = the
const StateProvider = ({ children }) => {
  // useReducer create state = initialState and dispatch function
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_PLAYER_NUMBER':
        let newArr = Array(action.payload).fill('').map((e, idx) => emojiIcon[idx])
        return { ...state, playerNum: action.payload, playerIcon: newArr };

      case 'SET_MAP_SIZE':
        return { ...state, mapSize: action.payload, mapLayout: createMap(action.payload) };

      case 'SET_NEXT_ICON':
        {
          let currentIcon = state.playerIcon[action.payload];
          let currentIconIdx = emojiIcon.indexOf(currentIcon);
          let newIconArr = state.playerIcon.slice();
          if (emojiIcon[currentIconIdx + 1]) {
            newIconArr[action.payload] = emojiIcon[currentIconIdx + 1];
            return { ...state, playerIcon: newIconArr };
          } else {
            newIconArr[action.payload] = emojiIcon[0]
            return { ...state, playerIcon: newIconArr };
          }
        }
      case 'SET_PREVIOUS_ICON':
        {
          let currentIcon = state.playerIcon[action.payload];
          let currentIconIdx = emojiIcon.indexOf(currentIcon);
          let newIconArr = state.playerIcon.slice();
          if (emojiIcon[currentIconIdx - 1]) {
            newIconArr[action.payload] = emojiIcon[currentIconIdx - 1];
            return { ...state, playerIcon: newIconArr };
          } else {
            newIconArr[action.payload] = emojiIcon[emojiIcon.length - 1];
            return { ...state, playerIcon: newIconArr };
          }
        }
      case 'SET_SOUND_VOLUME':
        return { ...state, soundVolume: action.payload };
      case 'SET_GAME_IS_OVER':
        return { ...state, gameIsOver: action.payload };
      default:
        console.log('error');
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };