import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css'
import arrow from './img/arrow.svg'


import Bitkublogo from './img/bitkub-logo.png'


export default function OwlSlider() {

    const options = {
        // navText: [<AiOutlineArrowLeft />, <AiOutlineArrowLeft/>], 
        // navText: [ <FaChevronLeft size={24}/> ,<FaChevronLeft size={24}/>],

    };

    return (
        <div className='Compnay_Slidders'>
            <OwlCarousel options={options} className='owl-theme ' nav="true" items="1" autoplay="true"   >
                <div className='item'>
                    <p className='Slider_Contant'>Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.
                    </p>
                    <h3 className='Atthakrit_txt'>Atthakrit Chimplapibul</h3>
                    <ul className='CoFounder_Ul'>
                        <li className='co_text'>Co-founder & CEO of Bitkub</li>
                        <li> <img src={Bitkublogo} alt="" /> </li>
                    </ul>
                </div>
                <div className='item'>
                    <p className='Slider_Contant'>Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.
                    </p>
                    <h3 className='Atthakrit_txt'>Atthakrit Chimplapibul</h3>
                    <ul className='CoFounder_Ul'>
                        <li className='co_text'>Co-founder & CEO of Bitkub</li>
                        <li> <img src={Bitkublogo} alt="" /> </li>
                    </ul>
                </div>
                <div className='item'>
                    <p className='Slider_Contant'>Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.
                    </p>
                    <h3 className='Atthakrit_txt'>Atthakrit Chimplapibul</h3>
                    <ul className='CoFounder_Ul'>
                        <li className='co_text'>Co-founder & CEO of Bitkub</li>
                        <li> <img src={Bitkublogo} alt="" /> </li>
                    </ul>
                </div>


            </OwlCarousel>
        </div>
    )
}
