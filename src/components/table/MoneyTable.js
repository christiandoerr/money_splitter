import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MoneyTableBody } from "./MoneyTableBody";

export const MoneyTable = ({ moneyData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow key="-1">
            <TableCell>Schein/M&uuml;nze</TableCell>
            <TableCell>Anzahl</TableCell>
            <TableCell>Differenz</TableCell>
            <TableCell>Vorherige Anzahl</TableCell>
          </TableRow>
        </TableHead>
        <MoneyTableBody moneyData={moneyData}></MoneyTableBody>
      </Table>
    </TableContainer>
  );
};
