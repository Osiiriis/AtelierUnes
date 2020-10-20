import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar"
import Slider from "./components/Slider/Slider"
import Sales from "./components/Sales/Sales"
import Parra from "./components/Parralax/Parralax"
import Why from "./components/Why/Why"
import Palette from "./components/palette/palette"

function App () {
  return (
    <>
    <div className="App">
      <NavBar />
    </div>
    <div className='HeroSection'>
      <Slider />
      <Sales />
    </div>
    <Parra />
    <Why />
    <Palette />
    </>
  );
}
export default App;
