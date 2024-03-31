import React from 'react';
import { render, screen } from '@testing-library/react';
import Transcript from '../Transcript/Transcript';
import Paragraph from '../Transcript/transcriptData'; // Import the Paragraph component

describe('Transcript component', () => {
  const audioRefMock = {
    current: {
      currentTime: 0,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
  };

  const transcriptTextMock = [
    "First sentence.",
    "Second sentence.",
    "Third sentence.",
  ];

  it('renders transcript without highlighting when audio is paused', () => {
    render(<Transcript text={transcriptTextMock} audioRef={audioRefMock} />);
    const paragraphs = screen.getAllByRole('paragraph');
    expect(paragraphs.length).toBe(3); // Ensure all paragraphs are rendered
    paragraphs.forEach((paragraph) => {
      expect(paragraph).not.toHaveClass('highlighted');
    });
  });

  it('renders transcript with highlighting based on audio time', () => {
    audioRefMock.current.currentTime = 5; // Set audio time to 5 seconds
    render(<Transcript text={transcriptTextMock} audioRef={audioRefMock} />);
    expect(screen.getByText('First sentence.')).toHaveClass('highlighted');
    expect(screen.getByText('Second sentence.')).toHaveClass('highlighted');
    expect(screen.getByText('Third sentence.')).not.toHaveClass('highlighted');
  });
});
