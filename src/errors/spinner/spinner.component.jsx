import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "../../hoc/withSpinner.styles";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
