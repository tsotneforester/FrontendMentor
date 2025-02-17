export const initialState = {
  topChars: [],
  string: '',
  readingTime: 0,
  seeMore: false,
  excludeSpaces: false,
  limitActivated: false,
  limit: '200',
  limitExceded: false,
  sentences: 0,
  words: 0,
  chars: 0,
};

export function reducer(state = initialState, action) {
  if (action.type == 'UPDATE_STRING_AND_COUNT') {
    return {
      ...state,
      string: action.payload.string,
      limitExceded: action.payload.limitExceded,
      topChars: action.payload.topChars,
      sentences: action.payload.sentences,
      words: action.payload.words,
      readingTime: action.payload.readingTime,
      chars: action.payload.chars,
    };
  }
  if (action.type == 'TOGGLE_SPACE') {
    return {
      ...state,
      excludeSpaces: action.payload.excludeSpaces,
      limitExceded: action.payload.limitExceded,
      chars: action.payload.chars,
      topChars: action.payload.topChars,
    };
  }
  if (action.type == 'TOGGLE_LIMIT') {
    return {
      ...state,
      limitActivated: action.payload.limitActivated,
      limitExceded: action.payload.limitExceded,
    };
  }
  if (action.type == 'UPDATE_LIMIT') {
    return {
      ...state,
      limit: action.payload.limit,
      limitExceded: action.payload.limitExceded,
    };
  }
  if (action.type == 'SEE_MORE_TOGGLE') {
    return {
      ...state,
      seeMore: action.payload,
    };
  }

  return state;
}
