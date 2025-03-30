import data from './data.json';

let categories = Object.keys(data.categories);

export const initialState = {
  data: data.categories,
  categories,
  category: null,
  calledChars: [],
  health: 8,
  phrase: null,
  phraseArray: [],
  phraseUniqueChars: [],
  gameStatus: null,
  newUser: true,
};

export function reducer(state = initialState, action) {
  if (action.type == 'BECAME_FRIEND') {
    return {
      ...state,
      newUser: false,
    };
  }

  if (action.type == 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
      newUser: false,
    };
  }
  if (action.type == 'KEYBOARD_CLICK') {
    return {
      ...state,
      calledChars: action.payload.updatedCalledChars,
      health: action.payload.updatedHealth,
      gameStatus: action.payload.updatedGameStatus,
    };
  }
  if (action.type == 'SET_PHRASE') {
    return {
      ...state,
      calledChars: [],
      health: 8,
      gameStatus: 'running',
      phrase: action.payload,
      phraseArray: action.payload.toLowerCase().split(' '),
      phraseUniqueChars: [
        ...new Set(action.payload.toLowerCase().replace(/[^a-z]/g, '')),
      ],
    };
  }
  if (action.type == 'FORCED_SET_PHRASE') {
    return {
      ...state,
      calledChars: [],
      health: 8,
      gameStatus: 'running',
      phrase: action.payload.newPhrase,
      phraseArray: action.payload.newPhrase.toLowerCase().split(' '),
      phraseUniqueChars: [
        ...new Set(
          action.payload.newPhrase.toLowerCase().replace(/[^a-z]/g, '')
        ),
      ],
      category: action.payload.newCategory,
    };
  }

  if (action.type == 'QUIT_GAME') {
    return {
      ...initialState,
      data: action.payload,
      newUser: false,
    };
  }

  if (action.type == 'PLAY_AGAIN') {
    return {
      ...state,
      data: action.payload.updatedData,
      calledChars: [],
      health: 8,
      phrase: action.payload.newPhrase,
      phraseArray: action.payload.newPhrase.toLowerCase().split(' '),
      phraseUniqueChars: [
        ...new Set(
          action.payload.newPhrase.toLowerCase().replace(/[^a-z]/g, '')
        ),
      ],
      gameStatus: 'running',
    };
  }

  if (action.type == 'PAUSE_GAME') {
    return {
      ...state,
      gameStatus: 'paused',
    };
  }
  if (action.type == 'RESUME_GAME') {
    return {
      ...state,
      gameStatus: 'running',
    };
  }
  if (action.type == 'OPEN_MODAL') {
    return {
      ...state,
    };
  }
  if (action.type == 'CLOSE_MODAL') {
    return {
      ...state,
    };
  }

  return state;
}
