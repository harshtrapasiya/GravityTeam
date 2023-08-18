import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/gravity_logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';


export default function Navbar() {
    const [menu, setmenu] = useState(false)

    return (
        <div>
            <div className={`blck_layers  ${menu === true? 'd-block':'d-none'}`} onClick={()=> setmenu(!menu)}></div>
            <div className='Navbar_Section'>
                <Link className='Logo_section'>
                    <img src={Logo} alt="" className='img-fluid' />
                </Link>

                <ul className={`Navbar_ul ${menu === true ? 'active' : ''}`}>
                    <li className='Nav_items'>
                        <Link className='Nav_link'>About Us</Link>
                    </li>

                    <li className='Nav_items'>
                        <NavDropdown className='Nav_link' title="Our Services" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown></li>

                    <li className='Nav_items'><Link className='Nav_link'>Work with Us</Link></li>

                    <li className='Nav_items'><Link className='Nav_link'>Blog</Link></li>
                </ul>

                <div className='get_touch'>
                    <Link className='getin_Touch'>Get In Touch</Link>
                    <RiMenu3Fill className={`menu_icon d-lg-none d-block ${menu === true ? 'd-none':''}`} onClick={() => setmenu(!menu)} />

                    <MdClose className={`menu_icon d-lg-none d-block ${menu === true? 'd-block':'d-none'}`} onClick={() => setmenu(!menu)} />
                </div>
            </div>
        </div >
    )
}
