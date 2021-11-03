import React from "react";
import Card from "../card/card.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  Input,
  SearchForm,
  SearchIcon,
  SearchTitle,
} from "./search-bar.styles";
const SearchBar = () => {
  return (
    <Card searchPageCard>
      <SearchTitle>Search Weather Info</SearchTitle>
      <SearchForm>
        <Input type="text" required placeholder="colombo" />
        <CustomButton submitBUtton type="submit">
          <SearchIcon />
        </CustomButton>
      </SearchForm>
    </Card>
  );
};

export default SearchBar;
