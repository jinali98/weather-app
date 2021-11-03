import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../card/card.component";
import {
  ButtonClick,
  CardText,
  ContentWrapper,
  ImageContainer,
} from "./add-city-card.styles";

const AddCityCard = ({ history, match }) => {
  return (
    <Card addCity>
      <ContentWrapper>
        <CardText>Add A City</CardText>
        <ButtonClick onClick={() => history.push(`${match.url}search`)}>
          <p>&#10010;</p>
        </ButtonClick>
      </ContentWrapper>
    </Card>
  );
};

export default withRouter(AddCityCard);
