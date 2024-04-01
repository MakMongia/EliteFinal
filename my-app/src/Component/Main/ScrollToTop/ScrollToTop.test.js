import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollToTopButton from './ScrollToTop';

describe('ScrollToTopButton component', () => {
  it('scroll-to-top button becomes visible after scrolling', () => {
    // Mock window scrollY to be greater than 200px
    Object.defineProperty(window, 'scrollY', { value: 201 });

    // Render the ScrollToTopButton component
    const { getByRole } = render(<ScrollToTopButton />);
    
    // Check if the scroll-to-top button becomes visible
    getByRole('button', { name: 'Go to top' });
  });

  it('click on scroll-to-top button scrolls to the top of the document', () => {
    // Create a mock for scrollTo method
    window.scrollTo = jest.fn();

    // Render the ScrollToTopButton component
    const { getByRole } = render(<ScrollToTopButton />);

    // Simulate click on the scroll-to-top button
    const scrollToTopButton = getByRole('button', { name: 'Go to top' });
    fireEvent.click(scrollToTopButton);

    // Check if scrollTo method was called with the correct arguments
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
