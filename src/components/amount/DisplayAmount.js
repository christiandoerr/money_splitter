import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export const DisplayAmount = ({ title, displayValue }) => {
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">
        Vorheriger Geldbetrag
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">€</InputAdornment>}
        label={title}
        readOnly={true}
        autoFocus={true}
        type="number"
        value={displayValue}
        sx={{ right: 8 }}
      />
    </FormControl>
  );
};
