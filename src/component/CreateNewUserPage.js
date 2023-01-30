import AdminTopBar from "./AdminTopBar";
import FormComponent from "./FormComponent";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCreateNewUserFormInputFields } from "../actions/InputFieldsActions";
import CircularIndeterminate from "./CircularIndeterminate";
export default function CreateNewUserPage() {
  /**
   * Bindings required for react-redux
   */
  const dispatch = useDispatch();
  const inputFieldsReducer = useSelector((state) => state.inputFieldsReducer);
  const { loading, payload, error } = inputFieldsReducer;

  /**
   * Declaring UI state by using react hooks
   */

  const [uiState, setUiState] = useState({
    loading: false,
    inputFields: [],
    roles: [],
  });
  const handleGetCreateNewUserInputFields = () => {
    dispatch(getCreateNewUserFormInputFields());
  };

  useEffect(() => {
    handleGetCreateNewUserInputFields();
  });

  useEffect(() => {
    if (payload != null && error === null)
      setUiState((prevState) => {
        return {
          ...prevState,
          inputFields: payload.list,
          roles: payload.roles,
        };
      });
  }, [payload,error]);

  useEffect(() => {
    console.log(loading);
    setUiState((prevState) => {
      return {
        ...prevState,
        loading: loading,
      };
    });
  }, [loading]);
  return (
    <>
      <AdminTopBar />
      {uiState.loading && error === null ? (
        <CircularIndeterminate />
      ) : (
        <FormComponent
          inputFields={uiState.inputFields}
          roles={uiState.roles}
        />
      )}
    </>
  );
}
