const convertToCelsius = function(fahrenheitTemp) {
  let celsius = (5 / 9) * (fahrenheitTemp - 32);

  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheit = ((9 / 5) * celsiusTemp + 32);

  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
