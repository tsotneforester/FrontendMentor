import { generateRandomArray } from '../utils/generateRandomArray';

export const initialState = {
  numberOfplayers: 4,
  gridSize: 4,
  themeIsNumbers: true,
  progress: null,
  gridContent: null,
  tempProgress: null,
  moves: 0,
  timer: 0,
  pairs: { 1: null, 2: null, 3: null, 4: null },
  activePlayer: null,
  showModal: false,
};

export function reducer(state = initialState, action) {
  if (action.type == 'SET_PLAYERS') {
    return {
      ...state,
      numberOfplayers: action.payload,
    };
  }
  if (action.type == 'SET_GRID_SIZE') {
    return {
      ...state,
      gridSize: action.payload,
    };
  }
  if (action.type == 'SET_THEME') {
    return {
      ...state,
      themeIsNumbers: action.payload,
    };
  }
  if (action.type == 'UPDATE_PROGRESS') {
    return {
      ...state,
      progress: action.payload,
      tempProgress: [],
      pairs: {
        ...state.pairs,
        [state.activePlayer]: state.pairs[state.activePlayer] + 1,
      },
    };
  }
  if (action.type == 'UPDATE_HIGHLIGHTED') {
    return {
      ...state,
      tempProgress: action.payload,
      moves: state.moves + 1,
    };
  }
  if (action.type == 'RESET_HIGHLIGHTED') {
    return {
      ...state,
      tempProgress: [],
    };
  }
  if (action.type == 'SET_TIMER') {
    return {
      ...state,
      timer: state.timer + 1,
    };
  }

  if (action.type == 'START_GAME') {
    return {
      ...state,
      progress: [],
      gridContent: generateRandomArray(state.gridSize ** 2 / 2),
      tempProgress: [],
      activePlayer: 1,
    };
  }
  if (action.type == 'RESTART_GAME') {
    return {
      ...state,
      progress: [],
      gridContent: generateRandomArray(state.gridSize ** 2 / 2),
      tempProgress: [],
      moves: 0,
      timer: 0,
      pairs: { 1: null, 2: null, 3: null, 4: null },
      showModal: false,
    };
  }
  if (action.type == 'QUIT_GAME') {
    return {
      ...initialState,
    };
  }

  if (action.type == 'SWITCH_ACTIVE_PLAYER') {
    return {
      ...state,
      activePlayer: action.payload,
    };
  }
  if (action.type == 'SHOW_MODAL') {
    return {
      ...state,
      showModal: true,
    };
  }

  return state;
}
