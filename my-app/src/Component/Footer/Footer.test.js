// Footer.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    // Render the Footer component
    render(<Footer />);
  });

  it('renders logo and links correctly', () => {
    // Render the Footer component
    render(<Footer />);
    
    // Check if logo is rendered
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    // Check if footer links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Schedule')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Merch')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('navigates to correct section on link click', () => {
    // Render the Footer component
    render(<Footer />);
    
    // Mock window.location.href
    delete window.location;
    window.location = { href: '' };

    // Click on a link and check if window.location.href is updated
    fireEvent.click(screen.getByText('Contact Us'));
    expect(window.location.href).toBe('#contactus');
  });
});
