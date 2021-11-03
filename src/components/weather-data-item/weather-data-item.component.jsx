import React from "react";
import Card from "../card/card.component";

const WeatherDataItem = () => {
  return (
    <Card>
      <h1>ROME</h1>
      <div>
        <p>16</p>
        <p>clouds</p>
        <div>
          <p>humidity</p>
          <p>67%</p>
        </div>
        <div>
          <p>wind</p>
          <p>1 K/M</p>
        </div>
      </div>
    </Card>
  );
};

export default WeatherDataItem;
