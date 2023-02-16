import { Button } from "@mui/material";
import React from "react";
import AdminTopBar from "./AdminTopBar";
import BasicTable from "./BasicTable";
import { useTheme } from '@mui/material/styles';
const endpoints = require("../Endpoints");

function UserPage() {
  const theme = useTheme();
  return (
    <div>
      <AdminTopBar />
      <div>
        <h1 style={{ marginLeft: "20px" , color:`${theme.palette.primary.main}` }}>User Details</h1>
        <div
          style={{
            paddingRight: "20px",
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
	  <Button><a href={endpoints.frontendEndpoints.CREATE_USER_PAGE}>Create a new user</a></Button>
          <Button style={{ marginRight: "30px" }}>Delete</Button>
        </div>
      </div>
      <BasicTable url="http://localhost:8080/myshopadmin/users" />
    </div>
  );
}

export default UserPage;
