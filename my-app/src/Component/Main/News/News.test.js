import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import News from './News';

describe('News component', () => {
  // Test case to check if the component renders without crashing
  it('renders without crashing', () => {
    render(<News />);
  });

  // Test case to check if the YouTube video is rendered
  it('renders YouTube video', () => {
    const { getByTitle } = render(<News />);
    const youTubeVideo = getByTitle('YouTube Video');
    expect(youTubeVideo).toBeInTheDocument();
  });

  // Test case to check if the first video description is displayed
  it('displays description for the first video', () => {
    const { getByText } = render(<News />);
    const videoDescription = getByText('Elite Hoops Club players became motivated by watching Mens Basketball Hype Video.');
    expect(videoDescription).toBeInTheDocument();
  });

  // Test case to check if the second video is rendered
  it('renders second video', () => {
    const { getByTestId } = render(<News />);
    const secondVideo = getByTestId('myVideo');
    expect(secondVideo).toBeInTheDocument();
  });

  // Test case to check if the second video description is displayed
  it('displays description for the second video', () => {
    const { getByText } = render(<News />);
    const videoDescription = getByText('Passion and Dedication put in the last slam dunk performed by one of the best players.');
    expect(videoDescription).toBeInTheDocument();
  });

  // Test case to check if the audio element is rendered
  it('renders audio element', () => {
    const { getByRole } = render(<News />);
    const audioElement = getByRole('audio');
    expect(audioElement).toBeInTheDocument();
  });

  // Test case to check if the audio description is displayed
  it('displays description for the audio', () => {
    const { getByText } = render(<News />);
    const audioDescription = getByText('Enjoy this motivational audio speech given by our CEO.');
    expect(audioDescription).toBeInTheDocument();
  });
});
