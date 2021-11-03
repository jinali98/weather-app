import React from "react";
import ForecastItem from "../forecast-item/forecast-item.component";
import WeatherDataItem from "../weather-data-item/weather-data-item.component";

const ForecastContainer = () => {
  return (
    <div>
      <WeatherDataItem />
      <div>
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </div>
    </div>
  );
};

export default ForecastContainer;
