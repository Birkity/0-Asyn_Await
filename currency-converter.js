//https://currencylayer.com/dashboard
//https://restcountries.eu/rest/v2/currency/
const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
    const response =  await axios.get('http://apilayer.net/api/live?access_key=884773bb76e704548d026928debd1ab3&format=1');
    const rate = response.data.quotes;
    const euro = 1/ rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    
    return exchangeRate;
  
}

const getCountries = async (toCurrency) => {
    const response = await axios.get(`http://api.countrylayer.com/v2/currency/${toCurrency}?access_key=e56c9c079a5e98e501aca2748f9a88d1`);
    //console.log(response.data);
    return response.data.map(country => country.name);
}

getCountries('AFN');