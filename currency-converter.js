//https://currencylayer.com/dashboard
//https://restcountries.eu/rest/v2/currency/
const axios = require('axios');

const getExchangeRate = (fromCurrency, toCurrency) => {
    axios.get('http://apilayer.net/api/live?access_key=884773bb76e704548d026928debd1ab3&format=1').then((response) => {
         const rate = response.data.quotes;
         
         console.log(rate);

    });
  
}

getExchangeRate('USD', 'EUR');
