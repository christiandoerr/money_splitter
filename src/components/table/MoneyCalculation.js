import { MoneyUnits } from "./MoneyUnits";
import { getAmount, getDifference, getCurrency } from "./MoneyUtils";

export class MoneyCalculation {
  constructor(newValue, oldValue) {
    this.newValue = newValue;
    this.oldValue = oldValue;
  }

  getMoneyData() {
    const rows = MoneyUnits.map((moneyUnit) => {
      const row = {
        moneyUnitFormatted: getCurrency(moneyUnit),
        newAmount: getAmount(moneyUnit, this.newValue),
        oldAmount: getAmount(moneyUnit, this.oldValue),
        difference: getDifference(moneyUnit, this.newValue, this.oldValue),
      };

      this.newValue = (this.newValue % moneyUnit).toFixed(2);
      this.oldValue = (this.oldValue % moneyUnit).toFixed(2);

      return row;
    });

    return rows;
  }
}
