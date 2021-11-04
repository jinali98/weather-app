import { combineReducers } from "redux";
import weatherReducer from "./weather/weather.reducer";

const rootReducer = combineReducers({
  searchedWeatherResult: weatherReducer,
});

export default rootReducer;
