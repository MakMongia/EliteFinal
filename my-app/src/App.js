import React from 'react';
import './App.test';
import Header from './Component/Header/Header';
import Home from './Component/Main/Home/Home';
import Schedule from './Component/Main/Schedule/Schedule';
import Program from './Component/Main/Program/Program';
import Events from './Component/Main/Events/Events';
import ContactUs from './Component/Main/ContactUs/ContactUs';
import Merch from './Component/Main/Merch/Merch'; 
import News from './Component/Main/News/News';
import Footer from './Component/Footer/Footer';
import ScrollToTopButton from './Component/Main/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Schedule />
      <Program />
      <Events />
      <News />
      <Merch />
      <ContactUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
