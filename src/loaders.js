import React, { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'




const Loaders = () => {
    return (

        <div className= 'loadrs_section'>
             <ColorRing className='ColorRing' type="TailSpin" color="rgb(155, 236, 34)" height={70} width={70} timeout={5000}  />
        </div>

    );
}

export default Loaders
