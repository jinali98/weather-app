import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import DisplayCityWeather from "../../components/display-city-weather/display-city-weather.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import { SearchContentWrapper, SearchPageWrapper } from "./search-page.styles";

const SearchPage = ({ history }) => {
  return (
    <SearchPageWrapper>
      <CustomButton backButton onClick={() => history.goBack()}>
        &#8592;
      </CustomButton>
      <SearchContentWrapper>
        <SearchBar />
        <DisplayCityWeather />
      </SearchContentWrapper>
    </SearchPageWrapper>
  );
};

export default SearchPage;
