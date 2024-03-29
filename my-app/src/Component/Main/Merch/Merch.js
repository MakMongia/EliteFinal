import React from 'react';
import MerchImage from '../../../assets/images/Merch.png'; // Adjust the path accordingly
import './Merch.css'; // Import the CSS file

// Define the Merch component
function Merch() {
  return (
    <section id="merch">
      {/* Merch needs to consist of product that users can view to be made aware of that are available to be sold at the club and any upcoming deals */}
      <h1>Merch</h1>
      <div className="merch-container">
        <figure>
          <img src={MerchImage} alt="Merch" />
          <p>Elite Hoops Club T-Shirts are now 50% off, grab them before they are gone.</p>
        </figure>
      </div>
    </section>
  );
}

export default Merch; // Export the Merch component
