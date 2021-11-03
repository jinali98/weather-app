import styled, { css } from "styled-components";
import {
  cardBackground_1,
  cardBackground_2,
  color_3,
} from "../../global.styles";

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

const getCardStyles = (props) => {
  if (props.weatherCard) return weatherCard;
  if (props.addCity) return addCityCard;
};

export const CardWrapper = styled.div`
  border-radius: 12px;
  padding: 15px;

  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  ${getCardStyles}
`;
