import React from 'react';
import myVideo from '../../../assets/other-assets/Video1.mp4';
import './News.css'; // Import the CSS file
  
  
function News() {
  return (
    <section id="news">
      <h1>News</h1>

      <div className="video-container">
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5t7E1qQWegI"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p className="video-description">
          Elite Hoops Club players became motivated by watching Mens Basketball Hype Video.
        </p>
      </div>

      <div className="video-container">
        <video id="myVideo" width="560" height="315" controls autoPlay>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-description">
          Passion and Dedication put in the last slam dunk performed by one of the best players.
        </p>
      </div>
    </section>
  );
}

export default News;
