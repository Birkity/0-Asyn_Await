# 0-Asyn_Await
This repository contains a currency converter application built with Node.js. The application uses the Axios library to make HTTP requests to two APIs: CurrencyLayer and RestCountries.
Currency Converter Application
This is a currency converter application built with Node.js. It uses the Axios library to make HTTP requests to two APIs: CurrencyLayer and RestCountries.

#Features
- Fetches the exchange rate between two specified currencies from the CurrencyLayer API.
- Fetches the countries where the target currency is used from the RestCountries API.
- Converts an amount from one currency to another and lists the countries where the converted currency can be spent.
#How to Use
- Install the required dependencies by running npm install.
- Call the convertCurrency function with the following parameters:
- fromCurrency: The currency you want to convert from.
- toCurrency: The currency you want to convert to.
- amount: The amount of money you want to convert.
The function will return a promise that resolves to a string containing the converted amount and the countries where the converted currency can be spent.
#Error Handling
The application throws an error if it's unable to fetch the exchange rate or the countries for the specified currencies.
