import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectForecastUsingParam } from "../../store/countryList/countryList.selectors";
import Card from "../card/card.component";
import ForecastItem from "../forecast-item/forecast-item.component";
import WeatherDataItem from "../weather-data-item/weather-data-item.component";

const ForecastContainer = ({ match, forecastWeather }) => {
  console.log(forecastWeather);
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

const mapStateToProps = (state, ownProps) => ({
  forecastWeather: selectForecastUsingParam(ownProps.match.params.name)(state),
});

export default withRouter(connect(mapStateToProps)(ForecastContainer));
