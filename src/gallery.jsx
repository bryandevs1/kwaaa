import React, { useState, useEffect } from 'react';
import Navba from './Navba';
import Footer from './Footer';
import PreLoader from './Preloader';
import { useQuery, gql } from '@apollo/client';

const GET_GALLERY = gql`
  query GetGallery {
    galleries {
      description
      picture {
        url
      }     
    }
  }
`;

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);

  const { loading, error, data } = useQuery(GET_GALLERY);

  useEffect(() => {
    if (!loading && !error && data) {
      setGalleries(data.galleries);
    }
  }, [loading, error, data]);

  return (
    <div>
      <PreLoader />
      <div className="wrapper-body">
        <header className="s-header">
          <Navba />
        </header>
        <section className="gallery-page-wrapper">
          <div className="container">
            <div className="row">
              <div className="wrapper isp-wrap">
                <div className="clearfix" id="list-item">
                  {galleries.map((gallery) => (
                    <div key={gallery.slug} className="figure image">
                      <div className="item clearfix">
                        <div className="item-img">
                          <div className="image-container">
                            <img src={gallery.picture.url} alt="image" />
                          </div>
                          <div className="figcaption">
                            <a target='_blank' href={gallery.picture.url} className="zoom">
                              <i className="fa fa-file-image-o"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Rest of the figures */}
                </div>
                <div className="btn-load">
                  <a className="btn btn-grey">load more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Gallery;
