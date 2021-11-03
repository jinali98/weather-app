import styled, { css } from "styled-components";
import { color_1, color_2, color_3 } from "../../global.styles";

const backButton = css`
  width: 100px;
  /* height: 80px; */
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: ${color_3};
  font-size: 80px;
  text-align: center;
  font-weight: 800;
`;

export const addCardButton = css`
  height: 200px;
  width: 200px;
  /* margin: auto; */
  background-color: ${color_3};
  border-radius: 50%;
  cursor: pointer;
  font-size: 100px;
  color: ${color_2};
  margin: 25px auto;
  border: none;
`;

const getBUttonStyles = (props) => {
  if (props.backButton) return backButton;
  if (props.addCardButton) return addCardButton;
};

export const Button = styled.button`
  ${getBUttonStyles}
`;
