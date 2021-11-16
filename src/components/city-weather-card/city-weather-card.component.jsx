import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { icons } from "../../constant/icon";
import { removeCountry } from "../../store/countryList/countryList.actions";
import Card from "../card/card.component";
import CustomButton from "../custom-button/custom-button.component";
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

const CityWeatherCard = ({ country }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    current: { humidity, pressure, wind_speed, temp, weather },
    name,
    id,
  } = country;

  const { main } = weather[0];

  return (
    <Card weatherCard>
      <CardWrapper>
        <CountryName>{name}</CountryName>
        <WeatherImage src={icons[`${main}`]} alt="weather-icon" />
        <Temperature>{temp}℃</Temperature>
        <Condition>{main}</Condition>
        <Preassure>{pressure}hPa</Preassure>
        <Humidity>{humidity}%</Humidity>
        <WindSpeed>{wind_speed} meter/sec</WindSpeed>
        <CustomButton onClick={() => history.push(`/${name}`)}>
          View Forecast
        </CustomButton>
        <CustomButton onClick={() => dispatch(removeCountry(country))}>
          Remove
        </CustomButton>
      </CardWrapper>
    </Card>
  );
};

export default CityWeatherCard;
