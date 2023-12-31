import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const CalcRadioGroup = ( {onRadioGroupChange} ) => {
  return (
    <FormControl>
      <FormLabel>Berechnung &uuml;ber</FormLabel>
      <RadioGroup row defaultValue="react" onChange = {onRadioGroupChange}>
        <FormControlLabel value="react" control={<Radio />} label="React" />
        <FormControlLabel /*disabled*/ value="backend" control={<Radio />} label="Java Backend" />
      </RadioGroup>
    </FormControl>
  );
};
