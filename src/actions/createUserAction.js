import { Action } from "@remix-run/router";
import axios from "axios";
import ValidateInputs from "../utils/ValidateInputs";
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
  var requestObj = {
    email: requestBody.email,
    firstName: requestBody.firstName,
    lastName: requestBody.lastName,
    password: requestBody.password,
    roles: Array.from(requestBody.roles),
  };
  const temp = ValidateInputs(requestBody);
  const duplicateEmailCheck = async () => {
    const response = await axios.post(
      `${endpoints.BACKEND_URL}${endpoints.DUPLICATE_EMAIL_EXISTS}?email=${requestObj.email}`
    );
    return response;
  };
  const res = await duplicateEmailCheck();
  if (temp.valid && res.data === "Unique") {
    try {
      const { data } = await axios.post(
        obj.url,
        JSON.stringify(requestObj),
        config
      );
      dispatch({
        type: constants.CREATE_USER_SUCCESS,
        payload: data,
      });
    } catch (exception) {
      console.log(exception);
    }
  } else {
    try {
      var names = "";
      const arr = [];
      temp.invalidInputs.map((item, idx) => arr.push(item.label));
      names = arr.join(",");
      if (res.data === "Unique") {
        dispatch({
          type: constants.errorConsts.CREATE_USER_REQUEST_BODY_INVALID,
          invalidInputs: temp.invalidInputs,
          errorMessage: `${names} are wrong`,
        });
      } else {
        dispatch({
          type: constants.errorConsts.CREATE_USER_REQUEST_BODY_INVALID,
          invalidInputs: temp.invalidInputs,
          errorMessage: `Email is duplicate`,
        });
      }
    } catch (exception) {
      console.log(exception);
    }
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
    console.log(exception);
  }
};

export const getAnyUserDetails = (userId) => async (dispatch) => {
  dispatch({
    type: constants.apiCallInitConsts.GET_ANY_USER_DETAIL_BY_USER_ID_INIT,
  });
  try {
    const { data } = await axios.post(
      `${endpoints.BACKEND_URL}${endpoints.userEndpoints.USERS}${endpoints.userEndpoints.GET_USER}?${endpoints.userEndpoints.USER_ID}=${userId}`
    );
    dispatch({
      type:constants.successConsts.GET_ANY_USER_DETAIL_BY_USER_ID_SUCCESS,
      payload:data,
    })
  } catch (exception) {
    console.log(exception);
  }
};
