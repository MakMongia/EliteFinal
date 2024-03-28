import React from 'react';
import './App.test';
import Header from './Component/Header/Header';
import Home from './Component/Main/Home';
import Schedule from './Component/Main/Schedule/Schedule';

function App() {
  return (
    <div className="App">
      <h1> Elite Hoops Club</h1>
      <Header />
      <Home />
      <Schedule />
      </div>
  );
}

export default App;
