const toCelcius = (fValue) => {
  let celciusValue = (((fValue - 32) * 5) / 9).toFixed(2);

  return celciusValue;
};

export default toCelcius;
