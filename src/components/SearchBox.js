import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pd2">
      <input
        className="pa3 ba b--green bg-lightest-blue tc"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
