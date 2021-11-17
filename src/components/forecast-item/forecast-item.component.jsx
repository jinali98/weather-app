import React from "react";
import { icons } from "../../constant/icon";
import { toDate } from "../../utils/toDate";
import {
  ForecastItemDate,
  ForecastItemInfo,
  ForecastItemWrapper,
} from "./forecast-item.styles";

const ForecastItem = ({ day: { dt, weather, temp } }) => {
  const date = toDate(dt);
  return (
    <ForecastItemWrapper>
      <ForecastItemDate>{date}</ForecastItemDate>
      <img src={icons[`${weather[0].main}`]} alt="" />
      <ForecastItemInfo>{temp.day} ℃</ForecastItemInfo>
      <ForecastItemInfo>{weather[0].main}</ForecastItemInfo>
    </ForecastItemWrapper>
  );
};

export default ForecastItem;
