import React from "react";
import DisplayCityWeather from "../../components/display-city-weather/display-city-weather.component";
import SearchBar from "../../components/search-bar/search-bar.component";

const SearchPage = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.goBack()}>go back</button>
      <SearchBar />
      <DisplayCityWeather />
    </div>
  );
};

export default SearchPage;
