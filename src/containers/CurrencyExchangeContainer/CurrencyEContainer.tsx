import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { CurrencyState, CurrencyType } from '../../redux/currencyReducer';
import { Dispatch } from 'redux';
import {
    changeCurrencyAC,
    setActionAC,
    setCurrencyAmountAC

} from '../../redux/actions';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from "../../redux/state";
interface IRootState extends IGlobalState{}


export const CurrencyEContainer: React.FC = () => {

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
    } = useSelector((state:IRootState)=>state.currency)
    let dispatch = useDispatch();

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                   dispatch(setCurrencyAmountAC(value, value))
                } else {
                  dispatch( setCurrencyAmountAC(value, (+Number(value).toFixed(2) / currencyRate)
                      .toFixed(2))) ;
                }
            } else {
                if (value === '') {
                  dispatch(setCurrencyAmountAC(value, value))
                } else {
                   dispatch(setCurrencyAmountAC((+Number(value).toFixed(2) * currencyRate)
                       .toFixed(2), value))
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy'
            ? dispatch(setActionAC(true) )
            : dispatch(setActionAC(false))
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(changeCurrencyAC(e.currentTarget.dataset.currency))
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};



