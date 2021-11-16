import React from "react";
import { Button } from "./custom-button.styles";

const CustomButton = ({ children, onClick, type, ...otherProps }) => {
  return (
    <Button onClick={onClick} type={type} {...otherProps}>
      {children}
    </Button>
  );
};

export default CustomButton;
