import React from "react";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { ContentWrapper, Date, HeaderContainer, Image } from "./header.styles";
import logo from "../../svgs/icon.png";

const Header = () => {
  const todaysDate = getCurrentDate();
  return (
    <HeaderContainer>
      <ContentWrapper>
        <Image src={logo} alt="logo" />
        <Date>{todaysDate}</Date>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
