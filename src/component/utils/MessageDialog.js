import React, { useEffect } from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { messageTypes } from "../../Constants";
function MessageDialog({ type, message }) {
  useEffect(() => {}, []);
  const comp = () => {
    switch (type) {
      case messageTypes.SUCCESS: {
        return <CheckOutlinedIcon fontSize="large" />;
      }
      case messageTypes.FAILURE: {
        return <CloseOutlinedIcon fontSize="large"/>;
      }
      default:
        return <></>;
    }
  };
  return (
    <div>
      {comp()}
      <h5>{message}</h5>
    </div>
  );
}

export default MessageDialog;
