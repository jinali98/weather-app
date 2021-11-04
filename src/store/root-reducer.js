import { combineReducers } from "redux";
import countryListReducer from "./countryList/countryList.reducer";
import weatherReducer from "./weather/weather.reducer";

const rootReducer = combineReducers({
  searchedWeatherResult: weatherReducer,
  countryList: countryListReducer,
});

export default rootReducer;
