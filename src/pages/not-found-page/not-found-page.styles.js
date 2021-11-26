import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 70vw;

  margin: 20px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background: url("https://i.imgur.com/Q2BAOd2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ErrorMessage = styled.h1`
  font-size: 30px;
  color: "#ffff";
`;
