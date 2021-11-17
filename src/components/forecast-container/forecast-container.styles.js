import styled from "styled-components";
import { color_2, color_3 } from "../../global.styles";

export const ForecastWrapper = styled.div`
  background-color: ${color_3};
  color: ${color_2};
  width: 80%;
  margin: 1rem auto;
  margin-top: 0;
  padding: 2rem 0;
  border-radius: 0px 0px 8px 8px;

  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: auto;
  }
  @media (max-width: 360px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
  }
`;
