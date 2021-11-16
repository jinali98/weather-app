import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "../../constant/icon";
import {
  addCountry,
  removeCountry,
} from "../../store/countryList/countryList.actions";
import { selectIsInTheList } from "../../store/countryList/countryList.selectors";
import { selectWeatherInfo } from "../../store/weather/weather.selectors";
import {
  CardWrapper,
  WeatherImage,
} from "../city-weather-card/city-weather-card.styles";

const DisplayCityWeather = () => {
  const weatherInfo = useSelector(selectWeatherInfo);
  const dispatch = useDispatch();
  const isInTheList = useSelector(selectIsInTheList(weatherInfo?.id));

  //add country to the list of selected countries
  const addCountryHandler = () => {
    const { name, id, coord } = weatherInfo;
    dispatch(addCountry({ name, id, coord }));
  };
  const removeCountryHandler = () => {
    dispatch(removeCountry(weatherInfo));
  };

  return (
    <>
      {/* if there is a city show weather data. add a background image  display data on it*/}
      {weatherInfo && (
        <CardWrapper>
          <p>{weatherInfo.name}</p>
          <WeatherImage
            src={icons[`${weatherInfo.condition}`]}
            alt="weather-icon"
          />
          <p>{weatherInfo.main.temp}</p>
          <p>{weatherInfo.condition}</p>
          <div>
            <p>{`min ${weatherInfo.main.temp_min}`}</p>
            <p>{`max ${weatherInfo.main.temp_max}`}</p>
          </div>
          {!isInTheList ? (
            <button onClick={addCountryHandler}>add country</button>
          ) : (
            <button onClick={removeCountryHandler}>remove</button>
          )}
        </CardWrapper>
      )}
    </>
  );
};

export default DisplayCityWeather;
