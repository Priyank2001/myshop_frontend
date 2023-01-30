import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function FormComponent(props) {
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
      <h2 style={{ marginLeft: "15px" }}>Create User Form</h2>
      {props.inputFields != null ? (
        props.inputFields.map((inputField) => {
          return (
            <div style={{ marginLeft: "15px" }}>
              <h4>{inputField.label}</h4>
              <TextField
                placeholder={`Enter your ${inputField.label}`}
                style={{ width: "50%" }}
                type={inputField.type}
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
                <FormControlLabel control={<Checkbox />} label={role.name} />
              );
            })}
          </FormGroup>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
