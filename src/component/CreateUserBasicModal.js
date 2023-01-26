import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./style/BasicModal.css";
import { useDispatch, useSelector } from "react-redux";
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
  const [requestBody, setRequestBody] = useState({});
  const [inputState, setInputState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const errorCases = {
    GET_INPUT_FIELDS_ERROR: "Error while fetching the fields required",
    POST_CREATE_NEW_USER_ERROR: "Error while creating a new user",
  };

  /**
   * Required for react-redux bindings
   */
  console.log(JSON.stringify(userReducer));
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);
  const { inputFields } = userReducer;
  /**
   * Handling User Events
   */
  const handleOpen = () => {
    setOpen(true);
    getCreateNewUserForm();
  };
  const handleClose = () => {
    setOpen(false);
    setInputState({ email: "", firstName: "", lastName: "", password: "" });
  };
  const handleError = (useCase) => {
    switch (useCase) {
      default: {
      }
    }
  };
  /**
   * Making the Api calls using the dispatcher
   */
  const getCreateNewUserForm = async () => {
    dispatch(getCreateNewUserInputFields());
  };
  const checkUniqueEmail = async () => {};

  const handleCreateNewUser = () => {
    dispatch(createUserAction(inputState));
  };

  React.useEffect(() => {
    setFields(inputFields);
  }, [inputFields]);
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
          {fields.map((item, idx) => (
            <div className="__basicModal_field_div" key={idx}>
              <input
                required={item.required}
                placeholder={item.label}
                type={item.label == "Password" ? "password" : "text"}
                onChange={(event) => {
                  setInputState((prevState) => {
                    switch (item.label) {
                      case "Email": {
                        return {
                          ...prevState,
                          email: event.target.value,
                        };
                      }
                      case "First Name": {
                        return {
                          ...prevState,
                          firstName: event.target.value,
                        };
                      }
                      case "Last Name": {
                        return {
                          ...prevState,
                          lastName: event.target.value,
                        };
                      }
                      case "Password": {
                        return {
                          ...prevState,
                          password: event.target.value,
                        };
                      }
                      default: {
                        return prevState;
                      }
                    }
                  });
                }}
              ></input>
            </div>
          ))}
          <Button
            onClick={() => {
              handleCreateNewUser();
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
