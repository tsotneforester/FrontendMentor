export const initialState = {
  password: null,
  length: 8,
  stepPercentage: 5,
  checked: [false, true, true, true],
  strength: 3, // 1,2,3,4
  preview: null, // 1,2,3,4
};

export function reducer(state = initialState, action) {
  if (action.type == "RANGE_CHANGE") {
    return {
      ...state,
      length: action.payload.length,
      strength: action.payload.strength,
    };
  }

  if (action.type == "CHECHBOX_TOGGLE") {
    return {
      ...state,
      checked: action.payload.checked,
      strength: action.payload.strength,
      // questions: action.payload,
    };
  }

  if (action.type == "SET_STRENGTH") {
    return {
      ...state,
      strength: action.payload.strength,
      length: action.payload.length,
      checked: action.payload.checked,
      preview: action.payload.strength,
      // questions: action.payload,
    };
  }
  if (action.type == "SET_PREVIEW") {
    return {
      ...state,
      preview: action.payload,
      // questions: action.payload,
    };
  }

  if (action.type == "PREVIEW_OFF") {
    return {
      ...state,
      preview: null,
      // questions: action.payload,
    };
  }
  if (action.type == "GENERATE_PASSWORD") {
    return {
      ...state,
      password: action.payload,
      // questions: action.payload,
    };
  }
  //"GENERATE_PASSWORD"
  return state;
}

export function calculateStrength(n, arr) {
  const checks = arr.filter((e) => e).length;
  if (checks >= 3 && n >= 12) {
    return 4;
  }
  if (checks >= 1 && checks < 3 && n >= 12) {
    return 3;
  }

  if (checks >= 3 && n >= 8 && n < 12) {
    return 3;
  }
  if (checks >= 1 && checks < 3 && n >= 8 && n < 12) {
    return 2;
  }

  if (checks >= 3 && n >= 5 && n < 8) {
    return 2;
  }
  if (checks >= 1 && checks < 3 && n >= 5 && n < 8) {
    return 1;
  }

  if (n < 5 && n >= 1 && checks >= 1) {
    return 1;
  }
  return 0;
}
