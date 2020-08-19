import React from 'react';
import './App.css';
import Calculator from './Calculator';



function App() {
  return (
    <div className="App">
      <header>World's Greatest Temperature Converter</header>
      {/* This creates the instance of Calculator */}
      <Calculator />

    </div>
  );
}

export default App;
