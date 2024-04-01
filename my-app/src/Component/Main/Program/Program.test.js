import React from 'react';
import { render, screen } from '@testing-library/react';
import Programs from './Program';

describe('Programs component', () => {
  // Test case: renders program images
  it('renders program images', () => {
    // Render the Programs component
    render(<Programs />);

    // Check if program images are rendered with correct alt text and source
    const programImages = screen.getAllByRole('img');
    // Ensure that there are exactly two program images
    expect(programImages).toHaveLength(2);
    // Assert attributes of the first program image
    expect(programImages[0]).toHaveAttribute('src', 'Program1.jpg');
    expect(programImages[0]).toHaveAttribute('alt', 'Season Kick-off Tournament');
    // Assert attributes of the second program image
    expect(programImages[1]).toHaveAttribute('src', 'Program2.jpg');
    expect(programImages[1]).toHaveAttribute('alt', 'Basketball Camps');
  });
});
