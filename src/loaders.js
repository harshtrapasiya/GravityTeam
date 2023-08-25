import React, { useEffect, useState } from 'react'
import Gradientbg from './img/gradient-bg.jpg'
import { Vortex } from 'react-loader-spinner'




const Loaders = () => {
    return (

        <div className='loadrs_section'>

            <div className='loadrs_bg'>
                <img src={Gradientbg} className='img-fluid' alt="" />
            </div>

            <div className='bg_linear'></div>


            <div className='d-grid'>
                <Vortex
                className="txtss"
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['#665DCD', '#5FA4E6', '#D2AB67', '#665DCD', '#5FA4E6', '#D2AB67']}
                />
                <div class="txt" id="txt">
                    <b>G</b><b>R</b><b>A</b><b>V</b><b>I</b><b>T</b><b>Y</b>
                    &nbsp;  <b>T</b><b>E</b><b>A</b><b>M</b>
                </div>
            </div>
        </div>

    );
}

export default Loaders
