import React from 'react';
import './ContactUs.css'; // Import the CSS file

function ContactUs() {
  const showSuccessPopup = () => {
    // Define the function to handle form submission
    // For demonstration purposes, I'm just logging a success message here
    console.log('Form submitted successfully!');
  };

  return (
    <section id="contactus">
      <h1>Contact Us</h1>
      <div className="container">
        <form id="contactForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br /><br />
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required /><br /><br />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea><br /><br />
          <button type="button" onClick={showSuccessPopup}>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
