import React, { useState } from 'react';

function SearchBar({ placeholder, onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchText}
      onChange={handleChange}
      className="search-input"
    />
  );
}

export default SearchBar;
