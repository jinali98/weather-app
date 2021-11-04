import { weatherActionTypes } from "./weather.types";

export const startedFetchingWeatherData = () => ({
  type: weatherActionTypes.START_FETCHING_WEATHER_DATA,
});

export const fetchedWeatherData = (weatherData) => ({
  type: weatherActionTypes.SUCCESS_FETCHING_WEATHER_DATA,
  payload: weatherData,
});

export const failedFetchingWeatherData = (errorMessage) => ({
  type: weatherActionTypes.FAIL_FETCHING_WEATHER_DATA,
  payload: errorMessage,
});
