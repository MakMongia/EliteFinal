import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Elite Hoops Club</p>
        <p>15 Springvale Drive</p>
        <p>Mulgrave VIC-3112</p>
        <p>Phone No. - +61 444444444</p>
        <p>email - info@Elitehc.com.au</p>
      </div>
      <div className="policies">
        <a href="privacy-statement-url">Privacy Statement</a>
        <a href="terms-and-conditions-url">Terms and Conditions</a>
      </div>
    </footer>
  );
}

export default Footer;
