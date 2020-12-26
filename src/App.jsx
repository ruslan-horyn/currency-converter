import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function App() {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [formCurrency, setFormCurrency] = useState(0);
	const [toCurrency, setToCurrency] = useState(0);
	const [exchangeRate, setExchangeRate] = useState(0);
	const [amount, setAmount] = useState(1);
	const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
	const [time, setTime] = useState('');

	let toAmount, fromAmout;
	if (amountInFromCurrency) {
		fromAmout = amount;
		toAmount = fromAmout * exchangeRate;
	} else {
		toAmount = amount;
		fromAmout = toAmount / exchangeRate;
	}

	useEffect(() => {
		fetch(BASE_URL)
			.then(res => res.json())
			.then(data => {
				const firstCurrency = Object.keys(data.rates)[0];
				setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
				setFormCurrency(data.base);
				setToCurrency(firstCurrency);
				setExchangeRate(data.rates[firstCurrency]);
				setTime(data.date);
			});
	}, []);

	useEffect(() => {
		if (formCurrency !== 0 && toCurrency !== 0) {
			fetch(`${BASE_URL}?base=${formCurrency}&symbols=${toCurrency}`)
				.then(res => res.json())
				.then(data => setExchangeRate(data.rates[toCurrency]));
		}
	}, [formCurrency, toCurrency]);

	const onChangeFromCurrency = e => setFormCurrency(e.target.value);
	const onChangeToCurrency = e => setToCurrency(e.target.value);

	const handleFromAmountChange = e => {
		setAmount(e.target.value);
		setAmountInFromCurrency(true);
	};
	const handleToAmountChange = e => {
		setAmount(e.target.value);
		setAmountInFromCurrency(false);
	};
	return (
		<>
			<h2>Convert</h2>
			<p>The last date update: {time}</p>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={formCurrency}
				onChangeCurrency={onChangeFromCurrency}
				amount={fromAmout}
				onChangeAmount={handleFromAmountChange}
			/>
			<div className='equals'>=</div>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={toCurrency}
				onChangeCurrency={onChangeToCurrency}
				amount={toAmount}
				onChangeAmount={handleToAmountChange}
			/>
		</>
	);
}

export default App;
