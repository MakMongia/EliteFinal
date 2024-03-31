// SearchBar.js
import React, { useState } from 'react';
import './searchBar.css'; // Import the CSS file for styling

function SearchBar({ onClose, onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setSearchText(newText);
    console.log('Search text:', newText); // Log the searchText state
    // Perform search when text changes
    search(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSearch function with the current search text
    onSearch(searchText);
  };

  // Simulated search function
  const search = (query) => {
    // Perform search logic here, e.g., search through JSON data, HTML content, etc.
    // Update search results state accordingly
    const results = [/* Your search results array */];
    setSearchResults(results);
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
      </form>
      {/* Close button */}
      <button className="close-button" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
      {/* Display search results */}
      <ul className="search-results">
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => console.log('Result clicked:', result)}>
            {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
