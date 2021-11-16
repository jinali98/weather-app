import React from "react";

const WeatherDataItem = ({ current, name }) => {
  const { temp, wind_speed, humidity, weather } = current;
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <p>{temp} ℃</p>
        <p>{weather[0].main}</p>
        <div>
          <p>humidity</p>
          <p>{humidity}%</p>
        </div>
        <div>
          <p>wind</p>
          <p>{wind_speed} meter/sec</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDataItem;
