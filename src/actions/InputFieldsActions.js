import axios from "axios";
const constants = require("../Constants");
const endpoints = require("../Endpoints");
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getCreateNewUserFormInputFields = () => async (dispatch) => {
  try {
    dispatch({
      type: constants.apiCallInitConsts
        .GET_INPUT_FIELDS_CREATE_NEW_USER_CALL_INIT,
      payload: null,
    });
    const response = await axios.get(
      `${endpoints.BACKEND_URL}${endpoints.INPUT_FIELDS}${endpoints.NEW_USER}`
    );
    console.log(response);
    dispatch({
      type: constants.successConsts.GET_INPUT_FIELDS_CREATE_NEW_USER_SUCCESS,
      payload: response.data,
    });
  } catch (exception) {
    console.log(exception);
  }
};
