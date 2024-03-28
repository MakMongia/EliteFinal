import React from 'react';
import Program1 from '../../../assets/images/Program1.jpg';
import Program2 from '../../../assets/images/Program2.jpg';

function Programs() {
  return (
    <section id="Program">
      <h1>Programs</h1>
      
      <div className="program-container">
        <div className="program-content">
          <h2>Season Kick-off Tournament</h2>
          <p className="left-aligned">Welcome to the Elite Hoops Club tournament, we are known for our Slam Dunks. We are announcing our Season kick-off tournament at the start of April. This is gonna be one of the best tournaments that this club has ever organized as we will have lots of celebrity guests like Justin Bieber and Michael Jordan. Please come and join us in this Season Tournament.</p>
        </div>
        
        <div className="program-image">
          <img src={Program1} alt="Program1" />
        </div>
      </div>
      
      <div className="program-container">
        <div className="program-content">
          <h2>Basketball Camps</h2>
          <p className="left-aligned">Elite Hoops Club also known as the best basketball club while Vic is announcing their Basketball Club. Please Join us in this Adventure with Daily Classes available for a wide range of club member levels. This year we will be having lots of amazing coaches like Larry Brown, Chuck Daly, and Jerry Sloan.</p>
        </div>
        
        <div className="program-image">
          <img src={Program2} alt="Program2" />
        </div>
      </div>
    </section>
  );
}

export default Programs;
