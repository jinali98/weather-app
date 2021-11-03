import React from "react";
import Card from "../card/card.component";
import ForecastItem from "../forecast-item/forecast-item.component";
import WeatherDataItem from "../weather-data-item/weather-data-item.component";

const ForecastContainer = () => {
  return (
    <Card>
      <WeatherDataItem />
      <div>
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </div>
    </Card>
  );
};

export default ForecastContainer;
