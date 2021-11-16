import React from "react";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { ContentWrapper, Date, HeaderContainer, Image } from "./header.styles";
import logo from "../../svgs/icon.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const todaysDate = getCurrentDate();
  return (
    <HeaderContainer>
      <ContentWrapper>
        <Image src={logo} alt="logo" onClick={() => history.push("/")} />
        <Date>{todaysDate}</Date>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
