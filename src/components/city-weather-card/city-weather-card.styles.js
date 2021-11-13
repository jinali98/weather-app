import styled from "styled-components";
import { color_1 } from "../../global.styles";
export const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: 80%;
  height: 90%;
  margin: 1rem auto;
  padding: 20px;
`;

export const CountryName = styled.p`
  color: ${color_1};
  font-weight: 800;
  font-size: 24px;
`;
export const WeatherImage = styled.img`
  width: 100px;
  margin: 5px auto;
  background-color: aliceblue;
  padding: 10px;
  border-radius: 50%;
`;
export const Temperature = styled(CountryName)`
  font-size: 44px;
`;
export const Condition = styled(CountryName)`
  font-size: 24px;
`;
export const Preassure = styled(CountryName)`
  font-size: 20px;
`;
export const Humidity = styled(CountryName)`
  font-size: 20px;
`;
export const WindSpeed = styled(CountryName)`
  font-size: 20px;
`;
