import React, { useState, useEffect } from 'react';
import "./searchBar.css";

function SearchBar({ onSearch, onClear }) { // Add onClear function as prop
  const [searchText, setSearchText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchText(inputValue);
    onSearch(inputValue);
  };

const handleClear = () => {
  setSearchText('');
  setShowSearchResults(false);
  onClear(); // Call the onClear function passed from parent
  console.log("Search text cleared"); // Check if this message is logged
};



  useEffect(() => {
    setShowSearchResults(searchText.trim() !== '' && isInputFocused);
  }, [searchText, isInputFocused]);

  return (
    <div className="search-bar" onClick={handleInputFocus}>
      {isInputFocused ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-wrapper">
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              onBlur={handleInputBlur}
              placeholder="Search..."
              autoFocus
            />
            {/* Change the button text to "X" */}
            <button type="button" onClick={handleClear}>X</button>
          </div>
        </form>
      ) : (
        null
      )}
      {showSearchResults && (
        <div className="search-results">
          {/* Render search results here */}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
