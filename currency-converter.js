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

getExchangeRate('USDRWF', 'USDSAR');
