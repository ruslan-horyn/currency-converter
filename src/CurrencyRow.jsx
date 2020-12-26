import React from 'react';

export default function CurrencyRow({
	currencyOptions,
	selectedCurrency,
	onChangeCurrency,
	amount,
	onChangeAmount,
}) {
	const options = currencyOptions.sort().map(option => (
		<option key={option} value={option}>
			{option}
		</option>
	));
	return (
		<div>
			<input
				type='number'
				className='input'
				value={amount}
				onChange={onChangeAmount}
			/>
			<select onChange={onChangeCurrency} value={selectedCurrency}>
				{options}
			</select>
		</div>
	);
}
