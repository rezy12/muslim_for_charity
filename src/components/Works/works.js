import React from 'react';
import "../Works/works.css";
import Food from "../img/food-img.png";
import Medcine from "../img/med-img.png";
import Money from "../img/money-img.jpg";


const Works = () => {
  return (
    <div>
      <h1>Works</h1>
      <p>
      We are dedicated to making a positive impact by accepting donations in the form of money, medicine, and food. Our mission is to provide support to those in need and create a better future for our community.
    </p>

      <section>
      <div class="project-box">
      <img class="project-image" src={Food} alt="Food image"/>
      <p class="project-description">Help us combat hunger and food insecurity by donating non-perishable food items or fresh produce. Your contributions provide nourishment to those in need. Help a Child to Adults with can foods to frozen foods</p>
    </div>
    <div class="project-box">
      <img class="project-image" src={Medcine} alt="Medcine image"/>
      <p class="project-description">Support our healthcare initiatives by donating essential medicines and medical supplies. Your contributions aid in improving access to healthcare services for underserved communities.</p>
    </div>
    <div class="project-box">
      <img class="project-image" src={Money} alt="Money image"/>
      <p class="project-description">Our mission by making a financial donation. Your monetary support empowers us to fund various projects and programs that make a positive impact on individuals and communities in need.</p>
    </div>
      </section>



    </div>
  )
}

export default Works
