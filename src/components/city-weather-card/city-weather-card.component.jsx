import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../card/card.component";

const CityWeatherCard = ({ history, id, country }) => {
  const { name, coord } = country;
  return (
    <Card weatherCard>
      <div onClick={() => history.push(`/${id}`)}>
        <p>{name}</p>
        <div>icon</div>
        <p>15</p>
        <p>CLOUDS</p>
        <p>min 15.22</p>
        <p>max 14.78</p>
      </div>
    </Card>
  );
};

export default withRouter(CityWeatherCard);
