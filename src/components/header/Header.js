import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './Header.css'
import $ from 'jquery'

export const Header = () => {

    const showMenuHandler = () =>{
        $('.bar-1').toggleClass('bar-1-animation');
        $('.bar-2').toggleClass('bar-2-animation');
        $('.bar-3').toggleClass('bar-3-animation');
        $('.nav-menu').toggleClass('show-menu')
    }

  return (
    <div className="header">
        <div className="logo">
        {/* <Link to="/"><img src={Logo} alt="" width="346px"/></Link> */}
        </div>
        <div className="nav-button" onClick={showMenuHandler}>
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
        </div>
        <div className="nav-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#utility">Utility</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                {/* <li><a href="#prizes">Prizes</a></li> */}
                <li><a href="#team">Team</a></li>
                <li><a href="#faq">Faq</a></li>
                {/* <li><Link to="/freebies">Freebies</Link></li> */}
            </ul>
            {/* <a href="#whitepaper" className='whitepaper'>Whitepaper</a> */}
        </div>
    </div>
  )
}
