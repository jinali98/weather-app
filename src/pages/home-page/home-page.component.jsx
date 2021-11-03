import { Route } from "react-router-dom";
import HomePageContainer from "../../components/home-page-container/home-page-container.component";
import ForecastPage from "../forecast-page/forecast-page.component";

const HomePage = ({ match }) => {
  console.log(match);
  return <HomePageContainer />;
};

export default HomePage;
