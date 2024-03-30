import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../../assets/images/Banner1.png';
import Banner2 from '../../../assets/images/Banner2.png';
import Banner3 from '../../../assets/images/Banner3.png';
import './Home.css';
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function Home() {
  const SampleNextArrow = props => {
    const { onClick } = props;
    return (
      <button className="arrow next" onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
      </button>
    );
  };

  const SamplePrevArrow = props => {
    const { onClick } = props;
    return (
      <button className="arrow prev" onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="dot"></button>
    )
  };

  return (
    <ErrorBoundary>
      <section id="home" className='section-margintop'>
        <Slider {...settings}>
          <div>
            <img src={Banner1} alt="Image1" className="carousel-image" />
          </div>
          <div>
            <img src={Banner2} alt="Image2" className="carousel-image" />
          </div>
          <div>
            <img src={Banner3} alt="Image3" className="carousel-image" />
          </div>
        </Slider>
      </section>
    </ErrorBoundary>
  );
}

export default Home;
