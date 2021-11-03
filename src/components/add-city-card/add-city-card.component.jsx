import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../card/card.component";
import CustomButton from "../custom-button/custom-button.component";
import { CardText, ContentWrapper } from "./add-city-card.styles";

const AddCityCard = ({ history, match }) => {
  return (
    <Card addCity>
      <ContentWrapper>
        <CardText>Add A City</CardText>
        <CustomButton
          addCardButton
          onClick={() => history.push(`${match.url}search`)}
        >
          &#10010;
        </CustomButton>
      </ContentWrapper>
    </Card>
  );
};

export default withRouter(AddCityCard);
