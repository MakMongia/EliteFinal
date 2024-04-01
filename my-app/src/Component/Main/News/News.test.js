import React from 'react';
import { render, screen } from '@testing-library/react';
import Transcript from '../Transcript/Transcript';
import Paragraph from '../Transcript/transcriptData'; 

describe('Transcript component', () => {
  // Mock audio reference for testing
  const audioRefMock = {
    current: {
      currentTime: 0,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
  };

  // Mock transcript text data
  const transcriptTextMock = [
    "First sentence.",
    "Second sentence.",
    "Third sentence.",
  ];

  // Test case: renders transcript without highlighting when audio is paused
  it('renders transcript without highlighting when audio is paused', () => {
    // Render the Transcript component with mock data
    render(<Transcript text={transcriptTextMock} audioRef={audioRefMock} />);

    // Get all paragraph elements rendered by the Transcript component
    const paragraphs = screen.getAllByRole('paragraph');

    // Assert that the correct number of paragraphs are rendered
    expect(paragraphs.length).toBe(3); 

    // Assert that each paragraph does not have the 'highlighted' class
    paragraphs.forEach((paragraph) => {
      expect(paragraph).not.toHaveClass('highlighted');
    });
  });
});
