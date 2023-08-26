import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import splideitem1 from "./img/splideitem1.jpeg"
import splideitem2 from "./img/splideitem2.jpg"
import splideitem3 from "./img/splideitem3.jpg"
import splideitem4 from "./img/splideitem4.jpg"
import splideitem5 from "./img/splideitem5.jpg"
import splideitem6 from "./img/splideitem6.jpg"
import './Splideslider.css'


const Splideslider = () => {
    return (
        <div>
            <div className="Aboutteam_Content"><h1>Life at Gravity Team</h1><p>
                We strive to make an environment where extraordinary people can excel, do and achieve the unimaginable.
            </p>
            </div>

            <Splide className='Splide_slider'
                options={{
                    perPage: 3,
                    gap: '2rem',
                    arrows: false,
                    breakpoints: {
                        575: {
                            perPage: 1,
                        },
                        768: {
                            perPage: 2,
                        },
                    },
                }}
                aria-label="React Splide Example">
                <SplideSlide className='splideitem'>
                    <img src={splideitem1} alt="" className='img-fluid' />
                </SplideSlide>
                <SplideSlide className='splideitem'>
                    <img src={splideitem2} alt="" className='img-fluid' />
                </SplideSlide>
                <SplideSlide className='splideitem'>
                    <img src={splideitem3} alt="" className='img-fluid' />
                </SplideSlide>
                <SplideSlide className='splideitem'>
                    <img src={splideitem4} alt="" className='img-fluid' />
                </SplideSlide>
                <SplideSlide className='splideitem'>
                    <img src={splideitem5} alt="" className='img-fluid' />
                </SplideSlide>
                <SplideSlide className='splideitem'>
                    <img src={splideitem6} alt="" className='img-fluid' />
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Splideslider;
