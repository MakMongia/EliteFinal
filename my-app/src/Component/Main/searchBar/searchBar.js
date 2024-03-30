import React, { useState } from 'react';
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function SearchBar({ placeholder, onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <ErrorBoundary> {/* errorBoundary added here */}
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={handleChange}
        className="search-input"
      />
    </ErrorBoundary> /* errorBoundary ends here */
  );
}

export default SearchBar;
