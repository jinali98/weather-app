import React from "react";
import ForecastContainer from "../../components/forecast-container/forecast-container.component";

const ForecastPage = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.goBack()}>go back</button>
      <ForecastContainer />
    </div>
  );
};

export default ForecastPage;
