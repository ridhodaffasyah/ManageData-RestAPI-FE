import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onInputChange = (el) => {
    setSearch(el);
    onSearch(el);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search"
      value={search}
      onChange={(el) => onInputChange(el.target.value)}
    />
  );
};

export default Search;
