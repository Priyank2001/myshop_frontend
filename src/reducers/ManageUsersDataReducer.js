import { API_STATUS, ManageUserDataConstants } from "../Constants";
const initialState = {
  getUserListByPage: {
    API_STATUS: API_STATUS.NOT_CALLED,
    data: null,
    pageNumber: 1,
    error: null,
  },
};

export const ManageusersDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ManageUserDataConstants.UserListDetails.UPDATE_ACTIVE_PAGE_NUMBER: {
      return {
        ...state,
        getUserListByPage: {
          ...state.getUserListByPage,
          pageNumber: action.payload,
        },
      };
    }

    case ManageUserDataConstants.UserListDetails.FETCH_ACTIVE_PAGE_DATA_INIT: {
      return {
        ...state,
        getUserListByPage: {
          ...state.getUserListByPage,
          API_STATUS: API_STATUS.LOADING,
        },
      };
    }

    case ManageUserDataConstants.UserListDetails
      .FETCH_ACTIVE_PAGE_DATA_RESPONSE: {
      if (action.payload.data !== null)
        return {
          ...state,
          getUserListByPage: {
            ...state.getUserListByPage,
            data: action.payload.data,
            API_STATUS: API_STATUS.SUCCESS,
          },
        };
      else {
        return {
          ...state,
          getUserListByPage: {
            ...state.getUserListByPage,
            error: action.payload.error,
            API_STATUS: API_STATUS.FAILURE,
          },
        };
      }
    }

    default:
      return state;
  }
};
