import React, { useState, useEffect } from 'react';
import logo from "./images/logo.png";
import fig1 from "./images/content/fig1.jpg"
import { useQuery, gql } from '@apollo/client';


import Footer from './Footer';
import Navba from './Navba';
import { SocialIcon } from 'react-social-icons';
import PreLoader from './Preloader';

const GET_FEATURED_POSTS = gql`
  query GetPosts {
    posts {
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
      name
      time
      link
    }
  }
`;

function Sermons() {

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

  const handleLoadMore = () => {
    setLimit(limit + 2); // Increase the limit by 2 to load more sermons
    setShowMore(true);
  };
  return (
    <>
    <PreLoader />
      {/* <div className="page_overlay">
        <div className="loader-inner ball-scale-multiple">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      <div className="wrapper-body">
 
        <header className="s-header">
          <Navba />
          <div className="button-wrapper indz">
            <div className="container">
              <div className="row">
                <a href="#" className="btn-content">our sermons</a>
              </div>
            </div>
          </div>
        </header>
        <section className="sermons">
          <div className="container">
            <div className="row">
              <div className="figure-wrapper">
              {dataLoaded && (
              <>
              {data.posts.map((post) => (
                    <div className="figure clearfix" key={post.slug}>
                    <div className="item-figure">
                    <div className="image-wrapper">
                      <img src={post.featuredImage.url} alt="image" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h4>
                      <a href="#" className="headline-lato">{post.name}</a>
                    </h4>
                    <span>{post.time}</span>
                    <span>By: {post.author.name}</span>
                    <a href={post.link} className="zoom p-2" title="video">
                          <div className=' p-2 flex sermonlink'><i className="fa fa-play "></i><p className='flex gapp'>Play</p></div>
                    </a>
                  </div>
                </div>
                        ))}
                {/* Rest of the figures */}
                </>
                )}

              </div>

            </div>
          </div>
        </section>
         <Footer />       
      </div>
      <script src="scripts/vendor.js"></script>
      <script src="scripts/plugins.js"></script>
      <script src="scripts/main.js"></script>
    </>
  );
}

export default Sermons;

