import styled, { css } from "styled-components";
import {
  cardBackground_1,
  cardBackground_2,
  color_3,
  color_6,
} from "../../global.styles";

import bg from "../../svgs/cities/tunis.svg";

const weatherCard = css`
  background: ${cardBackground_1.backgroundMain};
  background: ${cardBackground_1.background};
  height: 500px;
`;
const addCityCard = css`
  background: ${cardBackground_2.backgroundMain};
  background: ${cardBackground_2.background};
  border: 3px solid ${color_3};
  height: 500px;
`;
const searchPageCard = css`
  width: 50%;
  text-align: center;
  padding: 0%.5rem;
  background-color: ${color_3};
  color: ${color_6};
  border-radius: 12px;
  text-align: center;
`;
const searchResultCard = css`
  width: 50%;
  text-align: center;
  padding: 0%.5rem;
  background-color: ${color_3};
  color: ${color_6};
  border-radius: 12px;
  text-align: center;

  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
