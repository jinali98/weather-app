import React from "react";
import { Message } from "./error-message.styles";

const ErrorMessage = ({ children }) => {
  return <Message>{children}</Message>;
};

export default ErrorMessage;
