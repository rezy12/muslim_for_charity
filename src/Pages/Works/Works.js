import React from 'react'
import NavBar from '../../components/NavBar/navBar'
import GroupImg from "../../components/img/groupimg.jpg";
import Firstdontaion from "../../components/img/1mission.jpg"
import Sec_dontaion from "../../components/img/mission2.png"
import "../Works/Works.css"

function Works() {
    return (
    
        <><NavBar />
        
        <header>
          <h1>Recent Works</h1>
          <img  className="GroupImg" src={GroupImg} alt="Group Image"/>
        </header>

        <div class="donation-info">
          <div class="mission">
            <h2>Our Mission</h2>
            <p>To help those in need, Many Muslim brothers and sister that have trouble in gathering supplies and make ends meet. We as an organization try our best to help in any way we can.</p>
          </div>

          <div class="amount-raised">
            <h2>Amount Raised</h2>
            <p>$2,457</p>
            <h2>Families we helped:</h2>
            <li>4 familes : Texas</li>
            <li>13 familes : Syria</li>
            <li>2 familes : Jordan</li>
            <li><a href='google.com'>Many More:</a></li>
          </div>
        </div>

        <div class="goal-section">
          <h2>Pass History</h2>
          <p>Join us in making a difference. Your contributions help us achieve our mission of providing aid and support to those in need. Together, we can create positive change and improve lives. Join our cause today!</p>
          <img src="" alt="" />
       
        </div>

        <div class="past1">
          <div class="pastimg">
              <img src={Firstdontaion} alt="first dontain" />
            
          </div>

          <div class="pastimg">
            <h2>Food Donation</h2>
            <li>August 15, 2023</li>
            <p>we were able to serve nutritious meals to <strong>25 families</strong>. Your contributions, both in kind and financial, made a tremendous impact, helping us <strong>raise $500</strong> to further our mission. Together, we are creating positive change, one meal at a time. Thank you for being a part of this compassionate journey, and stay tuned for more opportunities to make a difference in the lives of those in need.</p>
          </div>
        </div>

        <div class="past2">

          <div class="pastimg">
            <h2>Food Donation</h2>
            <li>October 15, 2023</li>
            <p>Thanks to your incredible generosity, we received essential items such as gloves, medicine, clothes, and household utilities. These vital contributions have empowered us to extend a helping hand to <strong>26 families</strong> in need. Your support not only provides necessary resources but also brings hope and comfort to those facing challenging times. Together, we are making a meaningful impact on the well-being of our community. Thank you for being a crucial part of our mission to create a healthier and more compassionate world.</p>
          </div>

          <div class="pastimg">
              <img src={Sec_dontaion} alt="first dontain" />
            
          </div>

          
        </div>

        </>
      )
}

export default Works
