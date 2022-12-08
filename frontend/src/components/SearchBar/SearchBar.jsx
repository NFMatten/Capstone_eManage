import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          props.filterEmployees(e);
          props.filterAddresses(e);
          props.filterEmergencyContacts(e);
        }}
      />
    </div>
  );
};

export default SearchBar;
