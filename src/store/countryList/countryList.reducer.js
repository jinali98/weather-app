import { countryListActionTypes } from "./countryList.types";
import { addNewCountryToTheList } from "./countryList.utils";

const INITIAL_STATE = {
  countryList: [],
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
    default:
      return state;
  }
};

export default countryListReducer;
