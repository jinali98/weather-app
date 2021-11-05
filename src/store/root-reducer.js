import { combineReducers } from "redux";
import countryListReducer from "./countryList/countryList.reducer";
import weatherReducer from "./weather/weather.reducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "countryList",
  storage,
  whitelist: ["countryList"],
};

const rootReducer = combineReducers({
  searchedWeatherResult: weatherReducer,
  countryList: countryListReducer,
});

export default persistReducer(persistConfig, rootReducer);
