export const formatWeatherData = (data) => {
  const {
    coord,
    dt,
    id,
    main: { temp, temp_min, temp_max, pressure, humidity },
    name,
    weather,
    wind: { speed },
  } = data;

  const { main } = weather[0];
  const weatherData = {
    coord,
    dt,
    id,
    main: { temp, temp_min, temp_max, pressure, humidity },
    name,
    condition: main,
    wind: { speed },
  };

  return weatherData;
};
