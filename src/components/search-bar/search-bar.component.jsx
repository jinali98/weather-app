import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchASyncWeatherData } from "../../store/weather/weather.actions";
import Card from "../card/card.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  Input,
  SearchForm,
  SearchIcon,
  SearchTitle,
} from "./search-bar.styles";
const SearchBar = ({ getCountryName }) => {
  const [userInput, setUserInput] = useState("");

  const userInputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getCountryName(userInput);
    setUserInput("");
  };

  return (
    <Card searchPageCard>
      <SearchTitle>Search Weather Info</SearchTitle>
      <SearchForm onSubmit={onSubmitHandler}>
        <Input
          type="text"
          required
          placeholder="colombo"
          value={userInput}
          onChange={userInputChangeHandler}
        />
        <CustomButton submitBUtton type="submit">
          <SearchIcon />
        </CustomButton>
      </SearchForm>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCountryName: (name) => dispatch(fetchASyncWeatherData(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
