import React from 'react'
import "./navBar.css"
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    
    
    <nav className='navbar'>
      <div className='desktopMenu'>
        <img src={logo} alt='' className='logo' />
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </div>
    </nav>




  )
}

export default NavBar;
