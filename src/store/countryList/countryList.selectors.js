import { createSelector } from "reselect";

const selectCountryListState = (state) => state.countryList;

export const selectCountryList = createSelector(
  [selectCountryListState],
  (countryList) => countryList.countryList
);
export const selectCountryListWeather = createSelector(
  [selectCountryListState],
  (countryList) => countryList.countryListWeatherData
);
