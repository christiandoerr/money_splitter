import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export const SubmitButton = ({ onClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={onClick}
        size="large"
        fullWidth={true}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Best&auml;tigen
      </Button>
    </Stack>
  );
};
