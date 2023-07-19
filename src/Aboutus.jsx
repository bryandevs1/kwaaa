import React from 'react';
import Navba from './Navba';
import Footer from './Footer';
import staff1 from './images/BISHOP-ths-wspirit-of-God.jpg'
import staff2 from './images/BISHOP-ths-wspirit-of-God.jpg'
import staff3 from './images/BISHOP-ths-wspirit-of-God.jpg'
import PreLoader from './Preloader';
import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const GET_ABOUT = gql`
  query GetAbout {
    abouts {
      title
      slug
      video{
        url
      }
    }
  }
`;

const Aboutus = () => {
  const [abouts, setAbouts] = useState([]);

  const { loading, error, data } = useQuery(GET_ABOUT);

  useEffect(() => {
    if (!loading && !error && data) {
      setAbouts(data.abouts);
    }
  }, [loading, error, data]);
  return (
    <>
    <PreLoader />
   
    <div className="wrapper-body">
      <header className="s-header">
        <div className='shead'>

        <Navba />
        <div className="button-wrapper">
          <div className="container">
            <div className="row">
              <a href="#" className="btn-content">about us</a>
            </div>
          </div>
        </div>
        </div>
      </header>
      <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="figure">
              <div className="fig">
                <div className="inner-fig">
                  <i className="fa fa-female"></i>
                </div>
              </div>
              <div className="figcaption">
                <h4><a href="#" className="headline-lato">Joyful Journeys</a></h4>
                <p className="paragraph_opensans">Discovering Happiness in God's Love and Embracing the Fulfillment of His Promises</p>
              </div>
            </div>
            <div className="figure">
              <div className="fig">
                <div className="inner-fig">
                  <i className="fa fa-umbrella"></i>
                </div>
              </div>
              <div className="figcaption">
                <h4><a href="#" className="headline-lato">Compassionate Hearts</a></h4>
                <p className="paragraph_opensans">Extending Help, Sharing Hope, and Showing God's Love to All in Need</p>
              </div>
            </div>
            <div className="figure">
              <div className="fig">
                <div className="inner-fig">
                  <i className="fa fa-shopping-cart"></i>
                </div>
              </div>
              <div className="figcaption">
                <h4><a href="#" className="headline-lato">Community Compassion</a></h4>
                <p className="paragraph_opensans">Coming Together to Extend Love, Support, and Compassion to Those Around Us</p>
              </div>
            </div>
            <div className="figure">
              <div className="fig">
                <div className="inner-fig">
                  <i className="fa fa-female"></i>
                </div>
              </div>
              <div className="figcaption">
                <h4><a href="#" className="headline-lato">Faith Foundations</a></h4>
                <p className="paragraph_opensans">Building a Strong Foundation of Faith, Anchored in Hope, Guided by Love, and Rooted in God's Word</p>
              </div>
            </div>
            <div className="figure">
              <div className="fig">
                <div className="inner-fig">
                  <i className="fa fa-umbrella"></i>
                </div>
              </div>
              <div className="figcaption">
                <h4><a href="#" className="headline-lato">Heritage Chronicles</a></h4>
                <p className="paragraph_opensans">Celebrating Our Rich History, Embracing Our Shared Faith, and Shaping a Future Grounded in God's Grace</p>
              </div>
            </div>
            <div className="figure">
              <div className="fig">
                <div className="inner-fig">
                  <i className="fa fa-shopping-cart"></i>
                </div>
              </div>
              <div className="figcaption">
                <h4><a href="#" className="headline-lato">Kidz Corner</a></h4>
                <p className="paragraph_opensans">Nurturing Young Hearts with God's Word, Guiding Them in Faith, and Inspiring a Love for Jesus and Others</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="staff">
        <div className="container">
          <div className="row">
            <div className="line-heading">
              <h3>who we are</h3>
              <p className="paragraph_opensans">Sit back, relax, and prepare to embark on a captivating experience that will give you a deeper understanding of who we are and what we stand for. We hope this video inspires you and leaves you with a renewed sense of hope and possibility. Thank you for joining us on this journey, and we look forward to sharing our story with you. Let's make a positive impact together.</p>
              {abouts.map((about) => (
              <div key={about.slug} className='rounded-mad'>
                <ReactPlayer style={{borderRadius: '20'}} url={about.video.url} controls={true} width='600' height='500px' light={true}/>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="quotation">
        <div className="container">
          <div className="row">
            <h5>If you live a life witout the spirit of God, your life is at risk!</h5>
            <p>- Dr. Richard A. Wealth</p>
          </div>
        </div>
      </section>
<Footer />
    </div>
    </>
  );
};

export default Aboutus;
