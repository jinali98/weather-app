import React from "react";
import {
  ErrorContainer,
  ErrorMessage,
  ImageContainer,
} from "./not-found-page.styles";

const NotFoundPage = () => {
  return (
    <ErrorContainer>
      <ImageContainer />
      <ErrorMessage>Page is Not on the Map</ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFoundPage;
