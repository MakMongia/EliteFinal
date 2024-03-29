import React from 'react';
import './App.test';
import Header from './Component/Header/Header';
import Home from './Component/Main/Home/Home';
import Schedule from './Component/Main/Schedule/Schedule';
import Program from './Component/Main/Program/Programs';
import Events from './Component/Main/Events/Events';
import ContactUs from './Component/Main/ContactUs/ContactUs';
import Merch from './Component/Main/Merch/Merch'; 
import News from './Component/Main/News/News';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <h1> Elite Hoops Club</h1>
      <Header />
      <Home />
      <Schedule />
      <Program />
      <Events />
      <News />
      <Merch />
      <ContactUs />
      <Footer />


    </div>
  );
}

export default App;
