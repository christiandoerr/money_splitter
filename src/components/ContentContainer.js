import * as React from "react";
import Container from "@mui/material/Container";
import { InputAmount } from "./amount/InputAmount";
import { SubmitButton } from "./amount/SubmitButton";
import { MoneyTable } from "./table/MoneyTable";
import { DisplayAmount } from "./amount/DisplayAmount";
import { CalcRadioGroup } from "./CalcRadioGroup";
import { MoneyCalculation } from "./calculation/frontend_calculation/MoneyCalculation";
import { getMoneyBackendCalculation } from "./calculation/backend_calculation/MoneyBackendCalculation";
import { ErrorAlert } from "./amount/ErrorAlert";

export const ContentContainer = () => {
  const [actValue, setActValue] = React.useState(0.0);
  const [oldValue, setOldValue] = React.useState(0.0);
  const [inputValue, setInputValue] = React.useState(0.0);
  const [calcMode, setCalcMode] = React.useState("react");
  const [moneyData, setMoneyData] = React.useState(
    new MoneyCalculation(0.0, 0.0).getMoneyData()
  );

  const [isFailed, setIsFailed] = React.useState(false);
  const [calcError, setCalcError] = React.useState("");

  const calcMoneyData = (newValue, oldValue) => {
    setIsFailed(false);
    setCalcError("");
    try {
      if (calcMode === "backend") {
        getMoneyBackendCalculation({
          newValue,
          oldValue,
          callback: (error, data) => {
            if (error) {
              setIsFailed(true);
              setCalcError(JSON.parse(error.message).error_description);
              return;
            }
            setMoneyData(data.data);
          },
        });
      } else {
        setMoneyData(new MoneyCalculation(newValue, oldValue).getMoneyData());
      }
    } catch (error) {
      setIsFailed(true);
      setCalcError(error.message);
    }
  };

  const onSubmitClickHandler = () => {
    setOldValue(actValue);
    setActValue(inputValue);
    calcMoneyData(inputValue, actValue);
  };

  const onInputAmountChangeHandler = ({ target }) => {
    setInputValue(target.valueAsNumber);
  };

  const onRadioGroupChangeHandler = ({ target }) => {
    setCalcMode(target.value);
  };

  return (
    <Container maxWidth="md">
      <InputAmount
        value={actValue}
        onInputAmountChangeHandler={onInputAmountChangeHandler}
      ></InputAmount>
      <CalcRadioGroup
        onRadioGroupChange={onRadioGroupChangeHandler}
      ></CalcRadioGroup>
      <SubmitButton onClick={onSubmitClickHandler}></SubmitButton>
      <DisplayAmount displayValue={oldValue}></DisplayAmount>
      {!isFailed ? (
        <MoneyTable moneyData={moneyData}></MoneyTable>
      ) : (
        <ErrorAlert errorMessage={calcError}></ErrorAlert>
      )}
    </Container>
  );
};
