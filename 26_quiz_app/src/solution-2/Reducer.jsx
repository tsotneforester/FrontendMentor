export const initialState = {
  status: "loading",
  data: null,
  titleIndex: null,
  questionIndex: 0,
  choise: null,
  showSelectionError: false,
  submitted: false,
  score: 0,
  didNotScore: false,
  didScore: false,
};

export function reducer(state = initialState, action) {
  if (action.type == "dataReceived") {
    return {
      ...state,
      status: "ready",
      data: action.payload,
    };
  }
  if (action.type == "titleSet") {
    return {
      ...state,
      status: "active",
      titleIndex: action.payload,
    };
  }
  if (action.type == "quizzStart") {
    return {
      ...state,
      status: "active",
      questions: action.payload,
    };
  }
  if (action.type == "choiseSelected") {
    return {
      ...state,
      choise: action.payload,
      showSelectionError: false,
    };
  }
  if (action.type == "showSelectionError") {
    return {
      ...state,
      showSelectionError: true,
    };
  }
  if (action.type == "submit") {
    return {
      ...state,
      submitted: true,
    };
  }
  if (action.type == "scored") {
    return {
      ...state,
      score: state.score + 1,
      didScore: true,
    };
  }

  if (action.type == "missed") {
    return {
      ...state,
      didNotScore: true,
    };
  }
  if (action.type == "nextQuestion") {
    return {
      ...state,
      didScore: false,
      didNotScore: null,
      choise: null,
      submitted: false,
      questionIndex: state.questionIndex + 1,
    };
  }

  if (action.type == "finished") {
    return {
      ...state,
      status: "finished",
      didScore: false,
      didNotScore: null,
      choise: null,
      submitted: false,
      questionIndex: 0,
    };
  }

  return state;
}
