const constants = require("../Constants")
const endpoints = require("../Endpoints")
export const createUserAction = {
    type:constants.GET_CREATE_NEW_USER_FORM_ADMIN,
    url:`${endpoints.BACKEND_URL}${endpoints.CREATE_NEW_USER}`,
}