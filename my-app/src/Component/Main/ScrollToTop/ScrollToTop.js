import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Import the CSS file
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 200px from the top of the document
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Function to scroll to the top of the document smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ErrorBoundary> {/* errorBoundary added here */}
      <button
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Go to top"
      >
        <i className="fas fa-chevron-up"></i> {/* Font Awesome up arrow icon */}
      </button>
    </ErrorBoundary> /* errorBoundary ends here */
  );
}

export default ScrollToTopButton;
