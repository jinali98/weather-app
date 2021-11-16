import React from "react";
import { icons } from "../../constant/icon";
import { toDate } from "../../utils/toDate";

const ForecastItem = ({ day: { dt, weather, temp } }) => {
  const date = toDate(dt);
  return (
    <div>
      <p>{date}</p>
      <img src={icons[`${weather[0].main}`]} alt="" />
      <p>{temp.day} ℃</p>
      <p>{weather[0].main}</p>
    </div>
  );
};

export default ForecastItem;
