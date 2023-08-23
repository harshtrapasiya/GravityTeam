import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css'
import arrow from './img/arrow.svg'
import Blogpostscolabs from './img/Blogpostscolabs-.png'
import Cookie from './img/Cookie.png'
import colizeum from './img/colizeum.png'

const options = {
    loop: true,
    margin: 20,
    // autoplay:true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    },
};

export default function OwlCarousel2() {


    return (
        <div className='Compnay_Slidders OurInvestments_Sliders w-100 pt-0'>
            <OwlCarousel className='owl-theme' {...options}  >
                <div className='item'>
                    <div>
                        <img src={Blogpostscolabs} className='img-fluid' alt="" />
                    </div>
                    <ul className='Crypto_Ul'>
                        <li>Crypto Community</li>
                        <li>Investments</li>
                        <li>Partnerships</li>
                    </ul>
                    <p className='HashUp_txt'>HashUp Early Stage Investment Announcement</p>
                    <p className='we_are_txt'>
                        We are glad to share the news of our early stage investment in HashUp - the decentralized games marketplace and publishing platform that gives gamers freedom and developers new earning opportunities.                                                    </p>

                </div>

                <div className='item'>
                    <div>
                        <img src={Cookie} className='img-fluid' alt="" />
                    </div>
                    <ul className='Crypto_Ul'>
                        <li>Crypto Community</li>
                        <li>Investments</li>
                        <li>Partnerships</li>
                    </ul>
                    <p className='HashUp_txt'>Gravity Team Investment in Cookie3</p>
                    <p className='we_are_txt'>

                        Gravity Team invested in Cookie 3! Cookie 3 transforms on-chain data into behavioral profiles by interpreting data on NFTs, smart contracts, and tokens.                                                                                                       </p>


                </div>

                <div className='item'>
                    <div>
                        <img src={colizeum} className='img-fluid' alt="" />
                    </div>
                    <ul className='Crypto_Ul'>
                        <li>Crypto Community</li>
                        <li>Investments</li>
                        <li>Partnerships</li>
                    </ul>
                    <p className='HashUp_txt'>Colizeum Investment Announcement</p>
                    <p className='we_are_txt'>
                        
                    Gravity Team is excited&nbsp;to announce joining the $8.4 million funding round for Colizeum led by industry veterans, such as Deribit, SevenX Ventures, Axia8, LD Capital, and Genblock Capital. We are glad to be making our mark in supporting the growing web3 gaming ecosystem through investment in Colizeum, and making mobile esports accessible to everyone.                                                                                                         </p>


                </div>
                <div className='item'>
                    <div>
                        <img src={Blogpostscolabs} className='img-fluid' alt="" />
                    </div>
                    <ul className='Crypto_Ul'>
                        <li>Crypto Community</li>
                        <li>Investments</li>
                        <li>Partnerships</li>
                    </ul>
                    <p className='HashUp_txt'>HashUp Early Stage Investment Announcement</p>
                    <p className='we_are_txt'>
                        We are glad to share the news of our early stage investment in HashUp - the decentralized games marketplace and publishing platform that gives gamers freedom and developers new earning opportunities.                                                    </p>

                </div>

                <div className='item'>
                    <div>
                        <img src={Cookie} className='img-fluid' alt="" />
                    </div>
                    <ul className='Crypto_Ul'>
                        <li>Crypto Community</li>
                        <li>Investments</li>
                        <li>Partnerships</li>
                    </ul>
                    <p className='HashUp_txt'>Gravity Team Investment in Cookie3</p>
                    <p className='we_are_txt'>

                        Gravity Team invested in Cookie 3! Cookie 3 transforms on-chain data into behavioral profiles by interpreting data on NFTs, smart contracts, and tokens.                                                                                                       </p>


                </div>
                
                <div className='item'>
                    <div>
                        <img src={colizeum} className='img-fluid' alt="" />
                    </div>
                    <ul className='Crypto_Ul'>
                        <li>Crypto Community</li>
                        <li>Investments</li>
                        <li>Partnerships</li>
                    </ul>
                    <p className='HashUp_txt'>Colizeum Investment Announcement</p>
                    <p className='we_are_txt'>
                        
                    Gravity Team is excited&nbsp;to announce joining the $8.4 million funding round for Colizeum led by industry veterans, such as Deribit, SevenX Ventures, Axia8, LD Capital, and Genblock Capital. We are glad to be making our mark in supporting the growing web3 gaming ecosystem through investment in Colizeum, and making mobile esports accessible to everyone.                                                                                                         </p>


                </div>




            </OwlCarousel>

        </div>
    )
}
