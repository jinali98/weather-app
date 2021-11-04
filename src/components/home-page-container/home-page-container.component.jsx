import React from "react";
import CityWeatherCard from "../city-weather-card/city-weather-card.component";
import AddCityCard from "../add-city-card/add-city-card.component";
import { HomeContentWrapper } from "./home-page-container.styles";
import { createStructuredSelector } from "reselect";
import {
  selectCountryList,
  selectCountryListWeather,
} from "../../store/countryList/countryList.selectors";
import { connect } from "react-redux";

const HomePageContainer = ({ countryList }) => {
  return (
    <HomeContentWrapper>
      <AddCityCard />
      {countryList?.map((country) => (
        <CityWeatherCard key={country.id} country={country} />
      ))}
    </HomeContentWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  countryList: selectCountryListWeather,
});

export default connect(mapStateToProps)(HomePageContainer);
