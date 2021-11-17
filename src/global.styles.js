import { createGlobalStyle } from "styled-components";

export const color_1 = "#2B244D";
export const color_2 = "#302461";
export const color_3 = "#FFFEFF";
export const color_4 = "#03EF9B";
export const color_5 = "#E80316";
export const color_6 = "#6D1A85";
export const color_7 = "#38518A";
export const color_8 = "#9591A6";
export const color_9 = "#D5D3DB";
export const cardBackground_1 = {
  backgroundMain: "rgb(56,81,138)",
  background:
    "linear-gradient(241deg, rgba(56,81,138,1) 3%, rgba(109,26,133,1) 52%, rgba(43,36,77,1) 89%)",
};
export const cardBackground_2 = {
  backgroundMain: "#D5D3DB",
  background:
    "linear-gradient(241deg, #D5D3DB 3%, rgba(56,81,138,1) 42%, rgba(43,36,77,1) 89%)",
};

//font weights 300, 400, 500, 800

export const GlobalStyle = createGlobalStyle`

body{
    padding: 0;
  font-weight: 300;
    line-height: 1.5;
    font-family: 'Source Sans Pro', sans-serif;
    font-family: 'Tajawal', sans-serif;
    color: ${color_3};
    background: rgb(48,36,97);
background: linear-gradient(270deg, rgba(48,36,97,1) 13%, rgba(45,36,86,1) 24%, rgba(55,77,133,1) 51%, rgba(56,81,138,1) 77%, rgba(36,42,108,1) 91%);

html{
    scroll-behavior: smooth;
}
*{
box-sizing: border-box;
margin: 0;
}

a{
    text-decoration: none;
}
`;
