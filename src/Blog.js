import React, { useEffect, useState } from 'react'
import Gradientbg from './img/gradient-bg.jpg'
import Topcryptomarketmakers from './img/topcryptomarketmakers.png'
import Time from './img/time.svg'
import arrow from './img/arrow.svg'
import { Link, NavLink } from 'react-router-dom'
import Logo from "./img/gravity_logo.png";
import crypto101 from "./img/crypto101.png";
import Solanabreakpoint from "./img/Solanabreakpoint.png";
import Tokenlondon from "./img/tokenlondon.png";
import slippageherofinal from "./img/slippageherofinal.png";
import LiquiditMarkets from "./img/LiquiditMarkets.png";
import WeeklyCryptomarket from "./img/WeeklyCryptomarket.png";
import Contactbg1 from './img/Contact-bg1.png'
import Contactbg2 from './img/Contact-bg2.png'
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

            <div className='order-0 order-lg-1' data-aos="fade-left">
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

              <div className='isotope_Contant'>

                <div className='main_items' data-aos="fade-up" data-aos-duration="2000">

                  <div className="blog-listing-item__bg">
                    <div className="blog-listing-item__purple-blob u-purple-blob"></div>
                    <div className="blog-listing-item__gold-blob u-gold-blob"></div>
                    <div className="blog-listing-item__blue-blob u-blue-blob"></div>
                  </div>

                  <div className='isotope_items'>
                    <div className='isotope_images'>
                      <img src={crypto101} className='img-fluid' alt="" />
                    </div>
                    <ul className="Crypto_Ul"><li>Crypto Market Making</li><li>Liquidity Provision</li></ul>
                    <p className="HashUp_txt">Crypto Trading 101: Learn the Basics of Trading Crypto</p>
                    <p className='we_are_txt'>
                      "You got any Bitcoin?" One of the common openers in many social settings that leads the conversation into a spiral of whether crypto is a good investment. Today, we don't bother about the whys but rather discuss how to get your hands on some crypto and show you how to read the trading dashboard.  </p>
                    <ul className="date_ul justify-content-between ">
                      <li>May 13 2022</li>
                      <li><img src={Time} alt="" /><p>4 minutes</p></li>
                    </ul>
                  </div>
                </div>

                <div className='main_items mtop4' data-aos="fade-up" data-aos-duration="2000">

                  <div className="blog-listing-item__bg">
                    <div className="blog-listing-item__purple-blob u-purple-blob"></div>
                    <div className="blog-listing-item__gold-blob u-gold-blob"></div>
                    <div className="blog-listing-item__blue-blob u-blue-blob"></div>
                  </div>

                  <div className='isotope_items'>
                    <div className='isotope_images'>
                      <img src={slippageherofinal} className='img-fluid' alt="" />
                    </div>
                    <ul className="Crypto_Ul"><li>Crypto Market Making</li><li>Liquidity Provision</li></ul>
                    <p className="HashUp_txt">What is Slippage in Crypto & Its Impact on Your Profits</p>
                    <p className='we_are_txt'>

                      Welcome to the world of crypto trading. As you delve deeper into this market, you'll come across many technical terms and concepts that may initially take time to grasp. One of these concepts is slippage. But don't worry; we're here to break it down for you and make it easy to understand.                                              </p>
                    <ul className="date_ul justify-content-between ">
                      <li>Jan 13 2022</li>
                      <li><img src={Time} alt="" /><p>19 minutes</p></li>
                    </ul>
                  </div>
                </div>

                <div className='main_items' data-aos="fade-up" data-aos-duration="2000">

                  <div className="blog-listing-item__bg">
                    <div className="blog-listing-item__purple-blob u-purple-blob"></div>
                    <div className="blog-listing-item__gold-blob u-gold-blob"></div>
                    <div className="blog-listing-item__blue-blob u-blue-blob"></div>
                  </div>

                  <div className='isotope_items'>
                    <div className='isotope_images'>
                      <img src={Tokenlondon} className='img-fluid' alt="" />
                    </div>
                    <ul className="Crypto_Ul"><li>Conferences</li></ul>
                    <p className="HashUp_txt">TOKEN2049 London Conference Highlights</p>
                    <p className='we_are_txt'>

                      Our last 2022 crypto conferences series article covers TOKEN2049 London, which attracted primarily C-level attendees from 1,000 companies to talk about all things crypto in the capital of financial markets.                                              </p>
                    <ul className="date_ul justify-content-between ">
                      <li>May 13 2022</li>
                      <li><img src={Time} alt="" /><p>6 minutes</p></li>
                    </ul>
                  </div>
                </div>

                <div className='main_items mtop4' data-aos="fade-up" data-aos-duration="2000">

                  <div className="blog-listing-item__bg">
                    <div className="blog-listing-item__purple-blob u-purple-blob"></div>
                    <div className="blog-listing-item__gold-blob u-gold-blob"></div>
                    <div className="blog-listing-item__blue-blob u-blue-blob"></div>
                  </div>

                  <div className='isotope_items'>
                    <div className='isotope_images'>
                      <img src={Solanabreakpoint} className='img-fluid' alt="" />
                    </div>
                    <ul className="Crypto_Ul"><li>Conferences</li><li>Crypto Community</li></ul>
                    <p className="HashUp_txt">Solana Breakpoint – Conference Summary</p>
                    <p className='we_are_txt'>


                      Many novel announcements were made as Solana Breakpoint celebrated its ecosystem in Lisbon, Portugal, with over 70 speakers and 3,500 attendees from the Solana community.                                                                                        </p>
                    <ul className="date_ul justify-content-between ">
                      <li>Dec 13 2022</li>
                      <li><img src={Time} alt="" /><p>5 minutes</p></li>
                    </ul>
                  </div>
                </div>

                <div className='main_items' data-aos="fade-up" data-aos-duration="2000">

                  <div className="blog-listing-item__bg">
                    <div className="blog-listing-item__purple-blob u-purple-blob"></div>
                    <div className="blog-listing-item__gold-blob u-gold-blob"></div>
                    <div className="blog-listing-item__blue-blob u-blue-blob"></div>
                  </div>

                  <div className='isotope_items'>
                    <div className='isotope_images'>
                      <img src={LiquiditMarkets} className='img-fluid' alt="" />
                    </div>
                    <ul className="Crypto_Ul"><li>Crypto Market Making</li>
                      <li>Liquidity Provision</li>
                    </ul>
                    <p className="HashUp_txt">What Is Liquidity in Cryptocurrency Markets?</p>
                    <p className='we_are_txt'>


                      Liquidity plays a fundamental role within the cryptocurrency space. Among other things, it enables market participants to transact easily, thus ensuring a healthy functioning market.                                                                                       </p>
                    <ul className="date_ul justify-content-between ">
                      <li>May 13 2022</li>
                      <li><img src={Time} alt="" /><p>10 minutes</p></li>
                    </ul>
                  </div>
                </div>

                <div className='main_items mtop4' data-aos="fade-up" data-aos-duration="2000">

                  <div className="blog-listing-item__bg">
                    <div className="blog-listing-item__purple-blob u-purple-blob"></div>
                    <div className="blog-listing-item__gold-blob u-gold-blob"></div>
                    <div className="blog-listing-item__blue-blob u-blue-blob"></div>
                  </div>

                  <div className='isotope_items'>
                    <div className='isotope_images'>
                      <img src={WeeklyCryptomarket} className='img-fluid' alt="" />
                    </div>
                    <ul className="Crypto_Ul"><li>Weekly Crypto Markets Insights</li></ul>
                    <p className="HashUp_txt">Weekly Crypto Market Insights – 19th December</p>
                    <p className='we_are_txt'>
                      Prepare your coffee - it's Monday & time for the Weekly Crypto Market Insights! We collected the top news & market metrics, so you don't have to.                                                                                                                                    </p>
                    <ul className="date_ul justify-content-between ">
                      <li>Dec 19 2022</li>
                      <li><img src={Time} alt="" /><p>5 minutes</p></li>
                    </ul>
                  </div>
                </div>

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


      </div>

    </div>
  )
}
