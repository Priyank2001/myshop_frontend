const constants = require("../Constants");
const initialState = {
  inputFields: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.INITIATE_CREATE_NEW_USER: {
      return { ...state, loading: true };
    }
    case constants.CREATE_USER_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case constants.INITIATE_GET_CREATE_NEW_USER_INPUT_FIELDS: {
      return { ...state, loading: true };
    }
    case constants.GET_CREATE_NEW_USER_FORM_INPUT_FIELDS_SUCCESS: {
      return { ...state, loading: false, inputFields: action.payload };
    }
    case constants.GET_CREATE_NEW_USER_FORM_INPUT_FIELDS_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }
    default:
      return state;
  }
};
