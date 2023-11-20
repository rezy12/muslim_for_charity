import React from 'react';
import NavBar from '../../components/NavBar/navBar';
import Instagram from "../../components/img/instagram.jpg";
import Snapchat from "../../components/img/snapchat.jpg";
import "../Contact/Contact.css";

function Contact() {
  return (
    <div>
        <NavBar />
        
        <header>
          <h1>Contact Us</h1>
        </header>

        <section>
          <p>We are genuinely excited about the opportunity to connect with you. Whether you find yourself with questions about our services, wish to provide valuable feedback, or have any other request, please know that we are here for you every step of the way. Your engagement is important to us, and we are committed to addressing any help that we can. Feel free to reach out with our community is at the heart of our mission.</p>

          <h2>Reach Out on Social Media:</h2>
          <p>Connect with us on your favorite social media platforms. Follow us for updates, behind-the-scenes, and exclusive content. Feel free to send us a message or tag us in your posts.</p>

          <ul>
            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/" target="_blank"></a></li>
            <img class="social-img" src={Instagram} alt="instagram Img"/>
            <li><strong>Snapchat:</strong> <a href="https://www.snapchat.com/" target="_blank"></a></li>
            <img class="social-img" src={Snapchat} alt="instagram Img"/>
            
          </ul>

          <h2>Contact Information:</h2>
          <p>If you prefer more traditional methods, you can also reach us via email or phone. We value your input and look forward to hearing from you.</p>

          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            
          </ul>

          <p>Together, we can create a ripple effect of kindness and compassion. If you have any questions or need further assistance, please feel free to reach out. Your support is truly appreciated.</p>
        </section>

        
    </div>
  )
}

export default Contact
