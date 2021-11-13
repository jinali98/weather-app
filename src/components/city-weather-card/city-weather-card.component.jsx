import React from "react";
import { withRouter } from "react-router-dom";
import { icons } from "../../constant/icon";
import Card from "../card/card.component";
import {
  CardWrapper,
  Condition,
  CountryName,
  Humidity,
  Preassure,
  Temperature,
  WeatherImage,
  WindSpeed,
} from "./city-weather-card.styles";

const CityWeatherCard = ({ history, country }) => {
  const {
    current: { humidity, pressure, wind_speed, temp, weather },
    name,
    id,
  } = country;

  const { main } = weather[0];

  return (
    <Card weatherCard>
      <CardWrapper onClick={() => history.push(`/${name}`)}>
        <CountryName>{name}</CountryName>
        <WeatherImage src={icons[`${main}`]} alt="weather-icon" />
        <Temperature>{temp}</Temperature>
        <Condition>{main}</Condition>
        <Preassure>{pressure}</Preassure>
        <Humidity>{humidity}</Humidity>
        <WindSpeed>{wind_speed}</WindSpeed>
      </CardWrapper>
    </Card>
  );
};

export default withRouter(CityWeatherCard);
