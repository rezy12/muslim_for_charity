
import React from 'react';
import NavBar from "./components/NavBar/navBar";
import Intro from "./components/Intro/Intro";
import History from "./components/Works/works";
import Footer from "./components/Footer/footer"

import './App.css';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Intro />
      <History />
      <Footer />

    </div>



  );
}

export default App;
