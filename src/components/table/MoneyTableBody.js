import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const MoneyTableBody = ({ moneyData }) => {

  const getDisplayDifference = (value) => {
    return value > 0.0 ? "+" + value : value;
  }

  return (
    <TableBody>
      {moneyData.map((moneyDataRow, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="right">{moneyDataRow.moneyUnitFormatted}</TableCell>
          <TableCell align="right">{moneyDataRow.newAmount}</TableCell>
          <TableCell align="right">{getDisplayDifference(moneyDataRow.difference)}</TableCell>
          <TableCell align="right">{moneyDataRow.oldAmount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
