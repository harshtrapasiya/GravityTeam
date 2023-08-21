import React from 'react'
import { Link } from 'react-router-dom'
import MarketMaking from './img/Market_Making.png'
import Exchange from './img/exchange-.png'
import Background from './img/background.png'
import arrow from './img/arrow.svg'
import Bitbank from './img/bitbank.png'
import Binance from './img/binance.png'
import Bithumb from './img/bithumb.png'
import Bitstamp from './img/bitstamp.png'
import Coinbase from './img/coinbase.png'
import Bitfinex from './img/bitfinex.png'
import Middleleft from './img/middle-left.png'
import Trembg from './img/trem-bg.png'
import Contactbg1 from './img/Contact-bg1.png'
import Contactbg2 from './img/Contact-bg2.png'
import { useEffect } from 'react'
import CountUp from 'react-countup';
import Logo from './img/gravity_logo.png'



import AOS from 'aos';
import 'aos/dist/aos.css';
import OwlSlider from './OwlCarousel'



export default function Home() {


  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <div>

      <div className='hero_section' data-aos="zoom-in" data-aos-duration="3000">

        <h1>Balancing Crypto Markets </h1>
        <p>Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.</p>
        <Link className='get_btn'>Get in touch</Link>
      </div>

      <div className='Aboutteam_Content'>
        <h1>About Gravity Team </h1>
        <p>At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.</p>
      </div>

      <div className='container_About'>
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

      <div className='Aboutteam_Content'>
        <h1>Crypto Market Making </h1>
        <p>We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.</p>
      </div>

      <div className='container_About'>

        <div className='crypto_section'>
          <div className='bg_items'>
            <img src={Background} alt="" className='img-fluid' />
          </div>
          <div className='crypto_Contant'>
            <div className='MarketMaking_contant  order-1 order-lg-0' data-aos="fade-right">
              <h2>Market Making for Crypto Projects</h2>
              <b>Accelerate your token’s journey by boosting its liquidity</b>
              <p>We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.</p>
              <Link className='LearnMore_btn'>Learn More <img src={arrow} alt="" /></Link>
            </div>

            <div className='order-0 order-lg-1 ' data-aos="fade-left">
              <img src={MarketMaking} alt="" className='img-fluid' />
            </div>
          </div>

          <div className='crypto_Contant'>
            <div data-aos="fade-right">
              <img src={Exchange} alt="" className='img-fluid' />
            </div>
            <div className='MarketMaking_contant' data-aos="fade-left">
              <h2>Market Making for Crypto Exchanges</h2>
              <b>Attract more traders and projects with deep order books & liquidity</b>
              <p>Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.</p>
              <Link className='LearnMore_btn'>Learn More <img src={arrow} alt="" /></Link>
            </div>

          </div>

        </div>

        <div className='our_partners_section'>
          <div className='middleleft_bg'>
            <img src={Middleleft} className='img-fluid' alt="" />
          </div>
          <div className='ourpartners_txt'>
            <h2>Our Partners & Friends</h2>
          </div>

          <div className="marquee-wrapper">
            <div className="containers">
              <div className="marquee-block">
                <div className="marquee-inner to-left">
                  <div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitbank} alt="Natural" className="img-fluid" />
                        <p>bitbank</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Binance} alt="Natural" className="img-fluid" />
                        <p>Binance</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bithumb} alt="Natural" className="img-fluid" />
                        <p>Bithumb</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitbank} alt="Natural" className="img-fluid" />
                        <p>bitbank</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Binance} alt="Natural" className="img-fluid" />
                        <p>Binance</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bithumb} alt="Natural" className="img-fluid" />
                        <p>Bithumb</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitbank} alt="Natural" className="img-fluid" />
                        <p>bitbank</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Binance} alt="Natural" className="img-fluid" />
                        <p>Binance</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bithumb} alt="Natural" className="img-fluid" />
                        <p>Bithumb</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              <div className="marquee-block">
                <div className="marquee-inner to-right">
                  <div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitstamp} alt="Natural" className="img-fluid" />
                        <p>bitstamp</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Coinbase} alt="Natural" className="img-fluid" />
                        <p>Coinbase</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitfinex} alt="Natural" className="img-fluid" />
                        <p>bitfinex</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitstamp} alt="Natural" className="img-fluid" />
                        <p>bitstamp</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Coinbase} alt="Natural" className="img-fluid" />
                        <p>Coinbase</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitfinex} alt="Natural" className="img-fluid" />
                        <p>bitfinex</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitstamp} alt="Natural" className="img-fluid" />
                        <p>bitstamp</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Coinbase} alt="Natural" className="img-fluid" />
                        <p>Coinbase</p>
                      </div>
                    </div>
                    <div className="marquee-item">
                      <div className='Contant_name'>
                        <img src={Bitfinex} alt="Natural" className="img-fluid" />
                        <p>bitfinex</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='good_company_section'>
          <h2>We are in a good company</h2>
          <p>Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</p>

          <OwlSlider />

        </div>

        <div className='Join_team_section'>
          <div className='Join_heading'>
            <h2>Join
              Gravity Team
            </h2>
            <div className='trem_bg'>
              <img src={Trembg} alt="" />
            </div>
          </div>

          <div className='Join_Contant'>
            <p>Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.</p>
            <p className='mt-3'>As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!</p>
            <Link className='Learn_link'>Learn more about working with us
              <img src={arrow} alt="" /></Link>
          </div>



        </div>

        <div className='Contact_section'>
          <div className="Aboutteam_Content ">
            <h1>Contact Us </h1>
            <p>We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!</p>
            <Link className='get_btn'>Get in touch</Link>
          </div>

          <div className='Contactbg1'>
            <img src={Contactbg1} className='img-fluid' alt="" />
          </div>

          <div className='Contactbg2'>
            <img src={Contactbg2} className='img-fluid' alt="" />
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

