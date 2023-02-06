import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Icon, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import IconLink from "./utils/IconLink";

const endpoints = require("../Endpoints");
export default function BasicTable(props) {
  const [data, setData] = useState({ loading: false, rows: null });
  const tableStyle = {
    width: "70%",
    minWidth: "650",
    margin: "auto",
    border: "solid",
  };
  React.useEffect(() => {
    try {
      fetch(props.url)
        .then((res) => res.json())
        .then((json) => {
          setData((prevState) => {
            return {
              loading: false,
              rows: json,
            };
          });
        });
    } catch (error) {}
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={tableStyle} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>User Id </h3>
              </TableCell>
              <TableCell>
                <h3>First Name</h3>
              </TableCell>
              <TableCell>
                <h3>Last Name </h3>
              </TableCell>
              <TableCell>
                <h3>Email </h3>
              </TableCell>
              <TableCell>
                <h3>Enabled </h3>
              </TableCell>
              <TableCell>
                <h3>Edit </h3>
              </TableCell>
              <TableCell>
                <h3>Delete</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.loading === false && data.rows !== null ? (
              data.rows.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.enabled ? <DoneIcon /> : <></>}</TableCell>
                  <TableCell>
                    {/* <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={`${endpoints.routePaths.UPDATE_USER_DETAILS_PAGE}/${user.id}`}
                    > */}
                    <IconLink
                      icon={<ModeEditIcon />}
                      href={`${endpoints.routePaths.UPDATE_USER_DETAILS_PAGE}/${user.id}`}
                    />
                    {/* </a> */}
                  </TableCell>
                  <TableCell>
                    <IconLink icon={<DeleteIcon />} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {data.rows === null && data.loading === false ? (
        <div style={{ textAlign: "center", width: "100%" }}>
          Something Unexpected Happened
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
