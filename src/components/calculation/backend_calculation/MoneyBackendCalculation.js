import { MoneycalculationApi } from "../../../openapi/src/index"

export const getMoneyBackendCalculation = ( {newValue, oldValue, callback} ) => {
    new MoneycalculationApi().calcMoneyCalculation(newValue, oldValue, (error, data) => callback(error, data));
}