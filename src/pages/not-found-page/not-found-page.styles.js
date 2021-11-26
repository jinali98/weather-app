import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 70vw;
  height: 50vh;
  margin: 1rem auto;

  display: flex;
  flex-direction: column;
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
