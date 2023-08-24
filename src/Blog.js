import React, { useEffect, useState } from 'react'
import Gradientbg from './img/gradient-bg.jpg'
import Topcryptomarketmakers from './img/topcryptomarketmakers.png'
import Time from './img/time.svg'
import arrow from './img/arrow.svg'
import { Link, NavLink } from 'react-router-dom'
import Isotope from './isotope'
import Logo from "./img/gravity_logo.png";
import 'bootstrap/dist/js/bootstrap.bundle'

import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Blog() {

  useEffect(() => {
    AOS.init();
}, [])


  return (
    <div className='Blog_bg'>
      <div className='Gradientbg'>
        <img src={Gradientbg} className='img-fluid' alt="" />
      </div>

      <div className='main_Container'>
        <div className='container_About'>
          <div className='blog_heading'>
            <h1>Gravity Team Blog</h1>
            <p>Be the first to know about Gravity Team news</p>
          </div>

          <div className='TopCrypto_section'>
            <div className='TopCrypto_Contant order-1 order-lg-0' data-aos="fade-right">
              <ul className=' Provision_Ul'>
                <li>Crypto Community</li>
                <li>Liquidity Provision</li>
              </ul>
              <h2 className='Top_hading'>Top Crypto Liquidity Providers Guide</h2>
              <p className='Liquidity_txt'>Liquidity plays a major role in attracting traders and investors. The ability to exchange an asset for cash quickly and participate in efficient markets reduce direct and indirect transaction costs. Thus, choosing a top liquidity provider is an important task. How to evaluate your market maker? Learn more in our blog.</p>
              <ul className='date_ul'>
                <li>May 13 2022</li>
                <li>
                  <img src={Time} alt="" />
                  <p>4 minutes</p>
                </li>
              </ul>

              <Link className='LearnMore_btn'>Read more <img src={arrow} alt="" /></Link>


            </div>

            <div className='order-0 order-lg-1'  data-aos="fade-left">
              <img src={Topcryptomarketmakers} className='img-fluid' alt="" />
            </div>

          </div>

          <div className='isotope_section'>


            <ul className='isotope_menu'>
              <li >All</li>
              <li>Conferences</li>
              <li>Crypto Community</li>
              <li>Crypto Market Making</li>
              <li>Donation</li>
              <li>Exchange Listing</li>
              <li>Gravity Team</li>
              <li>Gravity Team News</li>
              <li>Investments</li>
              <li>Liquidity Provision</li>
              <li>Partnerships</li>
              <li>Sponsorship Announcement</li>
              <li>Uncategorized</li>
              <li>Weekly Crypto Markets Insights</li>
            </ul>

            <div>

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


      </div>

    </div>
  )
}
