import { ManageUserDataConstants } from "../Constants";
import { apiEndpoints } from "../Endpoints";
import axios from "axios";


const updateActivePageNumber = (pageNumber) => async (dispatch) => {
    dispatch({
        type:ManageUserDataConstants.UserListDetails.UPDATE_ACTIVE_PAGE_NUMBER,
        payload:pageNumber
    })
};

const fetchUsersByPage = (pageNumber) => async(dispatch) => {
    dispatch({
        type: ManageUserDataConstants.UserListDetails.FETCH_ACTIVE_PAGE_DATA_INIT,
        payload:null
    })

    try{
        const {data} = await axios.get(`${apiEndpoints.FETCH_USERS_BY_PAGE}/${pageNumber}`);
        console.log(data);
        dispatch({
            type : ManageUserDataConstants.UserListDetails.FETCH_ACTIVE_PAGE_DATA_RESPONSE,
            payload: {data: data}
        })
    }catch(e){
        console.error("fetchUsersByPage failed with error", e);
        dispatch({
            type : ManageUserDataConstants.UserListDetails.FETCH_ACTIVE_PAGE_DATA_RESPONSE,
            payload: {error: e}
        })
    }

} 


export const UserListPageActions = {
  updatePageNumber: updateActivePageNumber,
  fetchUsersByPage:fetchUsersByPage
};
