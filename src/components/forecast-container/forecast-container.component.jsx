import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../pages/not-found-page/not-found-page.component";
import { selectForecastUsingParam } from "../../store/countryList/countryList.selectors";
import Card from "../card/card.component";
import ForecastItem from "../forecast-item/forecast-item.component";
import WeatherDataItem from "../weather-data-item/weather-data-item.component";
import { ForecastWrapper } from "./forecast-container.styles";

const ForecastContainer = () => {
  const params = useParams();

  //pass the country name as the url parameter to go to the relevant country forecast page
  const forecastWeather = useSelector(selectForecastUsingParam(params.name));
  return (
    <>
      {forecastWeather ? (
        <Card>
          <WeatherDataItem
            current={forecastWeather.current}
            name={forecastWeather.name}
          />
          <ForecastWrapper>
            {forecastWeather.daily?.slice(0, 5).map((day) => (
              <ForecastItem key={day.dt} day={day} />
            ))}
          </ForecastWrapper>
        </Card>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default ForecastContainer;
