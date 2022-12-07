import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => props.filterEmployees(e)}
      />
    </div>
  );
};

export default SearchBar;
