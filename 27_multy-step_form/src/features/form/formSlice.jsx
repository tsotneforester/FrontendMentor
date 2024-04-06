import axios from "axios";

export const initialStateForm = {
  fname: "",
  fnameWarning: "",
  email: "",
  emailWarning: "",
  phone: "",
  phoneWarning: "",
  country: null,
  isLoading: false,
};

export const formReducer = (state = initialStateForm, action) => {
  if (action.type == "FNAME_INPUT") {
    return {
      ...state,
      fname: action.payload,
      fnameWarning: "",
    };
  }
  if (action.type == "FNAME_WARNING") {
    return {
      ...state,
      fnameWarning: "This field is required",
    };
  }
  if (action.type == "EMAIL_INPUT") {
    return {
      ...state,
      email: action.payload,
      emailWarning: "",
    };
  }
  if (action.type == "EMAIL_WARNING") {
    return {
      ...state,
      emailWarning: action.payload,
    };
  }

  if (action.type == "PHONE_INPUT") {
    return {
      ...state,
      phone: action.payload,
      phoneWarning: "",
      isLoading: true,
      country: null,
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
      country: action.payload,
      isLoading: false,
    };
  }

  return state;
};

// +995571514469
// +9940555332130;

export function phoneValidator(phone) {
  if (!phone) {
    return { type: "PHONE_WARNING", payload: "This field is required" };
  }

  return async function (dispatch) {
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
      } else {
        dispatch({ type: "PHONE_WARNING", payload: "number is invalid" });
      }
    } catch (error) {
      console.log(error);
      if (error.response.status == 400) {
        dispatch({ type: "PHONE_WARNING", payload: "number is too short" });
      }
    }
  };
}
