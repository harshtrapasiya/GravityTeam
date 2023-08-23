import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Imageabout from './img/imageabout.jpg'
import Imagework from './img/imagework.jpg'
import Logo from "./img/gravity_logo.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Workwithus() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='main_Container'>
      <div className='hero_section' data-aos="zoom-in" data-aos-duration="3000">
        <h1>Join Our
          Growing Team </h1>
        <p>Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.</p>
        <Link className='openPo_txt'>Open Positions</Link>
      </div>

      <div className='container_About'>
        <div className='WorkWith_section'>
          <div className='WorkWith_items order-1 order-sm-0 ' data-aos="fade-right">
            <div>    <h3 className='Work_txt'>Work With Us
            </h3>
              <p className='Webring_txt'>We bring together top talent, science olympiad winners and great people who are experts in their respective fields, combining decades of experience.</p></div>
          </div>

          <div className='WorkWith_items order-0 order-sm-1' data-aos="fade-left">
            <img src={Imageabout} alt="" className='img-fluid' />
          </div>

          <div className='WorkWith_items order-3 'data-aos="fade-right">
            <img src={Imagework} alt="" className='img-fluid' />
          </div>

          <div className='WorkWith_items order-4' data-aos="fade-left">
            <div>    <h3 className='Work_txt'>Our Mission
            </h3>
              <p className='Webring_txt'>At Gravity Team, a quantitative proprietary trading firm, we are on the mission to balance the supply and demand across crypto markets around the world.</p></div>
          </div>

        </div>
      </div>

      <footer className='Footer_section'>

<div className='Footer_logo_section'>
  <div>
    <h6 className='Gravity_txt'>Gravity Team</h6>
    <ul className='about_Ul mt-4'>
      <li><Link>About Us</Link></li>
      <li><Link>Work with Us</Link></li>
    </ul>
  </div>
  <div>
    <img src={Logo} alt="" />
  </div>
</div>

<div className='Privacy_Policy'>
  <Link>Terms of Use & Privacy Policy</Link>
  <Link>©2022 Gravity Team. All Rights Reserved</Link>
</div>

</footer>
    </div>
  )
}
