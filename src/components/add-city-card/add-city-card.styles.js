import styled from "styled-components";
import { color_2, color_3 } from "../../global.styles";

export const ContentWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardText = styled.p`
  font-size: 35px;
  font-weight: 600;
`;

export const ButtonClick = styled.div`
  height: 200px;
  width: 200px;
  margin: auto;
  background-color: ${color_3};
  border-radius: 50%;
  cursor: pointer;

  p {
    font-size: 100px;
    color: ${color_2};
    margin: 25px 0;
  }
`;
