import React from "react";
import { CardWrapper } from "./card.styles";

const Card = ({ children, ...otherProps }) => {
  return <CardWrapper {...otherProps}>{children}</CardWrapper>;
};

export default Card;
