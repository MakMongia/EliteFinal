import React from 'react';
import logo from '../../assets/images/Logo.png'; // Import the logo image
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header>
      {/* Navigation bar */}
      <nav id="navbar">
        <ul>
          {/* List items */}
          <li><a href="#home">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#program">Programs</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#weather">Weather</a></li>
          <li><a href="#merch">Merch</a></li>
          <li><a href="#contactus">ContactUs</a></li>
          
          {/* Logo */}
          <li><img src={logo} alt="Logo" /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
