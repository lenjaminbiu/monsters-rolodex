import React from "react";
import "./searchbox.styles.css";

export const SearchBox = ({ placeholder, searchChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={searchChange}
    />
  );
};
