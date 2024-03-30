import React, { useState, useEffect } from 'react';
import Banner1 from '../../../assets/images/Banner1.png';
import Banner2 from '../../../assets/images/Banner2.png';
import Banner3 from '../../../assets/images/Banner3.png';
import './Home.css';

function Home() {
  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to show the selected slide
  const showSlide = (index) => {
    // Get all carousel items and show the one matching the index, hide others
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  };

  // Function to display the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  // Function to display the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  // Effect to update slide display when currentSlide changes
  useEffect(() => {
    showSlide(currentSlide);
  }, [currentSlide]);

  // Function to handle dot button click and scroll to top of the section
  const handleDotClick = (index) => {
    setCurrentSlide(index);
    // Scroll to the top of the section
    const section = document.getElementById('home');
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className='section-margintop'>
      {/* Carousel container */}
      <div className="carousel-container">
        {/* Carousel items */}
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

      {/* Dot buttons for carousel control */}
      <div className="dot-buttons">
        <button onClick={() => handleDotClick(0)} className={currentSlide === 0 ? 'active' : ''}></button>
        <button onClick={() => handleDotClick(1)} className={currentSlide === 1 ? 'active' : ''}></button>
        <button onClick={() => handleDotClick(2)} className={currentSlide === 2 ? 'active' : ''}></button>
      </div>

      {/* Previous button */}
      <button id="prevBtn" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i> {/* Font Awesome left arrow icon */}
      </button>

      {/* Next button */}
      <button id="nextBtn" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i> {/* Font Awesome right arrow icon */}
      </button>
    </section>
  );
}

export default Home;
