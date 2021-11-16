import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomePageContainer from "../../components/home-page-container/home-page-container.component";
import { fetchASyncCountryListData } from "../../store/countryList/countryList.actions";
import { selectCountryList } from "../../store/countryList/countryList.selectors";

const HomePage = ({ match }) => {
  const countryList = useSelector(selectCountryList);
  const dispatch = useDispatch();

  //pass stored country list to fetch weather data when the component mount
  useEffect(() => {
    dispatch(fetchASyncCountryListData(countryList));
  }, [countryList, dispatch]);

  return <HomePageContainer />;
};

// const mapStateToProps = createStructuredSelector({
//   countryList: selectCountryList,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchCountryData: (countryList) =>
//     dispatch(fetchASyncCountryListData(countryList)),
// });

export default HomePage;
