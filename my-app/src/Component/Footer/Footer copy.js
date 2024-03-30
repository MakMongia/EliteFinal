import React from 'react';
import './Footer.css'; // Import the CSS file
import logo from '../../assets/images/Logo.png'; // Import your logo image

function Footer() {
  return (
    <footer className="footer">
      <div className="links-container">
        <div className="links-row">
          <a href="#home">Home</a>
          <a href="#schedule">Schedule</a>
          <a href="#program">Programs</a>
        </div>
        <div className="links-row">
          <a href="#events">Events</a>
          <a href="#news">News</a>
          <a href="#merch">Merch</a>
        </div>
      </div>
      <div className="footer-content">
        <div className="contact-info">
          <p>Elite Hoops Club</p>
          <p>15 Springvale Drive</p>
          <p>Mulgrave VIC-3112</p>
          <p>Phone No. - +61 444444444</p>
          <p>email - info@Elitehc.com.au</p>
        </div>
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="policies">
        <a href="privacy-statement-url">Privacy Statement</a>
        <a href="terms-and-conditions-url">Terms and Conditions</a>
      </div>
    </footer>
  );
}

export default Footer;
