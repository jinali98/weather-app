import { API_URL_FORECAST } from "../../config/config";
import { fetchData } from "../../utils/fetchdata";
import { countryListActionTypes } from "./countryList.types";

export const addCountry = (country) => ({
  type: countryListActionTypes.ADD_COUNTRY,
  payload: country,
});
export const removeCountry = (country) => ({
  type: countryListActionTypes.REMOVE_COUNTRY,
  payload: country,
});
export const startedFetchingWeatherData = () => ({
  type: countryListActionTypes.START_FETCHING_COUNTRYlIST_DATA,
});

export const fetchedWeatherData = (weatherDataList) => ({
  type: countryListActionTypes.SUCCESS_FETCHING_COUNTRYlIST_DATA,
  payload: weatherDataList,
});

export const failedFetchingWeatherData = (errorMessage) => ({
  type: countryListActionTypes.FAIL_FETCHING_COUNTRYlIST_DATA,
  payload: errorMessage,
});

export const fetchASyncCountryListData = (countryList) => {
  return async (dispatch) => {
    try {
      dispatch(startedFetchingWeatherData());

      const countryDataList = await Promise.all(
        countryList.map((country) => {
          const lat = country.coord.lat;
          const lon = country.coord.lon;
          const url = `${API_URL_FORECAST}${lat}&lon=${lon}&exclude=hourly,current,minutely,alerts&appid=23de14c96e3f808b747eec9f561cd9cc`;
          return fetchData(url);
        })
      );

      dispatch(fetchedWeatherData(countryDataList));
    } catch (error) {
      dispatch(failedFetchingWeatherData(error.message));
    }
  };
};
