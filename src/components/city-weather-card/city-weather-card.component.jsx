import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../card/card.component";

const CityWeatherCard = ({ history, country }) => {
  const {
    current: { humidity, pressure, wind_speed, temp, weather },
    name,
    id,
  } = country;

  const { main } = weather[0];

  return (
    <Card weatherCard>
      <div onClick={() => history.push(`/${name}`)}>
        <p>{name}</p>
        <div>icon</div>
        <p>{temp}</p>
        <p>{main}</p>
        <p>{pressure}</p>
        <p>{humidity}</p>
        <p>{wind_speed}</p>
      </div>
    </Card>
  );
};

export default withRouter(CityWeatherCard);
