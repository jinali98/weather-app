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
import CustomButton from "../custom-button/custom-button.component";
import { Temperature, Title, WeatherItem } from "./display-city-weather.styles";

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
          <Title>{weatherInfo.name}</Title>
          <WeatherImage
            src={icons[`${weatherInfo.condition}`]}
            alt="weather-icon"
          />
          <Temperature>{weatherInfo.main.temp} ℃</Temperature>
          <WeatherItem>{weatherInfo.condition}</WeatherItem>
          <div>
            <WeatherItem>{`Min : ${weatherInfo.main.temp_min} ℃`}</WeatherItem>
            <WeatherItem>{`Max : ${weatherInfo.main.temp_max} ℃`}</WeatherItem>
          </div>
          {!isInTheList ? (
            <CustomButton onClick={addCountryHandler}>
              Add To Favourite
            </CustomButton>
          ) : (
            <CustomButton onClick={removeCountryHandler}>Remove</CustomButton>
          )}
        </CardWrapper>
      )}
    </>
  );
};

export default DisplayCityWeather;
