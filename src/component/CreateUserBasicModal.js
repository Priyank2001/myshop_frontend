import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./style/BasicModal.css";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import CircularIndeterminate from "./CircularIndeterminate";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import ValidateInputs from "../utils/ValidateInputs";
import {
  createUserAction,
  getCreateNewUserInputFields,
} from "../actions/createUserAction";
import { useNavigate } from "react-router-dom";

const constants = require("../Constants");
const endpoints = require("../Endpoints");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateUserBasicModal(props) {
  /**
   * App States  defined using useEffect and some other const values
   */
  const [open, setOpen] = React.useState(false);
  const [fields, setFields] = useState([]);
  const [inputState, setInputState] = useState({
    email: { text: "", regex: "" },
    firstName: { text: "", regex: "" },
    lastName: { text: "", regex: "" },
    password: { text: "", regex: "" },
  });
  const initialUiState = {
    loaderVisible: false,
    inputFieldsVisible: false,
    errorMessageVisible: false,
    invalidInputs: {
      visible: false,
      labelIds: [],
    },
    roles: [],
  };
  const [uiState, setUiState] = useState(initialUiState);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Required for react-redux bindings
   */
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);
  const { inputFields, loading, newUserData, error, invalidInputFields } =
    userReducer;
  /**
   * Handling User Events
   */
  const handleOpen = () => {
    setOpen(true);
    setUiState((state) => {
      return {
        ...state,
        inputFieldsVisible: false,
        loaderVisible: true,
      };
    });
    getCreateNewUserForm();
  };

  const handleClose = () => {
    setOpen(false);
    setInputState({
      email: { text: "", regex: "" },
      firstName: { text: "", regex: "" },
      lastName: { text: "", regex: "" },
      password: { text: "", regex: "" },
    });
    setUiState(initialUiState);
  };

  const handleError = (useCase) => {
    switch (useCase) {
      case constants.operationNames.GET_INPUT_FIELDS_CREATE_NEW_USER_REQUEST: {
        setErrorMessage("Facing some issues ");
        setUiState((state) => {
          return {
            ...state,
            errorMessageVisible: true,
          };
        });
      }
      default: {
      }
    }
  };

  const handleOnChangeTextField = (event, item) => {
    setInputState((prevState) => {
      switch (item.label) {
        case "Email": {
          return {
            ...prevState,
            email: {
              ...prevState.email,
              text: event.target.value,
            },
          };
        }
        case "First Name": {
          return {
            ...prevState,
            firstName: {
              ...prevState.firstName,
              text: event.target.value,
            },
          };
        }
        case "Last Name": {
          return {
            ...prevState,
            lastName: {
              ...prevState.lastName,
              text: event.target.value,
            },
          };
        }
        case "Password": {
          return {
            ...prevState,
            password: {
              ...prevState.password,
              text: event.target.value,
            },
          };
        }
        default: {
          return prevState;
        }
      }
    });
  };
  /**
   * Making the Api calls using the dispatcher
   */
  const getCreateNewUserForm = async () => {
    dispatch(getCreateNewUserInputFields());
  };
  const handleCreateNewUser = () => {
    dispatch(createUserAction(inputState));
  };

  /**
   * UseEffect runs the piece of code when there is a change in the UI States
   */
  React.useEffect(() => {
    if (inputFields != null) {
      setFields(inputFields);
      inputFields.map((inputField) => {
        switch (inputField.labelId) {
          case "email": {
            setInputState((prevState) => {
              return {
                ...prevState,
                email: {
                  ...prevState.email,
                  regex: inputField.regex,
                  labelId: inputField.labelId,
                  label: inputField.label,
                },
              };
            });
            break;
          }
          case "firstName": {
            setInputState((prevState) => {
              return {
                ...prevState,
                firstName: {
                  ...prevState.firstName,
                  regex: inputField.regex,
                  labelId: inputField.labelId,
                  label: inputField.label,
                },
              };
            });
            break;
          }
          case "lastName": {
            setInputState((prevState) => {
              return {
                ...prevState,
                lastName: {
                  ...prevState.lastName,
                  regex: inputField.regex,
                  labelId: inputField.labelId,
                  label: inputField.label,
                },
              };
            });
            break;
          }
          case "password": {
            setInputState((prevState) => {
              return {
                ...prevState,
                password: {
                  ...prevState.password,
                  regex: inputField.regex,
                  labelId: inputField.labelId,
                  label: inputField.label,
                },
              };
            });
            break;
          }
          default: {
          }
        }
      });
      setUiState((state) => {
        return {
          ...state,
          loaderVisible: loading,
          inputFieldsVisible: true,
        };
      });
    }
  }, [inputFields]);

  React.useEffect(() => {
    if (error != null) handleError(error.operationName);
  }, [error]);

  React.useEffect(() => {
    console.log(invalidInputFields);
    if (invalidInputFields != null && invalidInputFields.length > 0) {
      setUiState((prevState) => {
        const arr = [];
        invalidInputFields.map((item) => arr.push(item.labelId));
        return {
          ...prevState,
          invalidInputs: {
            visible: true,
            labelIds: arr,
          },
        };
      });
    } else {
      setUiState((prevState) => {
        return {
          ...prevState,
          invalidInputs: {
            visible: false,
            labelIds: [],
          },
        };
      });
    }
  }, [invalidInputFields]);

  React.useEffect(() => {
    if (newUserData != null) {
      console.log("new user created");
      handleClose();
    }
  }, [newUserData]);

  React.useEffect(() => {
    setUiState((prevState) => {
      return {
        ...prevState,
        loaderVisible: loading,
      };
    });
  }, [loading]);
  // React.useEffect(() => {
  //   if (roles != null) {
  //     setUiState((prevState) => {
  //       return {
  //         ...prevState,
  //         roles: roles,
  //       };
  //     });
  //   }
  // }, [roles]);

  return (
    <div>
      <Button onClick={handleOpen}>{props.buttonName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Create New user</h3>
          {uiState.loaderVisible ? (
            <CircularIndeterminate />
          ) : (
            <>
              {fields.map((item, idx) => (
                <div className="__basicModal_field_div" key={idx}>
                  <TextField
                    // required={item.required}
                    label={item.label}
                    variant="outlined"
                    margin="normal"
                    style={{ padding: "0px" }}
                    type={item.label == "Password" ? "password" : "text"}
                    onChange={(event) => {
                      handleOnChangeTextField(event, item);
                    }}
                  ></TextField>
                </div>
              ))}
              {/* <FormGroup>
                {uiState.roles.map((item, idx) => {
                  return (
                    <></>
                    // <FormControlLabel control={<Switch />} label={item.name} />
                  );
                })}
              </FormGroup> */}
            </>
          )}
          {uiState.errorMessageVisible ? <h5>{errorMessage}</h5> : <></>}
          <Button
            onClick={() => {
              handleCreateNewUser();
            }}
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              backgroundColor: "#09cfed",
              text: "white",
              alignItems: "center",
            }}
            disabled={loading}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
          {error != null ? <>{error.message}</> : <></>}
        </Box>
      </Modal>
    </div>
  );
}
