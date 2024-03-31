import React, { useState } from 'react'; // Import React at the beginning
import logo from '../../assets/images/Logo.png'; // Import the logo image
import './Header.css'; // Import the CSS file
import SearchBar from '../Main/searchBar/searchBar'; // Import the SearchBar component

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage search bar visibility

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search bar visibility
  };

  const handleSearch = (searchText) => {
    // Add your search logic here
    console.log("Searching for:", searchText);
  };

  return (
    <header>
      {/* Navigation bar */}
      <nav id="navbar">
        <ul>
          {/* List items */}
          {/* Logo */}
          <li><img src={logo} alt="Logo" /></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#program">Programs</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#weather">Weather</a></li>
          <li><a href="#merch">Merch</a></li>
          <li><a href="#contactus">ContactUs</a></li>
        </ul>
        {/* Search button */}
        <button className="search-button" onClick={toggleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </nav>

      {/* Search bar */}
      {isSearchOpen && (
        <SearchBar onClose={toggleSearch} onSearch={handleSearch} />
      )}

      {/* Overlay for closing search bar */}
      {isSearchOpen && (
        <div className="search-overlay" onClick={toggleSearch}></div>
      )}
    </header>
  );
}

export default Header;