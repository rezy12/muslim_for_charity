import React from 'react'
import "../Footer/footer.css"

const Footer = () => {
  return (
    
    <footer className='footer'>
    <div className='footer-content'>
      <div className='footer-logo'>
        
      </div>
      <div className='footer-links'>
        <ul>
          <li><a href="#Accessibilty">Accessibilty</a></li>
          <li><a href="#TermsOfUse">Terms Of Use</a></li>
          <li><a href="#FAQ">FAQ</a></li>
          <li><a href="#Careers">Careers</a></li>
        </ul>
      </div>
      <div className='footer-contact'>
        <p>Contact Us:</p>
        <p>Email: example@email.com</p>
        <p>Phone: +123456789</p>
      </div>
      <div className='footer-social'>
        <p>Follow Us:</p>
        <ul>
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
    <div className='footer-bottom'>
      <p>&copy; 2023 Your Company. All Rights Reserved.</p>
    </div>
  </footer>

  )
}

export default Footer
