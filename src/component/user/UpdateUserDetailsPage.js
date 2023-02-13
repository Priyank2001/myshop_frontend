import React, { useEffect, useState } from "react";
import AdminTopBar from "../AdminTopBar";
import FormComponent from "../FormComponent";
import { useParams } from "react-router-dom";
import { getCreateNewUserFormInputFields } from "../../actions/InputFieldsActions";
import { useDispatch, useSelector } from "react-redux";
import { getAnyUserDetails } from "../../actions/createUserAction";
import CircularIndeterminate from "../CircularIndeterminate";
import { userReducer } from "../../reducers/usersReducers";
import { useTheme } from "@mui/material/styles";
import { updateUserDetails } from "../../actions/UserActions";
import { requestType, API_STATUS, messageTypes } from "../../Constants";
import { apiEndpoints } from "../../Endpoints";
import MessageDialog from "../utils/MessageDialog";
function UpdateUserDetailsPage(props) {
  const { user_id } = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const inputFieldsReducer = useSelector((state) => {
    return state.inputFieldsReducer;
  });
  const userReducer = useSelector((state) => {
    return state.userReducer;
  });
  const { loading, error, payload } = inputFieldsReducer;
  const { userDetails, apis } = userReducer;
  const initialUiState = {
    messageVisible: false,
    messageType: "",
  };
  const [uiState, setUiState] = useState(initialUiState);
  useEffect(() => {
    dispatch(getCreateNewUserFormInputFields());
    dispatch(getAnyUserDetails(user_id));
  }, []);
  useEffect(() => {}, [payload]);
  useEffect(() => {
    if (apis !== null) {
      if (apis.UPDATE_USER_DETAILS === API_STATUS.SUCCESS) {
        setUiState((prevState) => {
          return {
            ...prevState,
            messageVisible: true,
            messageType: messageTypes.SUCCESS,
          };
        });
      } else if (apis.UPDATE_USER_DETAILS === API_STATUS.FAILURE) {
        setUiState((prevState) => {
          return {
            ...prevState,
            messageVisible: true,
            messageType: messageTypes.FAILURE,
          };
        });
      }
    }
  }, [apis]);
  const handleUpdate = (requestBody) => {
    dispatch(
      updateUserDetails(
        requestType.POST,
        apiEndpoints.POST_UPDATE_USER_DETAILS,
        requestBody
      )
    );
  };
  return (
    <div>
      <AdminTopBar />
      {loading === true ? (
        <CircularIndeterminate />
      ) : payload === null && userDetails === null ? (
        <></>
      ) : (
        <FormComponent
          userData={userDetails}
          roles={payload.roles}
          inputFields={payload.list}
          form_heading="Update User Details"
          prefillData={true}
          requestType={requestType.POST}
          postUrl={""}
          action={handleUpdate}
        />
      )}
      {uiState.messageVisible === true ? (
        <MessageDialog
          type={uiState.messageType}
          message={
            uiState.messageType === API_STATUS.SUCCESS
              ? "Updated user details successfully."
              : uiState.messageType === API_STATUS.FAILURE
              ? "Something went wrong"
              : ""
          }
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default UpdateUserDetailsPage;
