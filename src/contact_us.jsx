import React from 'react';
import Navba from './Navba';
import PreLoader from './Preloader';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';import foimg2 from "./images/footer-img2.jpg"

const GET_FEATURED_POSTS = gql`
  query GetFeaturedPosts {
    posts(orderBy: createdAt_ASC, last: 3) {
      author {
        name
        photo {
          url
        }
      }
      featuredImage {
        url
      }
      title
      slug
      createdAt
      time
      link
      excerpt2
      eventName
    }
  }
`;


const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

const ContactPage = () => {
  const [categories, setCategories] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [limit, setLimit] = useState(2);

  const { loading, error, data } = useQuery(GET_FEATURED_POSTS, {
    variables: { limit },
  });

  useEffect(() => {
    if (!loading && !error && data) {
      setCategories(data.categories);
      setDataLoaded(true);
    }
  }, [loading, error, data]);

    // Set the coordinates of the address you want to display
    const coordinates = {
      lat: 37.7749, // Example latitude
      lng: -122.4194, // Example longitude
    };
  
  return (
    <>
    <PreLoader />
    <div className="wrapper-body">
      <header className="s-header">

        {/* Navbar code removed */}
        <Navba />
        <div className="button-wrapper">
          <div className="container">
            <div className="row">
              <a href="#" className="btn-content">contact us</a>
            </div>
          </div>
        </div>
      </header>
      <section className="store">
        <div className="container">
          <div className="row">
            <div className="wrapper clearfix">
              <aside className="content contact-wrap">
                <div id="map-wrapper">
                <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1982.187942793173!2d3.607794!3d6.4739816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf975845b98e3%3A0xf5ecea8c7d1a0ab7!2sAtlantic%20Vista%20Estate!5e0!3m2!1sen!2sng!4v1689486028221!5m2!1sen!2sng"
      width="850"
      height="450"
      style={{ border: "12" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>               
     </div>
                <div className="contact-form clearfix">
                  <form method="post" name="contact" id="contact">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control text"
                        id="eml"
                        name="eml"
                        placeholder="Your E-mail"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control text"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group1">
                      <textarea
                        className="form-control texta"
                        id="comment"
                        name="comment"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button className="submit">send message</button>
                    <div className="contact-page-form form-message contactpage">
                      <div>
                        <div className="loader">Loading...</div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="contact-address">
                  <p className="paragraph_opensans">
                    We are here for you! If you need anything or have any questions, please don't hesitate to reach out to us. Our church community is dedicated to serving and supporting each other
 on this journey of faith. Whether it's prayer, guidance, or simply a listening ear, we are here to lend a helping hand and be a source of encouragement. Feel free to contact us through our website, phone, or visit us in person during our services and events. We look forward to connecting with you and being a part of your spiritual growth and well-being. Together, let's walk this path of faith and love as a united family in Christ.
                  </p>
                  <div className="fig-addrs clearfix">
                    <p>Phone:</p>
                    <div className="address-cont">
                      <i className="fa fa-phone"></i>
                      <span>+234 916 449 4531</span>
                    </div>
                  </div>
                  <div className="fig-addrs clearfix">
                    <p>Email:</p>
                    <div className="address-cont">
                      <i className="fa fa-envelope"></i>
                      <span>kingdomwealtha@gmail.com</span>
                    </div>
                  </div>
                  <div className="fig-addrs clearfix">
                    <p>address:</p>
                    <div className="address-cont">
                      <i className="fa fa-map-marker"></i>
                      <span>R11 Providence Street
Beside Readington School</span>
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="sidebar">
                <div className="item-menu">
                  <div className="item-menu-wrap">
                    <h5>Past event</h5>
                    {dataLoaded && (
              <>
              {data.posts.map((post) => (
                    <div className="item-wrap clearfix">
                      <div className="item-fig">
                        <img src={post.featuredImage.url} alt="image" />
                      </div>
                      <div className="item-content">
                        <h6>
                          <a className='hiou' target='_blank' href={post.link}>{post.eventName}</a>
                        </h6>
                        <p>{post.time}</p>
                      </div>
                    </div>
              ))}
              </>
                    )}
                  </div>
                </div>

              </aside>
            </div>
          </div>
        </div>
      </section>
<Footer />
    </div>
    </>
  );
};

export default ContactPage;
