import React, { useEffect } from 'react'
import Time from './img/time.svg'
import { Link, NavLink } from 'react-router-dom'
import arrow from './img/arrow.svg'
import MarketMaking from './img/Market_Making.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Ourservices() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='main_Container'>
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
      </div>
    </div>
  )
}
