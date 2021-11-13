import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Card from "../../components/card/card.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import DisplayCityWeather from "../../components/display-city-weather/display-city-weather.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import withSpinner from "../../hoc/withSpinner.component";
import {
  selectIsLoading,
  selectIsStartedFetching,
} from "../../store/weather/weather.selectors";
import { SearchContentWrapper, SearchPageWrapper } from "./search-page.styles";

//use withSpinner HOC to display spinner while fetching data from the API
const DisplayCityWithSpinner = withSpinner(DisplayCityWeather);

const SearchPage = ({ history, isLoading, isStartedFetching }) => {
  return (
    <SearchPageWrapper>
      <CustomButton backButton onClick={() => history.goBack()}>
        &#8592;
      </CustomButton>
      <SearchContentWrapper>
        <SearchBar />
        <Card searchResultCard>
          <DisplayCityWithSpinner
            isLoading={isLoading}
            isStartedFetching={isStartedFetching}
          />
        </Card>
      </SearchContentWrapper>
    </SearchPageWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  isStartedFetching: selectIsStartedFetching,
});
export default connect(mapStateToProps)(SearchPage);
