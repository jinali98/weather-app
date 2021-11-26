import React from "react";
import {
  ErrorContainer,
  ErrorMessage,
  ImageContainer,
} from "./not-found-page.styles";

const NotFoundPage = ({ msg = "page is not on the map" }) => {
  return (
    <ErrorContainer>
      <ImageContainer />
      <ErrorMessage>{msg}</ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFoundPage;
