import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import './Header.css';
import SearchLogic from './searchBar/searchLogic'; // Import SearchLogic component
import Search from './searchBar/searchBar'; // Import Search component

function Header({ searchResults, setSearchText, handleSearch, setSearchResults }) { // Add setSearchResults to props
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleInputFocus = () => {
    setIsSearchOpen(true);
  };

  const handleInputBlur = () => {
    setIsSearchOpen(false); // Always set isSearchOpen to false on blur
  };

  const handleClearSearch = () => {
    setSearchText('');
    setSearchResults([]);
  };

  return (
    <header>
      <nav id="navbar">
        <ul>
          <li><img src={logo} alt="Logo" /></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#program">Programs</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#weather">Weather</a></li>
          <li><a href="#merch">Merch</a></li>
          <li><a href="#contactus">ContactUs</a></li>
          <li>
            <div className="search-wrapper">
              {/* Render the Search component conditionally based on isSearchOpen */}
              {isSearchOpen && <Search onSearch={handleSearch} />}
              <input
                type="text"
                placeholder="Search..."
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  console.log("Input Value:", inputValue); // Log input value
                  handleSearch(inputValue);
                }}
              />
              <button onClick={handleClearSearch}>Clear</button>
            </div>
          </li>
        </ul>
      </nav>
      {/* Render the SearchLogic component below the search bar */}
      <SearchLogic searchResults={searchResults} />
    </header>
  );
}

export default Header;
