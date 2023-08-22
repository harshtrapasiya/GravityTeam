import React from 'react'
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Aboutmen from "./img/aboutmen.jpg";
import Logo from "./img/gravity_logo.png";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Aboutus() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>

      <div className='hero_section' data-aos="zoom-in" data-aos-duration="3000">
        <h1>Get to Know
          Gravity Team</h1>
        <p>Gravity Team is one of the top algorithmic market makers and liquidity providers in the crypto space.</p>
      </div>

      <div className='container_About'>
        <div className='crypto_Contant'>
          <div className='GravityTeam_content  order-1 order-lg-0' data-aos="fade-right">
            <p className='Gravity_colortxt'>Gravity Team is a crypto-native market maker founded by two childhood best friends Martins Benkitis and Edgars Laimite.  </p>
            <p className='mt-4'>In 2017, they noticed a big price disparity in Bitcoin markets across the world and identified an opportunity to provide everyone with fair crypto-asset pricing. They were soon joined by the third co-founder and CTO, Kriss Pujats.</p>
            <p className='mt-4'>Now, Gravity Team is one of the leading algorithmic crypto trading firms with a focus on making crypto markets more efficient and liquid.</p>
            <p className='mt-4'>We have a solid team of ~30 talented professionals, and we continue growing in team size, market volume, and global reach.</p>
          </div>

        

          <div className='about_images order-0 order-lg-1' data-aos="fade-left">
            <img src={Aboutmen} alt="" className='img-fluid' />
          </div>

        </div>

        <div className='About_section'>
          <div className='about_items'>
            <h2> ~$ <CountUp
              start={0}
              end={100}
              duration={5}
            /> billion</h2>

            <p>cumulative trading
              volume to date</p>
          </div>
          <div className='about_items'>
            <h2><CountUp
              start={0}
              end={0.8}
              duration={5}
            />%</h2>
            <p>of the global crypto spot trading volume</p>
          </div>
          <div className='about_items'>
            <h2>~ <CountUp
              start={0}
              end={30}
              duration={5}
            /></h2>
            <p>Gravity Teammates
              (& growing)</p>
          </div>
          <div className='about_items'>
            <h2><CountUp
              start={0}
              end={25}
              duration={5}
            />+</h2>
            <p>leading global and local crypto exchanges</p>
          </div>
          <div className='about_items'>
            <h2>2017</h2>
            <p>start, crypto-natives</p>
          </div>
          <div className='about_items'>
            <h2><CountUp
              start={0}
              end={1200}
              duration={5}
            />+</h2>
            <p>crypto-asset pairs</p>
          </div>
          <div className='about_items'>
            <h2>24/7</h2>
            <p>liquidity</p>
          </div>
          <div className='about_items'>
            <h2><CountUp
              start={0}
              end={5}
              duration={5}
            /> billion+</h2>
            <p>trades done to date</p>
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
