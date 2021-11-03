import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import DisplayCityWeather from "../../components/display-city-weather/display-city-weather.component";
import SearchBar from "../../components/search-bar/search-bar.component";

const SearchPage = ({ history }) => {
  return (
    <div>
      <CustomButton backButton onClick={() => history.goBack()}>
        &#8592;
      </CustomButton>
      <SearchBar />
      <DisplayCityWeather />
    </div>
  );
};

export default SearchPage;
