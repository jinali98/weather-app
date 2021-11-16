import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Card from "../card/card.component";
import CustomButton from "../custom-button/custom-button.component";
import { CardText, ContentWrapper } from "./add-city-card.styles";

const AddCityCard = () => {
  const history = useHistory();
  const match = useRouteMatch();

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

export default AddCityCard;
