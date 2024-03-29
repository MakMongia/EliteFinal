import React, { useState, useEffect } from 'react';
import Banner1 from '../../../assets/images/Banner1.png';
import Banner2 from '../../../assets/images/Banner2.png';
import Banner3 from '../../../assets/images/Banner3.png';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  useEffect(() => {
    showSlide(currentSlide);
  }, [currentSlide]);

  return (
    <section id="home" className="home-section">
      <div className="carousel-container">
        <div className="carousel-item">
          <img src={Banner1} alt="Image1" />
        </div>
        <div className="carousel-item">
          <img src={Banner2} alt="Image2" />
        </div>
        <div className="carousel-item">
          <img src={Banner3} alt="Image3" />
        </div>
      </div>

      <button id="prevBtn" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i> {/* Font Awesome left arrow icon */}
      </button>
      <button id="nextBtn" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i> {/* Font Awesome right arrow icon */}
      </button>
    </section>
  );
}

export default Home;
