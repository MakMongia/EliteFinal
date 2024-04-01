import React, { useState } from 'react';
import logo from '../../../assets/images/Logo.png';
import './Navigation.css';
import SearchLogic from '../searchBar/searchLogic'; // Import SearchLogic component
import Search from '../searchBar/searchBar';

function Header({ searchResults, setSearchText, handleSearch, setSearchResults }) {
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

  // Event handler for the navigation button to clear search text and trigger navigation
const handleNavigationButtonClick = () => {
  handleClearSearch();
  console.log("Navigation button clicked"); // Check if this message is logged
  // Add navigation action here
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
              {isSearchOpen && <Search onSearch={handleSearch} onClear={handleClearSearch} />} // Pass handleClearSearch as onClear prop
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
              {/* Use the navigation button to clear search text and trigger navigation */}
              <button onClick={handleNavigationButtonClick}>NavigationButton</button>
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
