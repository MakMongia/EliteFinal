import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Merch from './Merchandise';

describe('Merch component', () => {
  // Test case to check if the component renders without crashing
  it('renders without crashing', () => {
    render(<Merch />);
  });

  // Test case to check if the merch image is displayed
  it('displays the merch image', () => {
    const { getByAltText } = render(<Merch />);
    const merchImage = getByAltText('Merch');
    expect(merchImage).toBeInTheDocument();
  });

  // Test case to check if the popup message is displayed when the image is clicked
  it('displays popup message when image is clicked', async () => {
    const { getByAltText, getByText } = render(<Merch />);
    const merchImage = getByAltText('Merch');
    fireEvent.click(merchImage);
    await waitFor(() => {
      const popupMessage = getByText('Congratulations! You\'ve discovered the secret code.');
      expect(popupMessage).toBeInTheDocument();
    });
  });

  // Test case to check if the popup message disappears after 7 seconds
  it('hides popup message after 7 seconds', async () => {
    jest.useFakeTimers();
    const { getByAltText, queryByText } = render(<Merch />);
    const merchImage = getByAltText('Merch');
    fireEvent.click(merchImage);
    // Fast-forward time by 7 seconds
    jest.advanceTimersByTime(7000);
    await waitFor(() => {
      const popupMessage = queryByText('Congratulations! You\'ve discovered the secret code.');
      expect(popupMessage).not.toBeInTheDocument();
    });
  });

  // Test case to check if the scale transform is applied on mouse over and reset on mouse out
  it('applies scale transform on mouse over and resets on mouse out', () => {
    const { getByAltText } = render(<Merch />);
    const merchImage = getByAltText('Merch');
    fireEvent.mouseOver(merchImage);
    expect(merchImage).toHaveStyle('transform: scale(1.03)');
    fireEvent.mouseOut(merchImage);
    expect(merchImage).toHaveStyle('transform: scale(1)');
  });
});
