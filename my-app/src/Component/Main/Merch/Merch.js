import React, { useState } from 'react';
import MerchImage from '../../../assets/images/Merch.png';
import './Merch.css';

function Merch() {
  // State to manage the visibility of the popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle click event on the image
  const handleClick = () => {
    setShowPopup(true);
    // Set a timeout to hide the popup after 7 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 7000);
  };

  return (
    <section id="merch">
      <h1>Merch</h1>
      <div className="merch-container">
        {/* Make the image clickable and trigger the handleClick function */}
        <figure onClick={handleClick} className="popup-trigger">
          <img
            src={MerchImage}
            alt="Merch"
            onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />
          <br></br>
          <figcaption>Elite Hoops Club T-Shirts are now 50% off, grab them before they are gone.</figcaption>
        </figure>
      </div>
      {/* Conditional rendering for the popup */}
      {showPopup && (
        <div className="popup-message">
          <br></br>
          <p>Congratulations! You've discovered the secret code.</p>
          <p>Feel free to drop by our location and mention the code "Elite Hoops Club is Awesome" to receive a complimentary T-shirt from us.</p>
        </div>
      )}
    </section>
  );
}

export default Merch;
