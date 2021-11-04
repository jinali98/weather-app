import { API_URL_LOCATION } from "../../config/config";
import { fetchData } from "../../utils/fetchdata";
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

export const fetchASyncWeatherData = (countryName) => {
  return async (dispatch) => {
    try {
      const url = `${API_URL_LOCATION}${countryName}&appid=23de14c96e3f808b747eec9f561cd9cc`;
      dispatch(startedFetchingWeatherData());

      const country = await fetchData(url);
      const {
        coord,
        dt,
        id,
        main: { temp, temp_min, temp_max, pressure, humidity },
        name,
        weather,
        wind: { speed },
      } = country;
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
      dispatch(fetchedWeatherData(weatherData));
    } catch (error) {
      dispatch(failedFetchingWeatherData(error.message));
    }
  };
};
