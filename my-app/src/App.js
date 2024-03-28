import React from 'react';
import './App.test';
import Header from './Component/Header/Header';
import Home from './Component/Main/Home';
import Schedule from './Component/Main/Schedule/Schedule';
import Program from './Component/Main/Program/Programs';
import Events from './Component/Main/Program/Events';

function App() {
  return (
    <div className="App">
      <h1> Elite Hoops Club</h1>
      <Header />
      <Home />
      <Schedule />
      <Program />
      <Events />
    </div>
  );
}

export default App;
