import React, {useState, useEffect} from 'react';
import galleryP1 from './images/gallery/galleryP1.jpg';
import galleryP2 from './images/gallery/galleryP2.jpg';
import galleryP3 from './images/gallery/galleryP3.jpg';
import Navba from './Navba';
import Footer from './Footer';
import PreLoader from './Preloader';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import waiting from './images/waiting.jpeg'
import Iframe from 'react-iframe';



const GET_UPCOMINGEVENTS = gql`
  query GetUpcomingEvents {
    upcomingEvents {
      name
      date
      countdown
      link
    }
  }
`;

const Stream = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

const { loading, error, data } = useQuery(GET_UPCOMINGEVENTS);

useEffect(() => {
  if (!loading && !error && data) {
    setUpcomingEvents(data.upcomingEvents);
  }
}, [loading, error, data]);
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
    <div>
      <PreLoader/>
      <div className="wrapper-body">
        <header className="s-header">
         <Navba />
       </header>
       <section className="event mt10">
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

        <div className="jol">
        {upcomingEvents.map((upcomingEvent) => (
            <div key={upcomingEvent.slug} className='jol1'>
            {upcomingEvent.link ? (
              <Iframe
              url={upcomingEvent.link}
              width="100%"
              height='500'
              style={{ width: '100%', aspectRatio: '16/9', minHeight: '340px' }}
              frameBorder="0"
              scrolling="no"
              allow="autoplay"
              allowFullScreen
              webkitAllowFullScreen
              mozAllowFullScreen
              oAllowFullScreen
              msAllowFullScreen
            />      ) : (
              <img src={waiting} />
            )}
          </div>
              ))}
        </div>
<Footer />
      </div>
    </div>
  );
}

export default Stream;