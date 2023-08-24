import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Imageabout from './img/imageabout.jpg'
import Imagework from './img/imagework.jpg'
import Logo from "./img/gravity_logo.png";
import Focuse from "./img/focuse.svg";
import Transparency from "./img/transparency.svg";
import Discovery from "./img/discovery.svg";
import Mentality from "./img/mentality.svg";

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
                    <div className='WorkWith_items order-1 order-sm-0 ' data-aos="fade-right" data-aos-duration="1000">
                        <div>    <h3 className='Work_txt'>Work With Us
                        </h3>
                            <p className='Webring_txt'>We bring together top talent, science olympiad winners and great people who are experts in their respective fields, combining decades of experience.</p></div>
                    </div>

                    <div className='WorkWith_items order-0 order-sm-1' data-aos="fade-left" data-aos-duration="2000">
                        <img src={Imageabout} alt="" className='img-fluid' />
                    </div>

                    <div className='WorkWith_items order-3 ' data-aos="fade-right" data-aos-duration="3000">
                        <img src={Imagework} alt="" className='img-fluid' />
                    </div>

                    <div className='WorkWith_items order-4' data-aos="fade-left" data-aos-duration="4000">
                        <div>
                            <h3 className='Work_txt'>Our Mission</h3>
                            <p className='Webring_txt'>At Gravity Team, a quantitative proprietary trading firm, we are on the mission to balance the supply and demand across crypto markets around the world.</p>
                        </div>
                    </div>

                </div>
                <div className="Aboutteam_Content"><h1>Our Values & Culture</h1></div>
                <div className='Focuse_section'>

                    <div className='boxes__item' data-aos="zoom-in-up">
                        <div className="boxes__item-bg">
                            <div className="boxes__item-purple-blob u-purple-blob"></div>
                            <div className="boxes__item-gold-blob u-gold-blob"></div>
                            <div className="boxes__item-blue-blob u-blue-blob"></div>
                        </div>

                        <div className='Focuse_items'>

                            <div className='Focuse_imges'>
                                <img src={Focuse} alt="" className='img-fluid' />
                                <p>Focus On The Markets</p>
                            </div>
                            <p className='Focuse_Cotant'>First question we ask before starting any project: how will it make crypto markets better? With better, we mean better price discovery, more liquidity and fewer transaction costs. In doing so, we act as an invisible force that brings sanity to the markets. Our goal is to make crypto markets a better place for everyone and, in return, the markets naturally reward us.</p>
                        </div>
                    </div>

                    <div className='boxes__item ' data-aos="zoom-in-up">
                        <div className="boxes__item-bg">
                            <div className="boxes__item-purple-blob u-purple-blob"></div>
                            <div className="boxes__item-gold-blob u-gold-blob"></div>
                            <div className="boxes__item-blue-blob u-blue-blob"></div>
                        </div>

                        <div className='Focuse_items'>

                            <div className='Focuse_imges'>
                                <img src={Transparency} alt="" className='img-fluid' />
                                <p>Focus On The Markets</p>
                            </div>
                            <p className='Focuse_Cotant'>We value meaningful, transparent and clear relationships with our stakeholders, be it exchanges, partners, token-projects or our colleagues. We prefer speaking our minds instead of staying silent. This also means that we discuss our successes and failures with everyone within the company and are open about the performance agreements with colleagues. By being completely honest and transparent, we hope to see the same from others in our pursuit to create better markets.By being completely honest and transparent, we hope to see the same from others in our pursuit to create better markets.</p>
                        </div>
                    </div>

                    <div className='boxes__item mtopmin' data-aos="zoom-in-up">
                        <div className="boxes__item-bg">
                            <div className="boxes__item-purple-blob u-purple-blob"></div>
                            <div className="boxes__item-gold-blob u-gold-blob"></div>
                            <div className="boxes__item-blue-blob u-blue-blob"></div>
                        </div>

                        <div className='Focuse_items'>

                            <div className='Focuse_imges'>
                                <img src={Mentality} alt="" className='img-fluid' />
                                <p>Focus On The Markets</p>
                            </div>
                            <p className='Focuse_Cotant'>We value meaningful, transparent and clear relationships with our stakeholders, be it exchanges, partners, token-projects or our colleagues. We prefer speaking our minds instead of staying silent. This also means that we discuss our successes and failures with everyone within the company and are open about the performance agreements with colleagues. By being completely honest and transparent, we hope to see the same from others in our pursuit to create better markets.By being completely honest and transparent, we hope to see the same from others in our pursuit to create better markets.</p>
                        </div>
                    </div>

                    <div className='boxes__item' data-aos="zoom-in-up">
                        <div className="boxes__item-bg">
                            <div className="boxes__item-purple-blob u-purple-blob"></div>
                            <div className="boxes__item-gold-blob u-gold-blob"></div>
                            <div className="boxes__item-blue-blob u-blue-blob"></div>
                        </div>

                        <div className='Focuse_items'>

                            <div className='Focuse_imges'>
                                <img src={Discovery} alt="" className='img-fluid' />
                                <p>Focus On The Markets</p>
                            </div>
                            <p className='Focuse_Cotant'>First question we ask before starting any project: how will it make crypto markets better? With better, we mean better price discovery, more liquidity and fewer transaction costs. In doing so, we act as an invisible force that brings sanity to the markets. Our goal is to make crypto markets a better place for everyone and, in return, the markets naturally reward us.</p>
                        </div>
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