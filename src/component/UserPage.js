import { Button } from "@mui/material";
import React from "react";
import AdminTopBar from "./AdminTopBar";
import BasicTable from "./BasicTable";
import CreateUserBasicModal from "./CreateUserBasicModal";

function UserPage() {
  return (
    <div>
      <AdminTopBar />
      <div>
        <h1 style={{ marginLeft: "20px" }}>User Details</h1>
        <div
          style={{
            paddingRight: "20px",
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <CreateUserBasicModal
            useCase="create_new_user"
            buttonName="Create a new User"
          />

          <Button style={{ marginRight: "30px" }}>Delete</Button>
        </div>
      </div>
      <BasicTable url="http://localhost:8080/myshopadmin/users" />
    </div>
  );
}

export default UserPage;
