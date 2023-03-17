//Fetching Value for the exchange

/* fetch("https://api.currencyapi.io/latest?access_key=guyPvOWWKfSU1r1qfYmiEZ9JTSFdS8WIl6IESPlz&symbols=INR&format=1")
  .then(response => response.json())
  .then(data => {
    const usdToInr = data.rates.INR;
    console.log(`1 USD = ${usdToInr} INR`);

  })
  .catch(error => console.error(error));
*/
fetch("https://api.currencyapi.com/v3/latest?apikey=guyPvOWWKfSU1r1qfYmiEZ9JTSFdS8WIl6IESPlz")
  .then(response => response.json())
  .then(data => {
    const usdToInr = data.data.INR.value;
    const valueDiv = document.getElementById("value");
    valueDiv.innerHTML = `1 USD = ${usdToInr} INR`;
  })
  .catch(error => console.error(error));

/* fetch("https://openexchangerates.org/api/latest.json?app_id=ca41026bb2664c7cba27ccf0be55ff3f&symbols=INR")
  .then(response => response.json())
  .then(data => {
    const usdToInr = data.rates.INR;
    const valueDiv = document.getElementById("value");
    valueDiv.innerHTML = `1 USD = ${usdToInr} INR`;
  })
  .catch(error => console.error(error));
*/