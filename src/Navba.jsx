import React, {useEffect, useRef, useState} from 'react';
import logo from "./images/logo.png";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

  const Navba = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
  
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle(
        "responsive_nav"
      );
    };
    useEffect(() => {
      const handleDropdownClick = () => {
        if ($(window).width() <= 992) {
          $(".menu-bar li .submenu").toggleClass("add-submenu");
        }
      };
  
      const handleEventAnimations = () => {
        // Place the corresponding animations and waypoints here.
        // The 'waypoints' library can be used for this purpose in React as well.
        // However, implementing the exact same animations as in the jQuery code may require additional effort.
  
        // Example using 'waypoints':
        // $(".event").waypoint(function() {
        //   // Animation code here
        // }, {
        //   offset: "70%"
        // });
  
        // More animations can be added as needed.
      };
  
      // Bind the click event for the dropdown
      $(".dropdown").on("click", handleDropdownClick);
  
      // Bind the animation events for the elements
      handleEventAnimations();
  
      // Clean up event listeners when the component unmounts
      return () => {
        $(".dropdown").off("click", handleDropdownClick);
        // Remove other event listeners if needed
      };
    }, []);
  return (
    <>
    <div className="header-top">
    <div className="container">
      <div className="row">
        <div className="header-top-left">
          <a target="_blank" href="https://web.facebook.com/kingdomwealthministry/">
          <SocialIcon network='facebook' style={{width: 25, height:25}} />          </a>
          <a href="https://www.instagram.com/kingdomwealthministry/" target="_blank">
          <SocialIcon network='instagram' style={{width: 25, height:25}} />          </a>
          <a href="https://www.youtube.com/@kingdomwealthministry_" target="_blank">
          <SocialIcon network='youtube' style={{width: 25, height:25}} />          </a>
          <a href="https://www.tiktok.com/@kingdomwealthministry" target="_blank">
          <SocialIcon network='tiktok' style={{width: 25, height:25}} />          </a>
        </div>
        <div className="header-top-right">
                    <Link to='/contact'><a className="top-wrap">Plan your visit</a></Link>
                    <Link to='/event'><a className="top-wrap">Calendar</a></Link>
                    <Link to='/contact'><a className="top-wrap">Donate Now</a></Link>
        </div>
      </div>
    </div>
  </div>
    <div className="menu">
    <div className="container">
      <div className="row">
          {/* <nav className="navbar">
            <div className="nav-wrapper">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="overlay"></div>
              <div className="nav-menu">
                <a href="#" className="close">
                  <i className="fa fa-times"></i>
                </a>
                <ul className="nav navbar-nav menu-bar">
                  <li className='kali'>
                    <Link to='/'>
                    <a className='kali'>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/about'>
                    <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/sermon'>
                    <a>Sermons</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/event'>
                    <a>Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/gallery'>
                    <a>gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/stream'>
                    <a>stream</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                    <a>contact us</a>
                    </Link>
                  </li>

                  <li>
                    <a href="#" className="search-box-tablet">
                      <i className="fa fa-search"></i>
                    </a>
                    <input type="text" placeholder="Search" className="search-box-top" />
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}

<nav className="nav">
          <Link to='/home'><a className="logo">
            <img src={logo} className="logor" alt="image" />
          </a>
          </Link>
      <ul className={active}>

      <li className='nav__item'>
                    <Link to='/home'>
                    <a className='nav__link'>Home</a>
                    </Link>
                  </li>
                  <li className='nav__item'>
                    <Link to='/about'>
                    <a className='nav__link'>About</a>
                    </Link>
                  </li>
                  <li className='nav__item'>
                    <Link to='/sermon'>
                    <a className='nav__link'> Sermons</a>
                    </Link>
                  </li>
                  <li className='nav__item'>
                    <Link to='/event'>
                    <a className='nav__link'>Events</a>
                    </Link>
                  </li>
                  <li className='nav__item'>
                    <Link to='/gallery'>
                    <a className='nav__link'>gallery</a>
                    </Link>
                  </li>
                  <li className='nav__item'>
                    <Link to='/stream'>
                    <a className='nav__link'>stream</a>
                    </Link>
                  </li>
                  <li className='nav__item'>
                    <Link to='/contact'>
                    <a className='nav__link'>contact us</a>
                    </Link>
                  </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

        </div>
      </div>
    </div>
  </>
  )
}

export default Navba
