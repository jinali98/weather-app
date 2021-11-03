import React from "react";
import CityWeatherCard from "../city-weather-card/city-weather-card.component";
import AddCityCard from "../add-city-card/add-city-card.component";
import { HomeContentWrapper } from "./home-page-container.styles";

const HomePageContainer = () => {
  return (
    <HomeContentWrapper>
      <AddCityCard />
      <CityWeatherCard />
      <CityWeatherCard />
      <CityWeatherCard />
    </HomeContentWrapper>
  );
};

export default HomePageContainer;
