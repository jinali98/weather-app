import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addCountry } from "../../store/countryList/countryList.actions";
import { selectWeatherInfo } from "../../store/weather/weather.selectors";

const DisplayCityWeather = ({ weatherInfo, addCountry }) => {
  const addCountryHandler = () => {
    const { name, id, coord } = weatherInfo;
    addCountry({ name, id, coord });
  };

  return (
    <>
      {/* if there is a city show weather data. add a background image  display data on it*/}
      {weatherInfo && (
        <div>
          <p>{weatherInfo.name}</p>
          <div>icon</div>
          <p>{weatherInfo.main.temp}</p>
          <p>{weatherInfo.condition}</p>
          <div>
            <p>{`min ${weatherInfo.main.temp_min}`}</p>
            <p>{`max ${weatherInfo.main.temp_max}`}</p>
          </div>
          <button onClick={addCountryHandler}>add country</button>
        </div>
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
