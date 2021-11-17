import styled from "styled-components";
import { color_9 } from "../../global.styles";

export const ForecastItemWrapper = styled.div`
  background-color: ${color_9};
  padding: 12px 10px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 75%;
    margin: auto;
  }
`;
export const ForecastItemDate = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
export const ForecastItemInfo = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
