import React from 'react'
import NavBar from '../../components/NavBar/navBar';
import Footer from '../../components/Footer/footer';
import ApplePay from "../../components/img/apple-pay-image.jpg";
import PayPal from "../../components/img/paypal-pay-image.png";
import Zelle from "../../components/img/zelle-pay-image.png";

import Medcine from "../../components/img/donate-medcine.jpg";
import Clothes from "../../components/img/donate-clothes.jpg";
import Food from "../../components/img/donate-food.jpg";
import Hygiene from "../../components/img/donate-hygene.jpg";
import Home from "../../components/img/donate-home.jpg";
import Toys from "../../components/img/donate-toys.png";

    

import "../../Pages/Donate/Donate.css";

function Donate() {
  return (
    
    <><NavBar />
    <div>
          <h1>Donate Page</h1>

          <h1>Make a Donation</h1>

        <div class="donation-methods">
          <div class="donation-method">
            <img src={ApplePay} alt="Apple Pay"/>
            <p>Donate with Apple Pay</p>
          </div>
          <div class="donation-method">
            <img src={PayPal} alt="PayPal"/>
            <p>Donate with PayPal</p>
          </div>
          <div class="donation-method">
            <img src={Zelle} alt="Zelle"/>
            <p>Donate with Zelle</p>
          </div>
        </div>

        <div class="clothing-equipment-section">
          <h2>Supporting Clothing and Equipment</h2>
          <p>Help provide clothing and essential equipment to those in need. Your contribution makes a direct impact on improving the lives of individuals facing challenges.</p>
        </div>

        <section>
          
          <div class="donation-items">
            <div class="donation-item">
              <img src={Medcine} alt="Medicine"/>
              <p>Medical Supplies</p>
            </div>
            <div class="donation-item">
              <img src={Clothes} alt="Clothes"/>
              <p>Clothes</p>
            </div>
            <div class="donation-item">
              <img src={Food} alt="Food"/>
              <p>Food</p>
            </div>
            <div class="donation-item">
              <img src={Hygiene} alt="Hygiene Products"/>
              <p>Hygiene Products</p>
            </div>
            <div class="donation-item">
              <img src={Home} alt="Home Essentials"/>
              <p>Home Essentials</p>
            </div>
            <div class="donation-item">
              <img src={Toys} alt="Toys and Games"/>
              <p>Toys and Games</p>
            </div>
            
          </div>
        </section>






        <div class="help-others-section">
          <h2>How Your Donation Helps Others</h2>
          <p>Your generous donation enables us to support communities in need. From providing basic necessities to offering education and healthcare, your contribution plays a vital role in creating positive change.</p>
        </div>




        <Footer />



      </div></>
  )
}

export default Donate
