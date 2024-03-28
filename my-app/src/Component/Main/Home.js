import React, { useState } from 'react';
import Banner1 from '../../assets/images/Banner1.png';
import Banner2 from '../../assets/images/Banner2.png';
import Banner3 from '../../assets/images/Banner3.png';


function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <section id="home" className="home-section">
      <div className="carousel-container">
        <div className={currentSlide === 0 ? 'carousel-item active' : 'carousel-item'}>
          <img src={Banner1} alt="Image1" />
        </div>
        <div className={currentSlide === 1 ? 'carousel-item active' : 'carousel-item'}>
          <img src={Banner2} alt="Image2" />
        </div>
        <div className={currentSlide === 2 ? 'carousel-item active' : 'carousel-item'}>
          <img src={Banner3} alt="Image3" />
        </div>
      </div>

      <button id="prevBtn" onClick={prevSlide}>Previous</button>
      <button id="nextBtn" onClick={nextSlide}>Next</button>
    </section>
  );
}

export default Home;
