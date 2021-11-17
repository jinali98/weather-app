import styled from "styled-components";
import { color_1 } from "../../global.styles";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${color_1};
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    height: 7vh;
  }
  @media (max-width: 360px) {
    height: 12vh;
  }
`;
export const ContentWrapper = styled.div`
  width: 80vw;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 360px) {
    width: 85vw;
  }
`;

export const Date = styled.p`
  font-size: 20px;
`;

export const Image = styled.img`
  width: 60px;
  margin: 5px 0;
  cursor: pointer;
`;
