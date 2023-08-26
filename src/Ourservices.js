import React, { useEffect } from 'react'
import Time from './img/time.svg'
import { Link, NavLink } from 'react-router-dom'
import arrow from './img/arrow.svg'
import MarketMaking from './img/Market_Making.png'
import Iconearlystage from './img/iconearlystage.svg'
import listingexchanges from './img/iconearlystage.svg'
import iconleadingmarket from './img/iconleadingmarket.svg'
import longtermfocusasset from './img/longtermfocusasset.png'
import upperright from './img/upperright.png'
import Logo from "./img/gravity_logo.png";
import Demo from "./img/demo.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Ourservices() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='main_Container'>
      <div className='bg_upperright'>
        <img src={upperright} alt="" />
      </div>
      <div className='bg_upperright2'>
        <img src={upperright} alt="" />
      </div>
      <div className='container_About'>
        <div className='TopCrypto_section'>
          <div className='TopCrypto_Contant order-1 order-lg-0' data-aos="fade-right">

            <h2 className='Top_hading'>Your Token’s Growth.
              Our Funding and Liquidity</h2>
            <p className='Liquidity_txt'>Accelerate your crypto business growth by trusting your liquidity needs to a top crypto market maker</p>
            <div className='d-flex justify-content-center justify-content-sm-start'>
              <Link class=" GetFree_btn mt-5" href="/">Get a free quote</Link>
            </div>

          </div>

          <div className='order-0 order-lg-1' data-aos="fade-left">
            <img src={MarketMaking} className='img-fluid' alt="" />
          </div>

        </div>

        <div className='Early_Stage_Section'>
          <ul>
            <li>
              <img src={Iconearlystage} alt="" />
              Early Stage Funding
            </li>
            <li>
              <img src={listingexchanges} alt="" />

              Listing on 25+ Exchanges
            </li>
            <li>
              <img src={iconleadingmarket} alt="" />

              Leading Market Makers
            </li></ul>
        </div>

        <div className='LongFocus_section'>
          <div className='LongFocus_Items' data-aos="zoom-in-up">
            <div className='LongFocus_Contant'>
              <h3>Long Term Focus</h3>
              <p>Gravity Team partners with remarkable crypto projects. We invest in building long-term, sustainable relationships and support our crypto projects along their growth journey with our industry expertise and network. Our partnerships are dynamic, enabling flexibility and speedy acceleration.</p>
            </div>
            <div className='longtermfocusasset_images'>
              <img src={longtermfocusasset} className='img-fluid' alt="" />
            </div>
          </div>
          <div className='Trading_section'>
            <div className='Trading_items' data-aos="zoom-in-up">
              <h3>Trusted Exchange Network</h3>
              <p>Our state of the art proprietary trading technology enables us to swiftly and reliably trade over 170+ digital assets and 1,200+ cryptocurrency pairs. Thanks to our advanced technology, we can quickly begin market making once a token is traded on our partner exchange. Yours could be one of them!</p>
            </div>

            <div className='Trading_items' data-aos="zoom-in-up">
              <h3>Trading 1,200+ Crypto-Asset Pairs</h3>
              <p>We service Centralized Spot and Derivatives fiat to crypto exchanges, providing 24/7/365 liquidity and coin market making services. We are a trusted partner and market makers for 25+ global and emerging exchanges in 15+ countries globally, making up to 30% of the trading volume on some of our partner exchanges. We also offer proactive support with getting listed on our partner as well as other leading Tier 1 and Tier 2 exchanges.</p>
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






    </div>

  )

}
