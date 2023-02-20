import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { convertText } from "../../utils/CamelCaseToSimpleText";
function makeArrayOfRoles(roleSet) {
  var str = "[";
  console.log(roleSet);
  roleSet.map((item, idx) => {
    str += item.name + (idx === roleSet.length - 1 ? "" : ",");
  });
  str += "]";
  return str;
}
function UsersTable(props) {
  const [tableColumnHeading, setTableColumnHeading] = useState([]);

  useEffect(() => {
    setTableColumnHeading([]);
    if (props.data != null && props.data.length > 0) {
      Object.keys(props.data[0]).map((element) => {
        setTableColumnHeading((state) => {
          return [...state, convertText(element)];
        });
      });
    }
  }, []);
  return (
    <TableContainer component={Paper}>
      <TableHead>
        <TableRow>
          {tableColumnHeading.map((element) => {
            return (
              <TableCell key={element}>
                <h3>{element}</h3>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((user) => {
          return (
            <TableRow key={user.id}>
              {Object.entries(user).map(([key, value]) => {
                switch (key) {
                  case "photos": {
                    return (
                      <TableCell key={key}>
                        {value !== null ? (
                          <img
                            src={value}
                            style={{ maxHeight: "200px" }}
                            alt="no image found"
                          ></img>
                        ) : (
                          <img
                            src={
                              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                            }
                            style={{ maxHeight: "200px", maxWidth: "200px" }}
                            alt="no image found"
                          ></img>
                        )}
                      </TableCell>
                    );
                  }
                  case "roleSet": {
                    return (
                      <TableCell key={key}>{makeArrayOfRoles(value)}</TableCell>
                    );
                  }
                  default:
                    return (
                      <TableCell key={key}>{JSON.stringify(value)}</TableCell>
                    );
                }
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
}

export default UsersTable;
