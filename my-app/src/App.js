import React from 'react';
import './App.test';
import Header from './Component/Header/Header';
import Home from './Component/Main/Home/Home';
import Schedule from './Component/Main/Schedule/Schedule';
import Program from './Component/Main/Program/Program';
import Events from './Component/Main/UpcomingEvents/upcomingEvents';
import ContactUs from './Component/Main/ContactUs/ContactUs';
import Merchandise from './Component/Main/Merchandise/Merchandise'; 
import News from './Component/Main/News/News';
import Footer from './Component/Footer/Footer';
import ScrollToTopButton from './Component/Main/ScrollToTop/ScrollToTop';
import Search from './Component/Main/searchBar/searchBar';
import errorBoundary from './Component/errorBoundary';
import Weather from './Component/Main/Weather/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Schedule />
      <Program />
      <Events />
      <News />
      <Weather />
      <Merchandise />
      <ContactUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
