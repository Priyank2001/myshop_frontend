import { Button, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
export default function FormComponent(props) {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roles: new Set(),
  });
  const handlePrefillValue = (fieldId) => {
    switch (fieldId) {
      case "firstName":
        return `${inputState.firstName}`;
      case "lastName":
        return `${inputState.lastName}`;
      case "email":
        return `${inputState.email}`;
      case "password":
        return `${inputState.password}`;
      default:
        return ``;
    }
  };
  const handleOnChange = (event, fieldId) => {
    switch (fieldId) {
      case "firstName": {
        setInputState((prevState) => {
          return { ...prevState, firstName: event.target.value };
        });
        break;
      }
      case "lastName": {
        setInputState((prevState) => {
          return { ...prevState, lastName: event.target.value };
        });
        break;
      }
      case "email": {
        setInputState((prevState) => {
          return { ...prevState, email: event.target.value };
        });
        break;
      }
      case "password": {
        setInputState((prevState) => {
          return { ...prevState, password: event.target.value };
        });
        break;
      }
      default: {
        break;
      }
    }
  };
  const handleRadioButtonOnClick = (event, role) => {
    setInputState((prevState) => {
      return {
        ...prevState,
        roles:
          event.target.checked === true
            ? new Set([...prevState.roles, role])
            : new Set([...prevState.roles].filter((x) => x !== role)),
      };
    });
  };
  const handleProceedButton = () => {
    console.log(inputState);
  };
  useEffect(() => {
    if (props.userData !== null && props.prefillData === true) {
      setInputState((prevState) => {
        return {
          ...prevState,
          firstName: props.userData.firstName,
          lastName: props.userData.lastName,
          email: props.userData.email,
        };
      });
    }
  }, [props.userData]);

  return (
    <div
      style={{
        width: "30vw",
        margin: "auto",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        border: "solid 2px",
        borderRadius: "15px",
      }}
    >
      <h2 style={{ marginLeft: "15px" }}>{props.form_heading}</h2>
      {props.inputFields != null ? (
        props.inputFields.map((inputField) => {
          return (
            <div key={inputField.id} style={{ marginLeft: "15px" }}>
              <h4>{inputField.label}</h4>
              <TextField
                placeholder={`Enter your ${inputField.label}`}
                style={{ width: "50%" }}
                type={inputField.type}
                value={
                  props.prefillData === false || props.userData === null
                    ? ""
                    : handlePrefillValue(inputField.labelId)
                }
                onChange={(event) => {
                  handleOnChange(event, inputField.labelId);
                }}
              />
            </div>
          );
        })
      ) : (
        <></>
      )}
      {props.roles != null ? (
        <div style={{ marginLeft: "15px" }}>
          <h4>Roles</h4>
          <FormGroup>
            {props.roles.map((role) => {
              return (
                <FormControlLabel
                  control={<Checkbox />}
                  label={role.name}
                  onClick={(event) => {
                    handleRadioButtonOnClick(event, role);
                  }}
                />
              );
            })}
          </FormGroup>
        </div>
      ) : (
        <></>
      )}
      <Button onClick={handleProceedButton}>Update</Button>
    </div>
  );
}
