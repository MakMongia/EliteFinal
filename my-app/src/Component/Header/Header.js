// Header.js
import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import './Header.css';
import SearchBar from '../Main/searchBar/searchBar'; // Assuming SearchBar.js is in the same directory

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearch = (searchText) => {
    // Implement your search logic here
    console.log("Searching for:", searchText);
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
            {isSearchOpen ? (
              <SearchBar onClose={handleCloseSearch} onSearch={handleSearch} />
            ) : (
              <button className="search-button" onClick={toggleSearch}>
                Search
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
