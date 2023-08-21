import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/gravity_logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';


export default function Navbar() {
    const [menu, setmenu] = useState(false)

    if (menu === true) {
        document.body.classList.add('overflow-hidden')
    } if (menu === false) {
        document.body.classList.remove('overflow-hidden')
    }

    return (
        <>
            <div className={`blck_layers  ${menu === true ? 'd-block' : 'd-none'}`} onClick={() => setmenu(!menu)}>
            </div>
  
        
        <div className='Topbar'>
                <div className='Navbar_Section'>
                    <Link className='Logo_section'>
                        <img src={Logo} alt="" className='img-fluid' />
                    </Link>

                    <ul className={`Navbar_ul ${menu === true ? 'active' : ''}`}>
                        <li className='Nav_items'>
                            <Link className='Nav_link'>About Us</Link>
                        </li>
                        <li className='Nav_items'>
                            <Link className='Nav_link'>Our Services</Link>
                        </li>

                        <li className='Nav_items'><Link className='Nav_link'>Work with Us</Link></li>

                        <li className='Nav_items'><Link className='Nav_link'>Blog</Link></li>
                    </ul>

                    <div className='get_touch'>
                        <Link className='getin_Touch'>Get In Touch</Link>
                        <RiMenu3Fill className={`menu_icon d-lg-none d-block ${menu === true ? 'd-none' : ''}`} onClick={() => setmenu(!menu)} />

                        <MdClose className={`menu_icon d-lg-none d-block ${menu === true ? 'd-block' : 'd-none'}`} onClick={() => setmenu(!menu)} />
                    </div>
                </div>
            </div>
            </>
    )
}
