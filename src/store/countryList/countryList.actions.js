import { countryListActionTypes } from "./countryList.types";

export const addCountry = (country) => ({
  type: countryListActionTypes.ADD_COUNTRY,
  payload: country,
});
export const removeCountry = (country) => ({
  type: countryListActionTypes.REMOVE_COUNTRY,
  payload: country,
});
