import React from 'react';
import logo from '../images/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav id="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#program">Programs</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#merch">Merch</a></li>
          <li><a href="#contactus">Contact Us</a></li>
          <li><img src={logo} alt="Logo" /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;