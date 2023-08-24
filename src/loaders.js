import React, { useEffect, useState } from 'react'
import Gradientbg from './img/gradient-bg.jpg'
import { Vortex } from 'react-loader-spinner'




const Loaders = () => {
    return (

        <div className='loadrs_section'>
            <div className='loadrs_bg'>
                <img src={Gradientbg} className='img-fluid' alt="" />
            </div>

            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['#665DCD', '#5FA4E6', '#D2AB67', '#665DCD', '#5FA4E6', '#D2AB67']}
            />
        </div>

    );
}

export default Loaders
