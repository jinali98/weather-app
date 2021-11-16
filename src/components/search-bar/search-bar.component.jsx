import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchASyncWeatherData,
  failedFetchingWeatherData,
} from "../../store/weather/weather.actions";
import CustomButton from "../custom-button/custom-button.component";
import { Input, SearchForm, SearchIcon } from "./search-bar.styles";
const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const userInputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //to check wether the input is empty
    if (userInput.trim() === "") {
      dispatch(
        failedFetchingWeatherData("Invalid Input. Please check and try again!")
      );
      return;
    }
    dispatch(fetchASyncWeatherData(userInput));
    setUserInput("");
  };

  return (
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
  );
};

export default SearchBar;
