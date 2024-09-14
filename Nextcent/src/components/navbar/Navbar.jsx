import React from 'react'

import "./navbar.css"

import Button from '../button/Button'

// import Arrow from "../../assets/Arrow.svg"
import Logo from "../../assets/Logo.svg"

const Navbar = () => {
  return (
    <div className="main_navigation">
        <nav>
            <img src={Logo} className='logo' alt="img" />
            <div className='group-link'>
                <ul>
                    <li><a className='link' href="#">Home</a></li>
                    <li><a className='link' href="#">Features</a></li>
                    <li><a className='link' href="#">Comunnity</a></li>
                    <li><a className='link' href="#">Blog</a></li>
                    <li><a className='link' href="#">Pricing</a></li>
                </ul>
                <Button name={"Register Now"}/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar