import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./History.scss";

// const createData = (paid, price, received) => ({
//   paid,
//   price,
//   received,
// });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const History = ({ refresh }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(JSON.parse(localStorage.getItem("abc") || "[]"));
  }, [refresh]);

  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ maxWidth: 920 }} aria-label="customized table">
        <TableHead className="table-main-row">
          <TableRow className="table-main-row">
            <StyledTableCell className="table-row">Paid</StyledTableCell>
            <StyledTableCell className="table-row" align="right">
              Price
            </StyledTableCell>
            <StyledTableCell className="table-row" align="right">
              Received
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.paid}>
              <StyledTableCell component="th" scope="row">
                {row.paid}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.received}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
