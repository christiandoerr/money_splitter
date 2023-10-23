import * as React from "react";
import Container from "@mui/material/Container";
import { InputAmount } from "./amount/InputAmount";
import { SubmitButton } from "./amount/SubmitButton";
import { MoneyTable } from "./table/MoneyTable";
import { DisplayAmount } from "./amount/DisplayAmount";

export const ContentContainer = () => {
  const [actValue, setActValue] = React.useState(0.0);
  const [oldValue, setOldValue] = React.useState(0.0);
  const [inputValue, setInputValue] = React.useState(0.0);

  const onSubmitClickHandler = () => {
    setOldValue(actValue);
    setActValue(inputValue);
  };

  const onInputAmountChangeHandler = ({target}) => {
    setInputValue(target.valueAsNumber);
  };

  return (
    <Container maxWidth="md">
      <InputAmount
        value={actValue}
        onInputAmountChangeHandler={onInputAmountChangeHandler}
      ></InputAmount>
      <SubmitButton onClick={onSubmitClickHandler}></SubmitButton>
      <DisplayAmount displayValue={oldValue}></DisplayAmount>
      <MoneyTable newValue={actValue} oldValue={oldValue}></MoneyTable>
    </Container>
  );
};
