import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePageContainer from "../../components/home-page-container/home-page-container.component";
import { fetchASyncCountryListData } from "../../store/countryList/countryList.actions";
import { selectCountryList } from "../../store/countryList/countryList.selectors";

const HomePage = () => {
  const countryList = useSelector(selectCountryList);
  const dispatch = useDispatch();

  //pass stored country list to fetch weather data when the component mount
  useEffect(() => {
    dispatch(fetchASyncCountryListData(countryList));
  }, [countryList, dispatch]);

  return <HomePageContainer />;
};

export default HomePage;
