import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faClock, faMapMarker, faSearch } from '@fortawesome/free-solid-svg-icons';
import event1 from './images/gallery/galleryP1.jpg';
import event2 from './images/gallery/galleryP2.jpg';
import event3 from './images/gallery/galleryP3.jpg';
import 'add-to-calendar-button'
import { useQuery, gql } from '@apollo/client';
import './styles/vendor.css';
import './styles/main.css';
import { Link } from 'react-router-dom';
import PreLoader from './Preloader';
import Footer from './Footer';
import Navba from './Navba';

const GET_EVENT = gql`
query GetFeaturedPosts {
  events(where: { featuredPost: true }) {

    title
    featuredImage {
      url
    }
    
    excerpt
    description
    locationn
    name
    endDate
    slug
    createdAt
    time
    link
    excerpt2
  }
}
`;

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const { loading, error, data } = useQuery(GET_EVENT);

  useEffect(() => {
    if (!loading && !error && data) {
      setEvents(data.events);
      setDataLoaded(true)
    }
  }, [loading, error, data]);


  return (
    <>
    <PreLoader />
    <div className="wrapper-body event-pg">
      <div className="overlay-event">
        <div className="modal-event clearfix">
          <h1 className="logo">
            <Link to='/home'><a>
              <img src="images/logo.png" className="ligo" alt="image-logo" />
            </a></Link>
            <a className="close-event">
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </h1>
          <h3 className="bis">book your ticket</h3>
          <p className="paragraph_opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
          <form>
            <div className="form-group">
              <input type="email" className="form-control text" placeholder="first name (required)" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control text" placeholder="last name (required)" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control text" placeholder="phone number (required)" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control text" placeholder="email (required)" />
            </div>
            <div className="button-register">
              <button type="submit" className="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <header className="s-header">
        <Navba />

        <div className="button-wrapper">
          <div className="container">
            <div className="row">
              <a href="#" className="btn-content">
                Church Events
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="gallery-page-wrapper events">
        <div className="container">

          <div className="row">
            <div className="wrapper isp-wrap">
              <div className="clearfix" id="list-item">
              {dataLoaded && (
              <>
              {data.events.map((event) => (                  
              <div className={`figure`}>
                    <div className="item clearfix">
                      <a className="item-img" href="event_details.html">
                        <img src={event.featuredImage.url} alt="image" className='perce' />
                      </a>
                      <div className="item-content">
                        <h4 className="headline-lato">{event.title}</h4>
                        <p>{event.description}</p>
                        <div className="item-footer clearfix">
                          <div className="footer-content">
                            <div className="wrap clearfix">
                              <FontAwesomeIcon icon={faClock} />
                              <span>{event.excerpt}</span>
                            </div>
                            <div className="wrap clearfix">
                              <FontAwesomeIcon icon={faMapMarker} />
                              <span>{event.locationn}</span>
                            </div>
                          </div>
                            <a className=""><add-to-calendar-button
  
                            name={event.name}
                            options="'Apple','Google'"
                            location="World Wide Web"
                            startDate={event.link}
                            endDate={event.endDate}
                            startTime={event.time}
                            endTime={event.excerpt2}
                            timeZone="America/Los_Angeles"
                          ></add-to-calendar-button></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quotation">
        <div className="container">
          <div className="row">
            <h5>If you live a life witout the spirit of God, your life is at risk!</h5>
            <p className='text-5xl'>- Dr. Richard A. Wealth</p>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  </>
  );
};

export default EventPage;
