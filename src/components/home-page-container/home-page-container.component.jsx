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

const HomePageContainer = ({ countryList, countries }) => {
  return (
    <HomeContentWrapper>
      <AddCityCard />
      {countryList?.map((country, index) => (
        <CityWeatherCard
          key={countries[index].id}
          country={country}
          otherProps={countries[index]}
        />
      ))}
    </HomeContentWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  countryList: selectCountryListWeather,
  countries: selectCountryList,
});

export default connect(mapStateToProps)(HomePageContainer);
