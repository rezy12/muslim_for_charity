import React from 'react'
import "./navBar.css"
import logo from "../img/logo.jpg"


const NavBar = () => {
  return (
    
    
    <nav className='navbar'>
      <div className='desktopMenu'>
        <img src={logo} alt='' className='logo' />
        <div className='nav-links'>
          <a href="#intro">Home</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
          <a href="#donate">Donate</a>
        </div>
      </div>
    </nav>




  )
}

export default NavBar;
