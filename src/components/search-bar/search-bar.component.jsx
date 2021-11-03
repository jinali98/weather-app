import React from "react";

const SearchBar = () => {
  return (
    <div>
      <h1>Search cities</h1>
      <form>
        <input type="text" required placeholder="search city" />
        <button type="submit ">search</button>
      </form>
    </div>
  );
};

export default SearchBar;
