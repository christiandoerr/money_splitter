export const getAmount = (moneyUnit, value) => {
  if (value < 0.0) {
    throw new Error("Value must be greater or equal than zero!");
  }
  if (value === "undefined" || moneyUnit === "undefined") {
    throw new Error("Value or moneyunit is undefined!");
  }
  if (isNaN(value) || isNaN(moneyUnit)) {
    throw new Error("Value or moneyunit is not a number!");
  }
  return Math.floor(value / moneyUnit);
};

export const getDifference = (moneyUnit, oldValue, newValue) => {
  return getAmount(moneyUnit, oldValue) - getAmount(moneyUnit, newValue);
};

export const getCurrency = (number) => {
  return number.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
};
