import React from 'react';
import './Footer.css'; // Import the CSS file
import logo from '../../assets/images/Logo.png'; // Import your logo image

function Footer() {
  return (
    <footer className="footer">
      <div className="links-container">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-list">
          <ul>
            <li><span className="footer-link" onClick={() => window.location.href = "#home"}>Home</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#schedule"}>Schedule</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#program"}>Programs</span></li>
          </ul>
        </div>
        <div className="footer-list">
          <ul>
            <li><span className="footer-link" onClick={() => window.location.href = "#events"}>Events</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#news"}>News</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#merch"}>Merch</span></li>
            <li><span className="footer-link" onClick={() => window.location.href = "#contactus"}>Contact Us</span></li>
          </ul>
        </div>
        <div className="contact-info">
          <p>Elite Hoops Club</p>
          <p>15 Springvale Drive</p>
          <p>Mulgrave VIC-3112</p>
          <p>Phone No. - +61 444444444</p>
          <p>email - info@Elitehc.com.au</p>
        </div>
      </div>
      <div className="policies">
        <span className="footer-link">Privacy Policy</span>
        <span className="footer-link">Terms & Conditions</span>
        <span className="footer-link">Cookies Policy</span>
        <span className="footer-link">Whistleblowing</span>
        <span className="footer-link">Human Rights & Prevention of Modern Slavery</span>
        <span className="footer-link">Customer Support</span>
      </div>
    </footer>
  );
}

export default Footer;
