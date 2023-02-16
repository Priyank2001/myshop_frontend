export const BACKEND_URL = "http://localhost:8080/myshopadmin";
export const FRONTEND_BASE_URL = "http://localhost:3000";
export const FRONTEND_APPNAME = "/myshopadmin";
export const USERS = "/users";
export const GET_CREATE_NEW_USER_FORM = "/inputFields/new_user";
export const INPUT_FIELDS = "/inputFields";
export const NEW_USER = "/new_user";
export const CREATE_USER = "/create_user";
export const UPDATE_USER = "/update_user";
export const POST_CREATE_NEW_USER = "/users/save";
export const DUPLICATE_EMAIL_EXISTS = "/users/check_email";
export const DELETE_USER = "/delete_user";
export const PAGE = "/page"

export const userEndpoints = {
  USERS: "/users",
  USER_ID: "user_id",
  GET_USER: "/get_user",
  UPDATE_USER: "/update_user",
};

export const frontendEndpoints = {
  USERS_PAGE: `${FRONTEND_BASE_URL}${FRONTEND_APPNAME}${USERS}`,
  CREATE_USER_PAGE: `${FRONTEND_BASE_URL}${FRONTEND_APPNAME}${USERS}${CREATE_USER}`,
};
export const apiEndpoints = {
  POST_UPDATE_USER_DETAILS: `${BACKEND_URL}${USERS}${UPDATE_USER}`,
  DELETE_USER_DETAILS: `${BACKEND_URL}${USERS}${DELETE_USER}`,
  FETCH_USERS_BY_PAGE: `${BACKEND_URL}${USERS}${PAGE}`
};

export const routePaths = {
  USERS_PAGE: `${FRONTEND_APPNAME}${USERS}`,
  CREATE_USER_PAGE: `${FRONTEND_APPNAME}${USERS}${CREATE_USER}`,
  UPDATE_USER_DETAILS_PAGE: `${FRONTEND_APPNAME}${USERS}${UPDATE_USER}`,
};
