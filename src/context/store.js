import React, {createContext, useReducer} from 'react';

const initialState = {
    playerNum: 2,
    mapSize: 20
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'SET_PLAYER_NUMBER':
        return {...state, playerNum: action.payload};
      default:
        console.log('error');
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }