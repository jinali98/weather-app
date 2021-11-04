import { createSelector } from "reselect";

const selectSearchWeatherResult = (state) => state.searchedWeatherResult;

export const selectIsLoading = createSelector(
  [selectSearchWeatherResult],
  (weather) => weather.isLoading
);
export const selectIsStartedFetching = createSelector(
  [selectSearchWeatherResult],
  (weather) => weather.isStartedFetching
);
export const selectWeatherInfo = createSelector(
  [selectSearchWeatherResult],
  (weather) => weather.weatherInfor
);
