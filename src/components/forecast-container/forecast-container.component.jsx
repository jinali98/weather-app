import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectForecastUsingParam } from "../../store/countryList/countryList.selectors";
import Card from "../card/card.component";
import ForecastItem from "../forecast-item/forecast-item.component";
import WeatherDataItem from "../weather-data-item/weather-data-item.component";

const ForecastContainer = () => {
  const params = useParams();

  //pass the country name as the url parameter to go to the relevant country forecast page
  const forecastWeather = useSelector(selectForecastUsingParam(params.name));
  return (
    <Card>
      <WeatherDataItem
        current={forecastWeather.current}
        name={forecastWeather.name}
      />
      <div>
        {forecastWeather.daily?.slice(0, 5).map((day) => (
          <ForecastItem key={day.dt} day={day} />
        ))}
      </div>
    </Card>
  );
};

export default ForecastContainer;
