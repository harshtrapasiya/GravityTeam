import React, { useState } from 'react'
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Aboutmen from "./img/aboutmen.jpg";
import Logo from "./img/gravity_logo.png";
import Techchill from "./img/techchill.png";
import Bitcoin from "./img/bitcoin-.png";
import Hackcodex from "./img/hackcodex-.png";
import OwlCarousel2 from './OwlCarousel2'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function Aboutus() {

  const [philanthropy, setPhilanthropy] = useState(false)

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='main_Container'>

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


      <div className="Aboutteam_Content"><h1>
        Our Philanthropy & Sponsorships </h1></div>

      <div className='container_About '>
        <div className='Philanthropy_section'>

          <div className='Philanthropy_items' data-aos="fade-right">
            <div className='TechChill_contant'>
              <div className='Techchill_logo'>
                <img src={Techchill} alt="" className='img-fuild' />
              </div>
              <div className='CRYPTO_contant'>
                <p>
                  CRYPTO & TECHNOLOGY INDUSTRY</p>
                <span>TechChill</span>
              </div>
            </div>
            <div className='TechChill_txt'>
              <p>TechChill celebrates the best of the Baltic startup community by annually bringing together 2000+ attendees, including the fastest-growing startups, most innovative corporations, investors active in the region and talented tech enthusiasts. TechChill is organized by a non-profit foundation of the same name, empowering the Baltic startup ecosystem throughout the year.
              </p>
              <p className='mt-4'>We were one of the main sponsors of the TechChill 2022 conference.</p>
            </div>
          </div>

          <div className='Philanthropy_items' data-aos="fade-left">
            <div className='TechChill_contant'>
              <div className='Techchill_logo'>
                <img src={Bitcoin} alt="" className='img-fuild' />
              </div>
              <div className='CRYPTO_contant'>
                <p>
                  CRYPTO</p>
                <span>Bitcoin 2022 Conference</span>
              </div>
            </div>
            <div className='TechChill_txt'>
              <p>Bitcoin Miami is the largest Bitcoin event in the world, with over 35,000 attendees and more than 450 speakers. The event took place from the 6th- 9th of April at the Miami Beach Conference Center in Miami, USA.

              </p>
              <p className='mt-4'>We were the official sponsor of the Bitcoin 2022 conference.

              </p>
            </div>
          </div>

          <div className='Philanthropy_items' data-aos="fade-right">
            <div className='TechChill_contant'>
              <div className='Techchill_logo'>
                <img src={Hackcodex} alt="" className='img-fuild' />
              </div>
              <div className='CRYPTO_contant'>
                <p>
                  STARTUP ECOSYSTEM
                </p>
                <span>CodeX Hackathon
                </span>
              </div>
            </div>
            <div className='TechChill_txt'>
              <p>CodeX is an international 48-hour hackathon that brings together 300+ developers, designers, and other techies from all over Europe for a weekend of code. The hackers put their best effort to solve a variety of cutting-edge technology challenges, ranging from crypto, AR, 3D modeling and more.

              </p>
              <p className='mt-4'>We were one of the main sponsors of the CodeX 2022 hackathon.

              </p>
            </div>
          </div>

          <div className={`Hide_items  ${philanthropy === true ? 'd-grid' : 'd-none'}`}>
            <div className='Philanthropy_items' >
              <div className='TechChill_contant'>
                <div className='Techchill_logo'>
                  <img src={Techchill} alt="" className='img-fuild' />
                </div>
                <div className='CRYPTO_contant'>
                  <p>
                    CRYPTO & TECHNOLOGY INDUSTRY</p>
                  <span>TechChill</span>
                </div>
              </div>
              <div className='TechChill_txt'>
                <p>TechChill celebrates the best of the Baltic startup community by annually bringing together 2000+ attendees, including the fastest-growing startups, most innovative corporations, investors active in the region and talented tech enthusiasts. TechChill is organized by a non-profit foundation of the same name, empowering the Baltic startup ecosystem throughout the year.
                </p>
                <p className='mt-4'>We were one of the main sponsors of the TechChill 2022 conference.</p>
              </div>
            </div>

            <div className='Philanthropy_items'>
              <div className='TechChill_contant'>
                <div className='Techchill_logo'>
                  <img src={Bitcoin} alt="" className='img-fuild' />
                </div>
                <div className='CRYPTO_contant'>
                  <p>
                    CRYPTO</p>
                  <span>Bitcoin 2022 Conference</span>
                </div>
              </div>
              <div className='TechChill_txt'>
                <p>Bitcoin Miami is the largest Bitcoin event in the world, with over 35,000 attendees and more than 450 speakers. The event took place from the 6th- 9th of April at the Miami Beach Conference Center in Miami, USA.

                </p>
                <p className='mt-4'>We were the official sponsor of the Bitcoin 2022 conference.

                </p>
              </div>
            </div>

            <div className='Philanthropy_items'>
              <div className='TechChill_contant'>
                <div className='Techchill_logo'>
                  <img src={Hackcodex} alt="" className='img-fuild' />
                </div>
                <div className='CRYPTO_contant'>
                  <p>
                    STARTUP ECOSYSTEM
                  </p>
                  <span>CodeX Hackathon
                  </span>
                </div>
              </div>
              <div className='TechChill_txt'>
                <p>CodeX is an international 48-hour hackathon that brings together 300+ developers, designers, and other techies from all over Europe for a weekend of code. The hackers put their best effort to solve a variety of cutting-edge technology challenges, ranging from crypto, AR, 3D modeling and more.

                </p>
                <p className='mt-4'>We were one of the main sponsors of the CodeX 2022 hackathon.

                </p>
              </div>
            </div>

          </div>

        </div>

        <div className='LoadMore_items'>
            <p className='LoadMore_txt' onClick={() => setPhilanthropy(!philanthropy)} >{
          philanthropy === true ? ' Show less' : 'Load More'
        }</p></div>

        <OwlCarousel2/>

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
