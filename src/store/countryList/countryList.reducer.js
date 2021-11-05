import { countryListActionTypes } from "./countryList.types";
import {
  addNewCountryToTheList,
  formatCountryListWeather,
} from "./countryList.utils";

const INITIAL_STATE = {
  countryList: [],
  countryListWeatherData: [],
  isStartedFetching: false,
  isLoading: false,
  errorMessage: "",
};

const countryListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countryListActionTypes.ADD_COUNTRY:
      return {
        ...state,
        countryList: addNewCountryToTheList(action.payload, state.countryList),
      };
    case countryListActionTypes.REMOVE_COUNTRY:
      return {
        ...state,
      };
    case countryListActionTypes.START_FETCHING_COUNTRYlIST_DATA:
      return {
        ...state,
        isLoading: true,
        isStartedFetching: true,
      };
    case countryListActionTypes.SUCCESS_FETCHING_COUNTRYlIST_DATA:
      return {
        ...state,
        isLoading: false,
        isStartedFetching: false,
        countryListWeatherData: formatCountryListWeather(
          action.payload,
          state.countryList
        ),
      };
    case countryListActionTypes.FAIL_FETCHING_COUNTRYlIST_DATA:
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

export default countryListReducer;

//update the same country list with new data. append new forecast and weatherdata to each country
