import React from "react";
import Card from "../card/card.component";

const DisplayCityWeather = () => {
  return (
    <Card searchResultCard>
      {/* if there is a city show weather data. add a background image  display data on it*/}

      <p>Rome</p>
      <div>icon</div>
      <p>15</p>
      <p>CLOUDS</p>
      <div>
        <p>min 15.22</p>
        <p>max 14.78</p>
      </div>
      <button>add country</button>
    </Card>
  );
};

export default DisplayCityWeather;
