// News.js
import React, { useRef } from 'react';
import myVideo from '../../../assets/other-assets/Video1.mp4';
import myAudio from '../../../assets/other-assets/Audio.mp3';
import './News.css'; // Import the CSS file
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary
import Transcript from '../Transcript/Transcript';
import transcriptText from '../Transcript/transcriptData'; // Import the transcript text

function News() {
  const audioRef = useRef(null);

  return (
    <ErrorBoundary>
      {/* errorBoundary added here */}
      <section id="news">
        <h1>News</h1>

        {/* First video container */}
        <div className="video-container">
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5t7E1qQWegI"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          {/* Description for the first video */}
          <p className="video-description">
            Elite Hoops Club players became motivated by watching Mens Basketball Hype Video.
          </p>
        </div>

        {/* Second video container */}
        <div className="video-container">
          <video id="myVideo" width="560" height="315" controls autoPlay>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Description for the second video */}
          <p className="video-description">
            Passion and Dedication put in the last slam dunk performed by one of the best players.
          </p>
        </div>

        {/* Audio container */}
        <div className="audio-container">
          <audio controls autoPlay ref={audioRef}>
            <source src={myAudio} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          {/* Description for the audio */}
          <p className="audio-description">
            Enjoy this motivational speech given by our CEO.
          </p>
          <Transcript
            text={transcriptText} // Pass the imported transcript text
            audioRef={audioRef}
          />
        </div>
      </section>
    </ErrorBoundary> /* errorBoundary ends here */
  );
}

export default News;
