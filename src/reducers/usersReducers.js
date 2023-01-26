const constants = require("../Constants");
const initialState = {
  inputFields: [],
  error: null,
  loading: false,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.INITIATE_CREATE_NEW_USER: {
      return { ...state, loading: true };
    }
    case constants.CREATE_USER_SUCCESS: {
      return { ...state, loading: false, data: action.payload, error: null };
    }
    case constants.INITIATE_GET_CREATE_NEW_USER_INPUT_FIELDS: {
      return { ...state, loading: true };
    }
    case constants.GET_CREATE_NEW_USER_FORM_INPUT_FIELDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        inputFields: action.payload,
        error: null,
      };
    }
    case constants.GET_CREATE_NEW_USER_FORM_INPUT_FIELDS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: {
          message: action.error,
          operationName:
            constants.operationNames.GET_INPUT_FIELDS_CREATE_NEW_USER_REQUEST,
        },
      };
    }
    default:
      return state;
  }
};
