import styled from "styled-components";
import { color_3 } from "../../global.styles";
import { CountryName } from "../city-weather-card/city-weather-card.styles";

export const WeatherDataItemWrapper = styled.div`
  background: url("https://i.ibb.co/zhXTJgB/default.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 80%;
  height: 40vh;
  margin: 1rem auto;
  margin-bottom: 0;
  padding: 2rem 3rem;
  border-radius: 8px 8px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled(CountryName)`
  width: 30%;
  font-size: 54px;
  color: ${color_3};
`;

export const WeatherInformationItem = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;
export const WeatherItemName = styled.p`
  font-size: 18px;
`;

export const WeatherDataItemContent = styled.div`
  width: 60%;
`;

export const OtherInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-top: 30px;
`;
