// Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders navigation links and logo', () => {
    render(<Header />);
    
    // Check if all navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Schedule')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.getByText('Merch')).toBeInTheDocument();
    expect(screen.getByText('ContactUs')).toBeInTheDocument();
    
    // Check if logo is present
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('Logo.png'); // Assuming 'Logo.png' is the correct path
  });
});
