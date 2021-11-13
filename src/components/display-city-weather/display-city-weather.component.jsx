import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { icons } from "../../constant/icon";
import { addCountry } from "../../store/countryList/countryList.actions";
import { selectWeatherInfo } from "../../store/weather/weather.selectors";
import {
  CardWrapper,
  WeatherImage,
} from "../city-weather-card/city-weather-card.styles";

const DisplayCityWeather = ({ weatherInfo, addCountry }) => {
  const addCountryHandler = () => {
    const { name, id, coord } = weatherInfo;
    addCountry({ name, id, coord });
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
          <button onClick={addCountryHandler}>add country</button>
        </CardWrapper>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  weatherInfo: selectWeatherInfo,
});

const mapDispatchToProps = (dispatch) => ({
  addCountry: (country) => dispatch(addCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCityWeather);
