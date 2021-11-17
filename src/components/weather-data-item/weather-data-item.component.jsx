import React from "react";
import {
  OtherInfoContainer,
  Title,
  WeatherDataItemContent,
  WeatherDataItemWrapper,
  WeatherInformationItem,
  WeatherItemName,
} from "./weather-data-item.styles";

const WeatherDataItem = ({ current, name }) => {
  const { temp, wind_speed, humidity, weather } = current;
  return (
    <WeatherDataItemWrapper>
      <Title>{name}</Title>
      <WeatherDataItemContent>
        <WeatherInformationItem>{temp} ℃</WeatherInformationItem>
        <WeatherInformationItem>{weather[0].main}</WeatherInformationItem>
        <OtherInfoContainer>
          <div>
            <WeatherInformationItem>{humidity}%</WeatherInformationItem>
            <WeatherItemName>Humidity</WeatherItemName>
          </div>
          <div>
            <WeatherInformationItem>
              {wind_speed} meter/sec
            </WeatherInformationItem>
            <WeatherItemName>Wind</WeatherItemName>
          </div>
        </OtherInfoContainer>
      </WeatherDataItemContent>
    </WeatherDataItemWrapper>
  );
};

export default WeatherDataItem;
