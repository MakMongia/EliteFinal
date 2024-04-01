import React, { useState, useEffect } from 'react';
import logo from '../../../assets/images/Logo.png';
import './Navigation.css';
import SearchLogic from '../searchLogic/searchLogic'; // Import SearchLogic component

function Navigation({ searchResults, setSearchResults, handleSearch }) {
  const [searchText, setSearchText] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Add isSearchOpen state variable

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

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchText(inputValue);
    handleSearch(inputValue);
  };

  useEffect(() => {
    setIsSearchOpen(searchText.trim() !== '');
  }, [searchText]);

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
              <div className="search-bar">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      value={searchText}
                      onChange={handleChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder="Search..."
                      autoFocus={isSearchOpen}
                      className={isSearchOpen ? 'expanded' : ''}
                    />
                  </div>
                </form>
              </div>
              {/* Use the "X" button to clear search text and trigger navigation */}
              <button className="navigation-button" onClick={handleClearSearch} title="Clear search field">X</button>
            </div>
          </li>
        </ul>
      </nav>
      {/* Render the SearchLogic component below the search bar */}
      <SearchLogic searchResults={searchResults} />
    </header>
  );
}

export default Navigation;
