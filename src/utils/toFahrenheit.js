const toFahrenheit = (cValue) => {
  let fahrenheitValue = (cValue * (9 / 5) + 32).toFixed(2);
  return fahrenheitValue;
};

export default toFahrenheit;
