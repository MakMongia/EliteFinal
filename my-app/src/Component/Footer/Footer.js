import React from 'react';
import './Footer.css'; // Import the CSS file
import logo from '../../assets/images/Logo.png'; // Import your logo image


function Footer() {
  return (
    <footer className="footer">
      {/* Container for links and logo */}
      <div className="links-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="footer-logo" />

        {/* Footer links */}
        <div className="footer-list">
          <ul>
            <li><span className="footer-link" onClick={() => window.location.href = "#home"}>Home</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#schedule"}>Schedule</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#program"}>Programs</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#events"}>Events</span></li>
          </ul>
        </div>
        <div className="footer-list">
          <ul>
            <li><span className="footer-link" onClick={() => window.location.href = "#weather"}>Weather</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#news"}>News</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#merch"}>Merch</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#contactus"}>Contact Us</span></li>
          </ul>
        </div>

        {/* Contact information */}
        <div className="contact-info">
          <p>Elite Hoops Club</p>
          <p>15 Springvale Drive</p>
          <p>Mulgrave VIC-3112</p>
          <p>Phone No. - +61 444444444</p>
          <p>email - info@Elitehc.com.au</p>
        </div>
      </div>

      {/* Policies section */}
      <div className="policies">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Cookies Policy</span>
        <span>Whistleblowing</span>
        <span>Human Rights & Prevention of Modern Slavery</span>
        <span>Customer Support</span>
      </div>
    </footer>
  );
}

export default Footer;
