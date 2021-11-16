import React from "react";
import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../store/weather/weather.selectors";
import Card from "../card/card.component";
import ErrorMessage from "../error-message/error-message.component";
import SearchBar from "../search-bar/search-bar.component";
import { SearchTitle } from "./search-card.styles";

const SearchCard = () => {
  const errorMessage = useSelector(selectErrorMessage);
  return (
    <Card searchPageCard>
      <SearchTitle>Search Weather Info</SearchTitle>
      <SearchBar />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Card>
  );
};

export default SearchCard;
