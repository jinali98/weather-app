import styled from "styled-components";
import { ReactComponent as SeachIconComponent } from "../../svgs/search.svg";

export const SearchTitle = styled.h1`
  margin: 1rem;
  font-size: 50px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 1rem;
`;

export const Input = styled.input`
  width: 70%;
  height: 50px;
  border-radius: 12px;
  border: none;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  font-size: 20px;
`;

export const SearchIcon = styled(SeachIconComponent)`
  width: 50px;
  background-color: none;
  border: none;
`;
