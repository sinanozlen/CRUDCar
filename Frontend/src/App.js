import React from 'react';
import CarRegister from './components/CarRegister';
import CarUpdate from './components/CarUpdate';
import CarDelete from './components/CarDelete';
import './App.css';

function App() {
  return (
    <div>
      <div className="container"></div>
      <h1>Car Registration System</h1>
      <CarRegister />
      <CarUpdate />
      <CarDelete />
     
    </div>
  );
}

export default App;
