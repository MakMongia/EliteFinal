import React from 'react';
import Banner1 from '../img/Banner1.png';
import Banner2 from '../img/Banner2.png';
import Banner3 from '../img/Banner3.png';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="carousel-container">
        <div className="carousel-item">
          <img src={Banner1} alt="Banner Image 1" />
        </div>
        <div className="carousel-item">
          <img src={Banner2} alt="Banner Image 2" />
        </div>
        <div className="carousel-item">
          <img src={Banner3} alt="Banner Image 3" />
        </div>
      </div>
      <button id="prevBtn">Previous</button>
      <button id="nextBtn">Next</button>
    </section>
  );
}

export default Home;
