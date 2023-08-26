import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './img/gravity_logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { useEffect } from 'react';



export default function Navbar() {
    const [menu, setmenu] = useState(false)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {
                (menu === true) ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
            }

            <div className={`blck_layers ${menu === true ? 'd-block' : 'd-none'}`} onClick={() => setmenu(!menu)}>
            </div>

            <div className='Topbar'>

                <div className='Navbar_Section'>
                    <NavLink className='Logo_section' to='/' >
                        <img src={Logo} alt="" className='img-fluid' />
                    </NavLink>

                    <ul className={`Navbar_ul d-lg-none d-block   ${menu === true ? 'active' : ''}`}>

                        <li className='Nav_items'>
                            <NavLink className='Nav_link' to="/about-us" onClick={() => setmenu(!menu)}>About Us</NavLink>
                        </li>

                        <li className='Nav_items'>
                            <NavLink to='/Ourservices' className='Nav_link' onClick={() => setmenu(!menu)}>Our Services</NavLink>
                        </li>

                        <li className='Nav_items'>
                            <NavLink to='/workwithus' className='Nav_link' onClick={() => setmenu(!menu)}>Work with Us</NavLink>
                        </li>

                        <li className='Nav_items'><NavLink className='Nav_link' to='/Blog' onClick={() => setmenu(!menu)}>Blog</NavLink></li>

                    </ul>

                    <ul className='Navbar_ul d-none d-lg-flex'>
                        <li className='Nav_items'>
                            <NavLink className='Nav_link' to="/about-us">About Us</NavLink>
                        </li>

                        <li className='Nav_items'>
                            <NavLink to='/Ourservices' className='Nav_link'>Our Services</NavLink>
                        </li>

                        <li className='Nav_items'>
                            <NavLink to='/workwithus' className='Nav_link'>Work with Us</NavLink>
                        </li>

                        <li className='Nav_items'><NavLink className='Nav_link' to='/Blog' >Blog</NavLink></li>
                    </ul>

                    <div className='get_touch'>
                        <Link className='getin_Touch' to='/getintouch'>Get In Touch</Link>
                        <RiMenu3Fill className={`menu_icon d-lg-none d-block ${menu === true ? 'd-none' : ''}`} onClick={() => setmenu(!menu)} />

                        <MdClose className={`menu_icon d-lg-none d-block ${menu === true ? 'd-block' : 'd-none'}`} onClick={() => setmenu(!menu)} />
                    </div>

                </div>

            </div>
        </>
    )
}