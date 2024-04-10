import axios from "axios";

export const initialStateForm = {
  fname: "",
  fnameWarning: "",
  email: "",
  emailWarning: "",
  phone: "", //99557151446

  phoneWarning: "",
  flag: null,
  isLoading: false,
};

export const formReducer = (state = initialStateForm, action) => {
  if (action.type == "SET_FNAME") {
    return {
      ...state,
      fname: action.payload.fname,
      fnameWarning: action.payload.warning,
    };
  }

  if (action.type == "SET_EMAIL") {
    return {
      ...state,
      email: action.payload.email,
      emailWarning: action.payload.warning,
    };
  }

  if (action.type == "SET_PHONE") {
    return {
      ...state,
      phone: action.payload.phone,
      phoneWarning: action.payload.warning,
    };
  }
  if (action.type == "PHONE_WARNING") {
    return {
      ...state,
      phoneWarning: action.payload,
      isLoading: false,
    };
  }

  if (action.type == "PHONE_VALID") {
    return {
      ...state,
      flag: action.payload,
      isLoading: false,
    };
  }

  if (action.type == "LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type == "SUBMIT_VALIDATION") {
    return {
      ...state,
      fnameWarning: action.payload.fnameWarning,
      phoneWarning: action.payload.phoneWarning,
      emailWarning: action.payload.emailWarning,
    };
  }

  return state;
};

// +995571514469
// +9940555332130;

export function phoneValidator(phone) {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const res1 = await axios("https://api.api-ninjas.com/v1/validatephone?number=" + phone, {
        headers: {
          "X-Api-Key": "2Ieo8wG5e5re5qUs7eauMQ==OvaNNRQWTDsu8HOi",
        },
      });

      if (res1.data.is_valid) {
        let country = res1.data.country.toLowerCase();
        let res2 = await axios(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
        console.log(res2.data[0].flags.png);

        dispatch({ type: "PHONE_VALID", payload: res2.data[0].flags.png });
        dispatch({ type: "NEXT_STEP" });
      } else {
        dispatch({ type: "PHONE_WARNING", payload: "number is invalid" });
      }
    } catch (error) {
      if (error.response.status == 400) {
        dispatch({ type: "PHONE_WARNING", payload: "number is too short" });
      }
    }
  };
}

export function setFname(string) {
  return { type: "SET_FNAME", payload: { fname: string, warning: string ? "" : "This field is required" } };
}

export function setEmail(string) {
  return { type: "SET_EMAIL", payload: { email: string, warning: !string ? "This field is required" : !isValidEmail(string) ? "Email is invalid" : "" } };
}

export function setPhone(string) {
  return { type: "SET_PHONE", payload: { phone: string, warning: !string ? "This field is required" : "" } };
}

export function bulkValidate(name, email, phone) {
  return {
    type: "SUBMIT_VALIDATION",
    payload: {
      fnameWarning: !name ? "This field is required" : "",
      emailWarning: !email ? "This field is required" : !isValidEmail(email) ? "Email is invalid" : "",
      phoneWarning: !phone ? "This field is required" : "",
    },
  };
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
