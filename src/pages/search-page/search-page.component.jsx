import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/card.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import DisplayCityWeather from "../../components/display-city-weather/display-city-weather.component";
import SearchCard from "../../components/search-card/search-card.component";
import withSpinner from "../../hoc/withSpinner.component";
import {
  selectIsLoading,
  selectIsStartedFetching,
} from "../../store/weather/weather.selectors";
import { SearchContentWrapper, SearchPageWrapper } from "./search-page.styles";

//use withSpinner HOC to display loading spinner while fetching data from the API
const DisplayCityWithSpinner = withSpinner(DisplayCityWeather);

const SearchPage = () => {
  const history = useHistory();
  const isLoading = useSelector(selectIsLoading);
  const isStartedFetching = useSelector(selectIsStartedFetching);

  return (
    <SearchPageWrapper>
      <CustomButton backButton onClick={() => history.goBack()}>
        &#8592;
      </CustomButton>
      <SearchContentWrapper>
        <SearchCard />
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

export default SearchPage;
