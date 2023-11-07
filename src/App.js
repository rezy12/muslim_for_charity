
import React from 'react';
import NavBar from "./components/NavBar/navBar";
import Intro from "./components/Intro/Intro";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer"

import './App.css';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Intro />
      <Works />
      <Contact />
      <Footer />

    </div>



  );
}

export default App;
