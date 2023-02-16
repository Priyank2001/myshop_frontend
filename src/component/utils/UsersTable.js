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
    <div>
      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            {tableColumnHeading.map((element) => {
              return (
                <TableCell>
                  <h3>{element}</h3>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((user) => {
            return (
              <TableRow>
                {Object.entries(user).map(([key, value]) => {
                  return <TableCell>{JSON.stringify(value)}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </div>
  );
}

export default UsersTable;
