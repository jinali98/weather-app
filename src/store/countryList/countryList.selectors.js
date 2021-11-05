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

//get the country name or id
//select the country obj with the same name from the country list
