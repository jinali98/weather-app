import styled, { css } from "styled-components";
import { cardBackground_1, color_3, color_6 } from "../../global.styles";

import { wallpapers } from "../../constant/wallpapers";
import { generateRandomNumber } from "../../utils/randomNumber";

const weatherCard = css`
  background-image: url(${wallpapers[generateRandomNumber(1, 4)]});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
`;
const addCityCard = css`
  background: ${cardBackground_1.backgroundMain};
  background: ${cardBackground_1.background};
  border: 3px solid ${color_3};
  height: 500px;
`;
const searchPageCard = css`
  width: 50%;
  text-align: center;
  padding: 0.5rem;
  background-color: ${color_3};
  color: ${color_6};
  border-radius: 12px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
  @media (max-width: 360px) {
    width: 100%;
    height: 500px;
  }
`;
const searchResultCard = css`
  width: 50%;
  text-align: center;
  padding: 0.5rem;
  /* background-color: ${color_3}; */
  color: ${color_6};
  border-radius: 12px;
  text-align: center;

  background-image: url(${wallpapers[generateRandomNumber(1, 4)]});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 520px;
    margin-bottom: 1rem;
  }
  /* @media (max-width: 360px) {
    width: 100%;
    height: 520px;
  } */
`;

const getCardStyles = (props) => {
  if (props.weatherCard) return weatherCard;
  if (props.addCity) return addCityCard;
  if (props.searchPageCard) return searchPageCard;
  if (props.searchResultCard) return searchResultCard;
};

export const CardWrapper = styled.div`
  border-radius: 12px;
  padding: 15px;

  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  ${getCardStyles}
`;
