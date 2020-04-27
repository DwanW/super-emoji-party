export const setPlayerNum = (number) => ({
    type: 'SET_PLAYER_NUMBER',
    payload: number
})

export const setMapSize = (value) => ({
    type: 'SET_MAP_SIZE',
    payload: value
})

export const setNextIcon = (value) => ({
    type: 'SET_NEXT_ICON',
    payload: value
})

export const setPreviousIcon = (value) => ({
    type: 'SET_PREVIOUS_ICON',
    payload: value
})

export const setSoundVolume = (value) => ({
    type: 'SET_SOUND_VOLUME',
    payload: value
})

export const setGameIsOver = (value) => ({
    type: 'SET_GAME_IS_OVER',
    payload: value
})