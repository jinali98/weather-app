import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomePageContainer from "../../components/home-page-container/home-page-container.component";
import { fetchASyncCountryListData } from "../../store/countryList/countryList.actions";
import { selectCountryList } from "../../store/countryList/countryList.selectors";

const HomePage = ({ match, fetchCountryData, countryList }) => {
  //pass stored country list to fetch weather data when the component mount
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
