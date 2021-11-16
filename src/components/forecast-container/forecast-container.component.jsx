import React from "react";
import { connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectForecastUsingParam } from "../../store/countryList/countryList.selectors";
import Card from "../card/card.component";
import ForecastItem from "../forecast-item/forecast-item.component";
import WeatherDataItem from "../weather-data-item/weather-data-item.component";

const ForecastContainer = ({ match }) => {
  //pass the country name as the url parameter to go to the relevant country forecast page
  const forecastWeather = useSelector(
    selectForecastUsingParam(match.params.name)
  );
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

// const mapStateToProps = (state, ownProps) => ({
//   forecastWeather: selectForecastUsingParam(ownProps.match.params.name)(state),
// });

export default withRouter(ForecastContainer);
