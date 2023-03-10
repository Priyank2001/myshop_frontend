const constants = require("../Constants");
const initialState = {
  inputFields: [],
  newUserData: null,
  error: null,
  loading: false,
  userDetails: null,
  invalidInputFields: [],
  apis: {
    UPDATE_USER_DETAILS: constants.API_STATUS.NOT_CALLED,
  },
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.INITIATE_CREATE_NEW_USER: {
      return {
        ...state,
        loading: true,
        invalidInputFields: [],
        newUserData: null,
        error: null,
        roles: [],
      };
    }
    case constants.CREATE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        newUserData: action.payload,
        error: null,
        invalidInputFields: [],
      };
    }
    case constants.INITIATE_GET_CREATE_NEW_USER_INPUT_FIELDS: {
      return {
        ...state,
        loading: true,
        invalidInputFields: [],
        newUserData: null,
      };
    }
    case constants.GET_CREATE_NEW_USER_FORM_INPUT_FIELDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        inputFields: action.payload.list,
        roles: action.payload.roles,
        invalidInputFields: [],
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
    case constants.errorConsts.CREATE_USER_REQUEST_BODY_INVALID: {
      return {
        ...state,
        loading: false,
        error: {
          ...state.error,
          message: action.errorMessage,
          operationName: constants.errorConsts.CREATE_USER_REQUEST_BODY_INVALID,
        },
        invalidInputFields: action.invalidInputs,
      };
    }
    case constants.successConsts.GET_ANY_USER_DETAIL_BY_USER_ID_SUCCESS: {
      return {
        ...state,
        userDetails: action.payload,
      };
    }
    case constants.errorConsts.POST_UPDATE_USER_DETAILS_FAILURE:{
      return {
        ...state,
        apis: {
          ...state.apis,
          UPDATE_USER_DETAILS: constants.API_STATUS.FAILURE,
        },
      }
    }
    case constants.successConsts.POST_UPDATE_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        apis: {
          ...state.apis,
          UPDATE_USER_DETAILS: constants.API_STATUS.SUCCESS,
        },
      }
    }
    case constants.apiCallInitConsts.POST_UPDATE_USER_DETAILS_INIT: {
      return {
        ...state,
        apis: {
          ...state.apis,
          UPDATE_USER_DETAILS: constants.API_STATUS.LOADING,
        },
      };
    }
    default:
      return state;
  }
};
