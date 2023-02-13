import { apiCallInitConsts, successConsts , errorConsts , requestType, config } from "../Constants";
import axios from "axios";
export const updateUserDetails =
  (methodType, url, requestBody) => async (dispatch) => {
    dispatch({
      type: apiCallInitConsts.POST_UPDATE_USER_DETAILS_INIT,
    });
    try {
      const body = JSON.stringify(requestBody);
      const response = await axios.post(url, body, config);
      dispatch({
        type:successConsts.POST_UPDATE_USER_DETAILS_SUCCESS,
        payload:response.data,
      })
    } catch (exception) {
      dispatch({
        type:errorConsts.POST_UPDATE_USER_DETAILS_FAILURE,
        payload:null,
      })
      console.log(exception);
    }
  };
