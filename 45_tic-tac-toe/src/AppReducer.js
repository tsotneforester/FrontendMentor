export const initialState = {
  player1PlaysWithX: true,
  rivalIsCPU: null,
  scoreSheet: {
    x: 0,
    tie: 0,
    o: 0,
  },
  gameStatus: null,
  turnIsForX: true,
  isCPUTurn: null,
  progressMap: [null, null, null, null, null, null, null, null, null],
  winningCombo: null,
  hoveredIndex: null,
  gridRefresher: null,
};

export function reducer(state = initialState, action) {
  if (action.type == 'SET_PLAYER1_MARK') {
    return {
      ...state,
      player1PlaysWithX: action.payload,
    };
  }
  if (action.type == 'SET_CPU_RIVAL') {
    return {
      ...state,
      rivalIsCPU: action.payload,
    };
  }
  if (action.type == 'UPDATE_SCORE_SHEET') {
    return {
      ...state,
      scoreSheet: action.payload,
    };
  }
  if (action.type == 'RESET_SCORE_SHEET') {
    return {
      ...state,
      scoreSheet: {
        x: 0,
        tie: 0,
        o: 0,
      },
    };
  }
  if (action.type == 'SET_GAME_STATUS') {
    return {
      ...state,
      gameStatus: action.payload,
    };
  }
  if (action.type == 'SET_TURN_FOR_X') {
    return {
      ...state,
      turnIsForX: action.payload,
    };
  }
  if (action.type == 'SET_CPU_TURN') {
    return {
      ...state,
      isCPUTurn: action.payload,
    };
  }
  if (action.type == 'SET_PROGRESS_MAP') {
    return {
      ...state,
      progressMap: action.payload,
    };
  }
  if (action.type == 'RESET_PROGRESS_MAP') {
    return {
      ...state,
      progressMap: Array(9).fill(null),
    };
  }
  if (action.type == 'SET_WINNING_COMBO') {
    return {
      ...state,
      winningCombo: action.payload,
    };
  }
  if (action.type == 'SET_HOVER_INDEX') {
    return {
      ...state,
      hoveredIndex: action.payload,
    };
  }
  if (action.type == 'RESTART_GAME') {
    return {
      ...state,
      progressMap: Array(9).fill(null),
      gameStatus: 'running',
      turnIsForX: true,
      winningCombo: null,
      gridRefresher: Date(),
    };
  }

  return state;
}
