import { weatherActionTypes } from "./weather.types";

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: "",
  weatherInfor: {},
};
const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case weatherActionTypes.START_FETCHING_WEATHER_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case weatherActionTypes.SUCCESS_FETCHING_WEATHER_DATA:
      return {
        ...state,
        isLoading: false,
        weatherInfor: action.payload,
      };
    case weatherActionTypes.FAIL_FETCHING_WEATHER_DATA:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
