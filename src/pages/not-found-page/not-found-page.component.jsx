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
      <ErrorMessage>Page not found</ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFoundPage;
