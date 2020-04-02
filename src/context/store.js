import React, {createContext, useReducer} from 'react';

// Global State
const initialState = {
    playerNum: 2,
    mapSize: 20
};

// This create Global context
const store = createContext(initialState);
// This create Provider for the parent component
const { Provider } = store;

// This returns Provider with value = the
const StateProvider = ( { children } ) => {
    // useReducer create state = initialState and dispatch function
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'SET_PLAYER_NUMBER':
        return {...state, playerNum: action.payload};
      case 'SET_MAP_SIZE':
        return {...state, mapSize: action.payload};
      default:
        console.log('error');
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };