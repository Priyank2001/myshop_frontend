import axios, * as others from "axios";
const constants = require("../Constants");
const endpoints = require("../Endpoints");
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const createUserAction = (requestBody) => async (dispatch) => {
  dispatch({
    type: constants.INITIATE_CREATE_NEW_USER,
  });
  const obj = {
    type: constants.GET_CREATE_NEW_USER_FORM_ADMIN,
    url: `${endpoints.BACKEND_URL}${endpoints.POST_CREATE_NEW_USER}`,
  };
  try {
    const { data } = await axios.post(
      obj.url,
      JSON.stringify(requestBody),
      config
    );
    dispatch({
      type: constants.CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (exception) {
    console.log(exception);
  }
};

export const getCreateNewUserInputFields = () => async (dispatch) => {
  dispatch({
    type: constants.INITIATE_GET_CREATE_NEW_USER_INPUT_FIELDS,
  });
  try {
    const { data } = await axios.get(
      `${endpoints.BACKEND_URL}${endpoints.GET_CREATE_NEW_USER_FORM}`
    );
    dispatch({
      type: constants.GET_CREATE_NEW_USER_FORM_INPUT_FIELDS_SUCCESS,
      payload: data,
    });
  } catch (exception) {
    dispatch({
      type: constants.GET_CREATE_NEW_USER_FORM_INPUT_FIELDS_FAILURE,
      error: exception,
    });
  }
};
