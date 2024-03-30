import React from 'react';
import './Footer.css'; // Import the CSS file
import logo from '../../assets/images/Logo.png'; // Import your logo image

function Footer() {
  return (
    <footer className="footer">
      <div className="links-container">
        <div className="links-row">
          <span className="footer-link" onClick={() => window.location.href = "#home"}>Home</span>
          <span className="footer-link" onClick={() => window.location.href = "#schedule"}>Schedule</span>
          <span className="footer-link" onClick={() => window.location.href = "#program"}>Programs</span>
        </div>
        <div className="links-row">
          <span className="footer-link" onClick={() => window.location.href = "#events"}>Events</span>
          <span className="footer-link" onClick={() => window.location.href = "#news"}>News</span>
          <span className="footer-link" onClick={() => window.location.href = "#merch"}>Merch</span>
        </div>
        <div className="links-row">
          <span className="footer-link" onClick={() => window.location.href = "#contactus"}>ContactUs</span>
        </div>
      </div>
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="contact-info">
          <p>Elite Hoops Club</p>
          <p>15 Springvale Drive</p>
          <p>Mulgrave VIC-3112</p>
          <p>Phone No. - +61 444444444</p>
          <p>email - info@Elitehc.com.au</p>
        </div>
      </div>
      <div className="policies">
       <span className="footer-link">Privacy Statement</span>
       <span className="footer-link">Terms and Conditions</span>
      </div>

    </footer>
  );
}

export default Footer;
