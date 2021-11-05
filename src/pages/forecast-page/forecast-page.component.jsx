import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import ForecastContainer from "../../components/forecast-container/forecast-container.component";
import { ForecastPageContainer } from "./forecast-page.styles";

const ForecastPage = ({ history, match }) => {
  console.log(match.params.name);
  return (
    <ForecastPageContainer>
      <CustomButton backButton onClick={() => history.goBack()}>
        &#8592;
      </CustomButton>
      <ForecastContainer />
    </ForecastPageContainer>
  );
};

export default ForecastPage;
