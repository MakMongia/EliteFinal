import React, { useState } from 'react';
import './searchBar.css'; // Import the CSS file for styling

function SearchBar({ onClose, onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    const newText = e.target.value;
    setSearchText(newText);
    console.log('Search text:', newText); // Log the searchText state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSearch function with the current search text
    onSearch(searchText);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      {/* Close button */}
      <button className="close-button" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export default SearchBar;
