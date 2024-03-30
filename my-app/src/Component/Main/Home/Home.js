import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../../assets/images/Banner1.png';
import Banner2 from '../../../assets/images/Banner2.png';
import Banner3 from '../../../assets/images/Banner3.png';
import './Home.css'; // Import the external CSS file for other styles
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // We will handle dots manually
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: (index) => setCurrentSlide(index),
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index); // Go to the selected slide
  };

  const goToPrevSlide = () => {
    const prevSlide = currentSlide === 0 ? 2 : currentSlide - 1;
    setCurrentSlide(prevSlide);
    sliderRef.current.slickGoTo(prevSlide); // Go to the previous slide
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide === 2 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
    sliderRef.current.slickGoTo(nextSlide); // Go to the next slide
  };

  return (
    <ErrorBoundary>
      <section id="home" className="section-margintop">
        <div className="carousel-wrapper">
          <Slider {...settings} ref={sliderRef}>
            <div className="carousel-item">
              <img src={Banner1} alt="Image1" />
            </div>
            <div className="carousel-item">
              <img src={Banner2} alt="Image2" />
            </div>
            <div className="carousel-item">
              <img src={Banner3} alt="Image3" />
            </div>
          </Slider>
          <button id="prevBtn" className="prev" onClick={goToPrevSlide}>
            &#10094;
          </button>
          <button id="nextBtn" className="next" onClick={goToNextSlide}>
            &#10095;
          </button>
        </div>

        <div className="indicators">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
      </section>
    </ErrorBoundary>
  );
}

export default Home;
