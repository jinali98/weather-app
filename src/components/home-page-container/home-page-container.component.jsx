import React from "react";
import CityWeatherCard from "../city-weather-card/city-weather-card.component";
import AddCityCard from "../add-city-card/add-city-card.component";
import { HomeContentWrapper } from "./home-page-container.styles";
import {
  selectCountryListWeather,
} from "../../store/countryList/countryList.selectors";
import { useSelector } from "react-redux";

const HomePageContainer = () => {
  const countryListWeather = useSelector(selectCountryListWeather);
  return (
    <HomeContentWrapper>
      <AddCityCard />
      {countryListWeather?.map((country) => (
        <CityWeatherCard key={country.id} country={country} />
      ))}
    </HomeContentWrapper>
  );
};

export default HomePageContainer;
