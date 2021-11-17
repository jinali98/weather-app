import styled from "styled-components";
import { color_1 } from "../../global.styles";
import { CountryName } from "../city-weather-card/city-weather-card.styles";
import { WeatherInformationItem } from "../weather-data-item/weather-data-item.styles";

export const Title = styled(CountryName)`
  font-size: 44px;
  text-align: center;

  margin-bottom: 1rem;
`;

export const WeatherItem = styled(WeatherInformationItem)`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${color_1};
  font-weight: 300;
`;
export const Temperature = styled.p`
  font-size: 34px;
  font-weight: 600;
  color: ${color_1};
  margin-bottom: 10px;
`;
