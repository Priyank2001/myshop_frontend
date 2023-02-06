import React, { useEffect } from "react";
import AdminTopBar from "../AdminTopBar";
import FormComponent from "../FormComponent";
import { useParams } from "react-router-dom";
import { getCreateNewUserFormInputFields } from "../../actions/InputFieldsActions";
import { useDispatch, useSelector } from "react-redux";
import { getAnyUserDetails } from "../../actions/createUserAction";
import CircularIndeterminate from "../CircularIndeterminate";
import { userReducer } from "../../reducers/usersReducers";
function UpdateUserDetailsPage(props) {
  const { user_id } = useParams();
  const dispatch = useDispatch();
  const inputFieldsReducer = useSelector((state) => {
    return state.inputFieldsReducer;
  });
  const userReducer = useSelector((state) => {
    return state.userReducer;
  });
  const { loading, error, payload } = inputFieldsReducer;
  const { userDetails } = userReducer;
  useEffect(() => {
    dispatch(getCreateNewUserFormInputFields());
    dispatch(getAnyUserDetails(user_id));
  }, []);
  useEffect(() => {}, [payload]);
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
        />
      )}
    </div>
  );
}

export default UpdateUserDetailsPage;
