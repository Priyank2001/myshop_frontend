import React, { useEffect } from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { API_STATUS, messageTypes } from "../../Constants";
import { theme } from "../../utils/CustomTheme";
function MessageDialog({ type, message }) {
  useEffect(() => {}, []);
  const comp = () => {
    switch (type) {
      case messageTypes.SUCCESS: {
        return (
          <>
            <CheckOutlinedIcon
              style={{ margin: "auto", color: "green" }}
              fontSize="large"
            />
            <h4>{message}</h4>
          </>
        );
      }
      case messageTypes.FAILURE: {
        return (
          <>
            <CloseOutlinedIcon
              style={{ margin: "auto", color: "red" }}
              fontSize="large"
            />
            <h4>{message}</h4>
          </>
        );
      }
      default:
        return <></>;
    }
  };
  return (
    <div
      style={{
        width: "fit-content",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      {comp()}
    </div>
  );
}

export default MessageDialog;
