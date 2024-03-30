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
          <p>Good Job! You found the secret code.</p>
          <p>Please visit us on site and tell them this code "Elite Hoops is Awesome" to get a free T-Shirt on us.</p>
        </div>
      )}
    </section>
  );
}

export default Merch;
