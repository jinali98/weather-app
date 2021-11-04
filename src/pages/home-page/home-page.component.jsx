import { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import HomePageContainer from "../../components/home-page-container/home-page-container.component";
import { fetchASyncCountryListData } from "../../store/countryList/countryList.actions";
import { selectCountryList } from "../../store/countryList/countryList.selectors";
import ForecastPage from "../forecast-page/forecast-page.component";

const HomePage = ({ match, fetchCountryData, countryList }) => {
  useEffect(() => {
    fetchCountryData(countryList);
  }, [countryList]);
  return <HomePageContainer />;
};

const mapStateToProps = createStructuredSelector({
  countryList: selectCountryList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountryData: (countryList) =>
    dispatch(fetchASyncCountryListData(countryList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
