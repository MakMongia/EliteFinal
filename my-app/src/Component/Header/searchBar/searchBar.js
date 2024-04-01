import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./searchBar.css";

function SearchBar({ onSearch }) {
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
  };

  useEffect(() => {
    setShowSearchResults(searchText.trim() !== '' && isInputFocused);
  }, [searchText, isInputFocused]);

  return (
    <div className="search-bar" onClick={handleInputFocus}>
      {isInputFocused ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={searchText}
            onChange={handleChange}
            onBlur={handleInputBlur}
            placeholder="Search..."
            autoFocus
          />
          <button type="button" onClick={handleClear}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </form>
      ) : (
        <span>Search...</span>
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
