import { weatherActionTypes } from "./weather.types";
import { formatWeatherData } from "./weather.utils";

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: "",
  weatherInfor: null,
  isStartedFetching: false,
};
const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherActionTypes.START_FETCHING_WEATHER_DATA:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
        isStartedFetching: true,
      };
    case weatherActionTypes.SUCCESS_FETCHING_WEATHER_DATA:
      return {
        ...state,
        isLoading: false,
        isStartedFetching: false,
        errorMessage: "",
        weatherInfor: formatWeatherData(action.payload),
      };
    case weatherActionTypes.FAIL_FETCHING_WEATHER_DATA:
      return {
        ...state,
        isLoading: false,
        isStartedFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
