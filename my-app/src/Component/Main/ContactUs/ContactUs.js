import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function ContactUs() {
  // State variables to manage form data and validation
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: false, email: false, message: false });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform form validation
    const errors = {};
    let isValid = true;

    if (!formData.name) {
      errors.name = true;
      isValid = false;
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = true;
      isValid = false;
    }

    if (!formData.message) {
      errors.message = true;
      isValid = false;
    }

    setFormErrors(errors);

    // If form is valid, show success popup and clear form data
    if (isValid) {
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form data
      }, 3000); // Hide popup after 3 seconds
    }
  };

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Determine if the Submit button should be disabled
  const isSubmitDisabled = !formData.name || !formData.email || !formData.message || showSuccessPopup;

  // Determine the number of filled fields
  const filledFields = Object.values(formData).filter(value => value).length;

  return (
    <ErrorBoundary > {/* errorBoundary added here */}
      <section id="contactus" className='section-adjust'>
        <h1>Contact Us</h1>
        <div className="container">
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name" className="hidden">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? 'error' : ''}
              placeholder="Name"
              required
            /><br /><br />
            <label htmlFor="email" className="hidden">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? 'error' : ''}
              placeholder="Email Address"
            /><br /><br />
            <label htmlFor="message" className="hidden">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={formErrors.message ? 'error' : ''}
              placeholder="Message"
              required
            ></textarea><br /><br />
            <button type="submit" disabled={isSubmitDisabled}>Submit</button>
          </form>
          {/* Conditional rendering for the success popup */}
          {showSuccessPopup && (
            <div className="success-popup">
              <p>Thank you for reaching out to us! We will get back to you as soon as possible.</p>
            </div>
          )}
          {/* Conditional rendering for the validation message */}
          {!showSuccessPopup && filledFields < 3 && (
            <div className="validation-message">
              {`Please fill ${3 - filledFields} more field${filledFields === 2 ? '' : 's'} to submit the form.`}
            </div>
          )}
        </div>
      </section>
    </ErrorBoundary> /* errorBoundary ends here */
  );
}

export default ContactUs;
