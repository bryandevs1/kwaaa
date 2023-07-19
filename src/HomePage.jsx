import React, {useState, useEffect, useRef} from 'react';
import had2 from './images/WELCOME.png'
import had3 from './images/WELCOME 3.png'
import logo from "./images/logo.png"

import foimg1 from "./images/footer-img1.jpg"
import foimg2 from "./images/footer-img2.jpg"
import abimg from "./images/iji.jpg"
import fig1 from "./images/content/fig1.jpg"
import fig2 from "./images/content/fig2.jpg"
import fig3 from "./images/content/fig3.jpg"
import fig4 from "./images/content/fig4.jpg"
import img5 from "./images/img5.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import Navba from './Navba';
import Footer from "./Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useQuery, gql } from '@apollo/client';
import PreLoader from './Preloder';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import RecentSermons from './RecentSermons';
import Slider from 'react-slick';


const GET_UPCOMINGEVENTS = gql`
  query GetUpcomingEvents {
    upcomingEvents {
      name
      date
      countdown
    }
  }
`;




const HomePage = () => {
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

  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const { loading, error, data } = useQuery(GET_UPCOMINGEVENTS);

  useEffect(() => {
    if (!loading && !error && data) {
      setUpcomingEvents(data.upcomingEvents);
    }
  }, [loading, error, data]);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  const carouselRef = useRef(null);

  const homepics = [
    {
      id: 1,
      img: had2,
      title: 'Kingdom Wealth Ministries',
      text: 'Welcome to Kingdom Wealth Ministries'
    },
    {
      id: 2,
      img: had3,
      title: 'Kingdom Wealth Ministries',
      text: 'Welcome to Kingdom Wealth Ministries'
    }
  ]


  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (upcomingEvents.length > 0) {
      const updateCountdown = () => {
        const now = new Date().getTime()
        const targetDate = new Date(upcomingEvents[0].countdown).getTime();
        const timeDifference = targetDate - now

        if (timeDifference > 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          setCountdown({ days, hours, minutes, seconds });
        }
      };

      const interval = setInterval(updateCountdown, 1000);

      return () => clearInterval(interval);
    }
  }, [upcomingEvents]);

    return (
      <>
      <PreLoader />
      <div>
       <div className="wrapper-body">
		     <div class="">
         <Slider {...settings} ref={carouselRef}>
         {homepics.map((homepic, index) => (
          <img src={homepic.img} className='ihi' />
          ))}

          </Slider>


          </div>
          

          <header>
          <>
    <div className="header-top">
    <div className="container">
      <div className="row">
        <div className="header-top-left">
          <a target="_blank" href="https://web.facebook.com/kingdomwealthministry/">
          <SocialIcon network='facebook' color='#fff' style={{width: 25, color:'white', height:25}} />          </a>
          <a href="https://www.instagram.com/kingdomwealthministry/" target="_blank">
          <SocialIcon network='instagram' style={{width: 25, height:25}} />          </a>
          <a href="https://www.youtube.com/@kingdomwealthministry_" target="_blank">
          <SocialIcon network='youtube' style={{width: 25, height:25}} />          </a>
          <a href="https://www.tiktok.com/@kingdomwealthministry" target="_blank">
          <SocialIcon network='tiktok' style={{width: 25, height:25}} />          </a>
        </div>
        <div className="header-top-right">
                    <Link to='/contact' className='whitee'><a className="top-wrap whitee">Plan your visit</a></Link>
                    <Link to='/event'><a className="top-wrap">Calendar</a></Link>
                    <Link to='/contact'><a className="top-wrap">Donate Now</a></Link>
        </div>
      </div>
    </div>
  </div>
    <div className="menu">
    <div className="container">
      <div className="row">

<nav className="nav">
          <Link to='/home'><a className="logo">
            <img src={logo} className="logor" alt="image" />
          </a>
          </Link>
      <ul className={active}>

      <li className='nav__item'>
                    <Link to='/'>
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
  </>            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="header-top-left"></div>
                  <div className="ioj header-top-right">
                    <h2>  <span></span> </h2>
                    <p></p>
                    {/* <Link to='/contact'><a className="btn red-btn purple">join us</a></Link> */}
                  </div>
                </div>
              </div>
            </div>
            </header>
          <a href="#" id="scrollUp"></a>
          <section className="event">
          <div className="container">
      <div className="row">
        <figure className="left-fig clearfix">
          <div className="left-fig-img">
            <i className="fa fa-calendar"></i>
          </div>
          <div className="left-fig-content">
            <h5>Upcoming Event</h5>
            <h6>Next</h6>
          </div>
        </figure>
        <ul className="right-fig js-countdown clearfix">
        {upcomingEvents.map((upcomingEvent, index) => (
          <li>
            <h5>{upcomingEvent.name}</h5>
            <h6>{upcomingEvent.date}</h6>
          </li>
        ))}

          <li className="days">
            <span className="count">{countdown.days}</span>
            <span>days</span>
          </li>
          <li className="hours">
            <span className="count">{countdown.hours}</span>
            <span>hrs</span>
          </li>
          <li className="minutes">
            <span className="count">{countdown.minutes}</span>
            <span>min</span>
          </li>
          <li className="seconds">
            <span className="count">{countdown.seconds}</span>
            <span>sec</span>
          </li>
          <li>
            <Link to='/event'>
            <a className="btn purple red-btn">
              All Events
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
          </section>
          <section className="content-wrap">
            <div className="container">
              <div className="row">
                <div className="fig-content">
                  <div className="content-items"><img className="abcl" src={abimg} alt="image" /></div>
                </div>
                <div className="figcaption-content">
                  <h3>Welcome to <span>Kingdom Wealth Alliance</span></h3>
                  <p>Welcome to Kingdom Wealth Alliance, a warm and inclusive community where people from all walks of life gather to celebrate their faith and embark on a journey of spiritual transformation. Here, we believe in igniting the fire of faith, equipping individuals to discover their unique purpose, and empowering them to live abundantly in alignment with God's Kingdom principles. </p>
                  <p>As we come together, we cultivate a vibrant and nurturing environment where deep connections are forged, and lives are forever changed. So, whether you're seeking solace, seeking answers, or seeking to make a positive impact in the world, we invite you to join us on this extraordinary adventure. Together, we'll experience the richness of God's love, explore the depths of His Word, and embrace the joy of community. Welcome to Kingdom Wealth Alliance Church, where your spiritual journey finds a home and your heart finds a family.</p>
                 <Link to='/about'> <a className="red-readmore">See more about us</a></Link>
                </div>
              </div>
            </div>
          </section>
          <section className="about">
            <div className="container">
              <div className="line-heading">
                <h3>who are we?</h3>
              </div>
              <div className="row">
                <div>
                  <div className="figure">
                    <div className="figcaption clearfix">
                      <div className="item"><img src={img2} alt="image" className='rounded-mad' /></div>
                      <div className="item-container">
                        <h4 className="headline-lato">Vision</h4>
                        <p>Our vision is to create a community where everyone experiences a blessed and prosperous lifestyle, passionately pursuing God and His excellence. We aim to add value to both the church and the broader community through our dedicated service, recognizing that we are not meant to journey alone. Choosing joy, prosperity, and good health in all aspects of life, we foster a culture of honor for Jesus and others.</p>
                      </div>
                    </div>
                  </div>
                  <div className="figure">
                    <div className="figcaption clearfix">
                      <div className="item"><img src={img3} alt="image" className='rounded-mad biaa' /></div>
                      <div className="item-container">
                        <h4 className="headline-lato">Mission</h4>
                        <p>Our mission is to spread God's blessings, empower the upcoming generation with kingdom wealth possibilities, and restore lives through the transformative power of God's Word. We aim to demolish poverty's strongholds, preach a balanced prosperity gospel, and integrate business, ministry, and heavenly living through biblical principles.</p>
                      </div>
                    </div>
                  </div>
                  <div className="figure">
                    <div className="figcaption clearfix">
                      <div className="item"><img src={img5} alt="image" className='rounded-mad ' /></div>
                      <div className="item-container">
                        <h4 className="headline-lato">Core Values</h4>
                        <p>
                            Our core values revolve around fostering a blessed and prosperous community passionately pursuing God's excellence. We cherish a blessed life, seek God's glory, pursue excellence, add value through service, thrive in genuine connections, embrace abundant blessings, and uphold a culture of honor for Jesus and others.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sermons">
            <div className="container">
              <div className="line-heading">
                <h3>what's new?</h3>
              </div>
              <div className="row">
                <div className="figure-wrapper">
                  <RecentSermons />
                </div>
              </div>
            </div>
          </section>
          <section className="upcoming-event">
            <div className="container">
              <div className="line-heading">
                <h3>Upcoming Events</h3>
              </div>
              <div className="row">
                <div className="clearfix">
                  <div className="figure">
                    <div className="item-fig">
                      <div className="item">
                        <i className="fa fa-calendar"></i>
                        <h5>WEDNESDAYS, 2023</h5>
                        <h6>KWA, LEKKI-AJAH</h6>
                      </div>
                    </div>
                    <div className="item-content">
                      <h4>BIBLE STUDY</h4>
                      <p>"Unite in His Word, seek truth, and transform lives for His glory."</p>
                    </div>
                  </div>
                  <div className="figure">
                    <div className="item-fig">
                      <div className="item">
                        <i className="fa fa-calendar"></i>
                        <h5>THURSDAYS, 2023</h5>
                        <h6>KWA, LEKKI-AJAH</h6>
                      </div>
                    </div>
                    <div className="item-content">
                      <h4>THURSDAY PRAYER MEETING</h4>
                      <p>"Unite in prayer, seek His presence, and experience His transformative power."</p>
                    </div>
                  </div>
                  <div className="figure">
                    <div className="item-fig">
                      <div className="item">
                        <i className="fa fa-calendar"></i>
                        <h5>SATURDAYS, 2023</h5>
                        <h6>KWA, LEKKI-AJAH</h6>
                      </div>
                    </div>
                    <div className="item-content">
                      <h4>SATURDAY EVANGELISM</h4>
                      <p>"Boldly proclaim His love, share the Good News, and lead hearts to salvation."</p>
                    </div>
                  </div>
                  <div className="figure">
                    <div className="item-fig">
                      <div className="item">
                        <i className="fa fa-calendar"></i>
                        <h5>SUNDAYS, 2023</h5>
                        <h6>KWA, LEKKI-AJAH</h6>
                      </div>
                    </div>
                    <div className="item-content">
                      <h4>SUNDAY MAIN SERVICE</h4>
                      <p>"Gather in worship, seek His guidance, and be nourished by His Word."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
      </>

      );
      };
      


export default HomePage;
