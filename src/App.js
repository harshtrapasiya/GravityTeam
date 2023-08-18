import './App.css';
import Heroimg from './img/hero-sec.png'
// import Sidede from './img/side_de.png'
import Portfolio from './img/Portfolio.png'
import Cyborg from './img/Cyborg_Investors.png'
import Markets from './img/Markets.png'
import Stock from './img/Stock_Screeners.png'
import dimand from './img/dimand.png'
import $ from 'jquery'
import React, { useContext, useEffect, useState } from 'react'

function App() {
  // $('.Stock_List li').click(function () {
  //   $(this).addClass('active').siblings().removeClass('active')
  // })

  let [isActive, setIsActive] = useState();

  return (
    <>

      <div className="App MinWidth">
        
        <section className="Topbar">
          <div className="row align-items-center">
            <div className='col-3'>
              <svg width="194" height="33" viewBox="0 0 194 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M81.0243 16.1157H68.0356V19.9381H76.7195C75.9402 23.4265 73.0455 25.8758 68.3325 25.8758C62.5061 25.8758 58.7208 21.8307 58.7208 16.5981C58.7208 11.2913 62.5804 7.24623 68.0727 7.24623C71.4869 7.24623 74.3815 8.95332 75.7175 11.3655L79.3915 9.25021C77.2019 5.57626 73.0084 3.08984 68.0727 3.08984C60.2795 3.08984 54.4531 9.10177 54.4531 16.561C54.4531 24.0202 60.2053 30.0322 68.2954 30.0322C75.9031 30.0322 81.0243 24.9851 81.0243 17.897V16.1157Z" fill="white" />
                <path d="M87.8205 21.9792H102.591C102.665 21.4596 102.739 20.8658 102.739 20.3092C102.739 14.9652 98.9537 10.512 93.4242 10.512C87.5978 10.512 83.627 14.7797 83.627 20.2721C83.627 25.8387 87.5978 30.0322 93.7211 30.0322C97.3579 30.0322 100.141 28.5106 101.848 25.9871L98.5455 24.0573C97.6548 25.3562 95.9848 26.3582 93.7582 26.3582C90.7894 26.3582 88.4514 24.8738 87.8205 21.9792ZM87.7834 18.7134C88.34 15.9301 90.3811 14.1488 93.3871 14.1488C95.7993 14.1488 98.1373 15.5219 98.6939 18.7134H87.7834Z" fill="white" />
                <path d="M126.528 10.512C124.042 10.512 122.075 11.514 120.85 13.4437C119.774 11.5882 117.993 10.512 115.58 10.512C113.28 10.512 111.461 11.4026 110.274 13.221V10.9944H106.266V29.5497H110.274V19.1587C110.274 15.7817 112.129 14.2601 114.393 14.2601C116.582 14.2601 117.881 15.7075 117.881 18.3052V29.5497H121.889V19.1587C121.889 15.7817 123.559 14.2601 125.934 14.2601C128.124 14.2601 129.534 15.7075 129.534 18.3052V29.5497H133.542V18.0454C133.542 13.4066 130.722 10.512 126.528 10.512Z" fill="white" />
                <path d="M148.334 10.512C145.439 10.512 143.25 11.6995 141.839 13.6293V3.57228H137.831V29.5497H141.839V26.8778C143.25 28.8446 145.439 30.0322 148.334 30.0322C153.381 30.0322 157.574 25.7644 157.574 20.2721C157.574 14.7426 153.381 10.512 148.334 10.512ZM147.703 26.2098C144.363 26.2098 141.839 23.7233 141.839 20.2721C141.839 16.8208 144.363 14.3344 147.703 14.3344C151.043 14.3344 153.566 16.8208 153.566 20.2721C153.566 23.7233 151.043 26.2098 147.703 26.2098Z" fill="white" />
                <path d="M169.965 30.0322C175.42 30.0322 179.762 25.7644 179.762 20.2721C179.762 14.7426 175.42 10.512 169.965 10.512C164.547 10.512 160.168 14.7426 160.168 20.2721C160.168 25.7644 164.547 30.0322 169.965 30.0322ZM169.965 26.1355C166.699 26.1355 164.176 23.6491 164.176 20.2721C164.176 16.895 166.699 14.4086 169.965 14.4086C173.231 14.4086 175.754 16.895 175.754 20.2721C175.754 23.6491 173.231 26.1355 169.965 26.1355Z" fill="white" />
                <path d="M193.378 14.8539V10.9944H188.776V5.79892L184.768 6.98646V10.9944H181.354V14.8539H184.768V23.7605C184.768 28.5848 187.217 30.2919 193.378 29.5497V25.95C190.335 26.0984 188.776 26.1355 188.776 23.7605V14.8539H193.378Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56002 0.847656H34.2704L42.4552 9.52065H13.0529L12.3898 10.2048L21.5201 19.7489L25.0082 15.7502H21.5695V12.8509H31.3846L21.6189 24.0462L8.36499 10.1916L11.8253 6.62138H35.7327L33.02 3.74692H9.83857L3.96669 10.1762L21.5328 28.5726L35.1125 13.336L37.2769 15.2651L21.6062 32.8477L0 10.2202L8.56002 0.847656Z" fill="#1588E0" />
              </svg>
            </div>
            <div className='col-6'>
              <ul className='Nav_Ul'>
                <li className='Nav_items'><a href="">About</a></li>
                <li className='Nav_items'><a href="">Strategy</a></li>
                <li className='Nav_items'><a href="">Dashboard</a></li>
              </ul>
            </div>
            <div className='col-3'>
              <div className='Login_sec'>
                <a href="#">Login</a>
                <a href="#" className='Signup_btn'>Sign up</a>
              </div>
            </div>
          </div>
        </section>

        <section className='containerX'>
          <div className='Hero_section'>
            <div className='Herosec_content'>
              <h1>Systematic</h1>
              <span className='Investment_txt'>Investment Tech</span>
              <p className='become_txt'>Become a cybor investor</p>
              <button className='Sign_btn'>Sign up</button>
            </div>

            <div className='Herosec_img'>
              <img src={Heroimg} className='img-fluid' alt="" />
            </div>
          </div>
        </section>

        <div className='Search_bar'>
          <p>Run stock search</p>
          <input type="search" placeholder='Search...' />
        </div>

        <div className="we_use_txt ">
          <p>We use a <b>hybrid human-machine</b> strategy, creating cyborg investors. And <b>now you can become one too.</b></p>
          <span>We use a hybrid human-machine strategy, creating cybor investors. And now you can become one too.</span>
        </div>

        <div className="containerX">
          <ul className="Stock_List  mt8">
            <li>Stock List</li>
            <li>Real-Time Sentiment Engine</li>
            <li>Strategy Builder & Backtesting</li>
            <li className="active">Portfolio Management</li>
          </ul>

          <div className="Portfolli_sec  mt6">
            <div className="row align-items-center">
              <div className="col-6">
                <img src={Portfolio} alt="" />
              </div>
              <div className="col-6 Portfolio_content">
                <p><b> Portfolio</b> Management</p>
                <span>Create & Share an eaasy & convenient List of stocks and crypto currencies where you can collaborate and discuss with other and how they will perform.</span>
              </div>
            </div>
          </div>

          <div className="Sollicitant_sec  mt6">
            <p className='Sollicitant_txt'>Sollicitant homines <b>non sunt nisi quam</b></p>
            <div className='Sollicitant_contnt mt14'>
              <div className='text-center'>
                <img src={Cyborg} className='img-fluid' alt="" />
              </div>
              <div className='SollicitantItem_content'>
                <p><b>Cyborg</b> Investors</p>
                <span>Machines can process large data sets, but humans are fundamentally better at understanding context, here at Gembot we take advantage of both.
                </span>
                <button className="Sign_btn mt-5">Sign up</button>
              </div>
            </div>

            <div className='Sollicitant_contnt mt14'>
              <div className='SollicitantItem_content'>
                <p><b>Markets &</b> Asset Types</p>
                <span>Explore and build systematic trading strategies across multiple markets and asset classes including stocks, bonds and crypto.
                  <span> We provide support for the US, LON, HK, NZ and ASX and Crypto markets</span>
                </span>
              </div>
              <div className='text-center'>
                <img src={Markets} className='img-fluid' alt="" />
              </div>

            </div>

            <div className='Sollicitant_contnt mt14'>
              <div className='text-center'>
                <img src={Stock} className='img-fluid' alt="" />
              </div>
              <div className='SollicitantItem_content'>
                <p>Stock <b>Screeners</b></p>
                <span>Use our stock screener to research and discover stocks that align with your investment strategies
                </span>
              </div>


            </div>

          </div>

        </div>

      </div>

      <section className="Join_bennar mb50 mt14">
        <img className='dimand_imges' src={dimand} alt="" />
        <div className="join_content">
          <h2>Join Gembot and become a Cyborf investor today</h2>
          <button>Join now</button>
        </div>
      </section>

      {/* 
          <div className='Side_de'>
          <img src={Sidede} alt="" />
          </div>
         */
      } 

    </>
  );
}

export default App;
