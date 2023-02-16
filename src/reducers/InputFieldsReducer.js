const constants = require("../Constants");

export const initialState = {
  loading: false,
  error: null,
  payload: null,
};

export const InputFieldsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.apiCallInitConsts.GET_INPUT_FIELDS_CREATE_NEW_USER_CALL_INIT : {
      return {
        ...state,
        loading:true,
        payload: null,
        error:null
      }
    }
    case constants.successConsts.GET_INPUT_FIELDS_CREATE_NEW_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        payload: action.payload,
        error: null,
      };
    }
    default:
      return state;
  }
};
