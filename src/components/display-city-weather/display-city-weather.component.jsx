import React from "react";
import Card from "../card/card.component";

const DisplayCityWeather = () => {
  return (
    <Card>
      {/* if there is a city show weather data. add a background image  display data on it*/}
      <div>
        <p>Rome</p>
        <div>icon</div>
        <p>15</p>
        <p>CLOUDS</p>
        <p>min 15.22</p>
        <p>max 14.78</p>
        <button>add country</button>
      </div>
    </Card>
  );
};

export default DisplayCityWeather;
