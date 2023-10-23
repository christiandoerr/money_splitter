import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export const InputAmount = ({ title, value, onInputAmountChangeHandler }) => {
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Geldbetrag</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">€</InputAdornment>}
        label={title}
        readOnly={false}
        autoFocus={true}
        type="number"
        onChange={onInputAmountChangeHandler}
        defaultValue={value}
        sx={{ right: 8 }}
      />
    </FormControl>
  );
};
