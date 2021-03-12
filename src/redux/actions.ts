export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

//export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;
export type CRT = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType ;
export type ChangeCurrencyFieldType = {
    type: typeof ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
    payload:test
}

type test = {
    amountOfBYN: string
    amountOfCurrency: string
}

export const setCurrencyAmountAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload:{
            amountOfBYN,
            amountOfCurrency
        }
    }
};

export type ChangeAction = {
    type: typeof ACTIONS_TYPE.CHANGE_CHANGE_ACTION
    isBuying: boolean
};

export const setActionAC = (isBuying: boolean): ChangeAction => {
    return {
        type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        isBuying
    }
};

export type ChangeCurrentCurrencyType = {
    type: typeof ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
    currentCurrency:string
};

export const changeCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return{
        type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        currentCurrency
    }
};

