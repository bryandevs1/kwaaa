import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';import foimg2 from "./images/footer-img2.jpg"
import foimg1 from "./images/footer-img1.jpg"
import logo from "./images/logo.png"

const GET_FEATURED_POSTS = gql`
  query GetFeaturedPosts {
    posts(orderBy: createdAt_ASC, last: 2) {
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
    }
  }
`;

const Footer = () => {
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

  return (
    <footer>
    <div className="container">
      <div className="row">
        <div className="row left">
          <div className="why"><img className='logooo' src={logo} /></div>
          
          <div className="pages">
            <h4>Pages</h4>
            <ul>
              <li>
                <a href="aboutus.html">About Church</a>
              </li>
              <li>
                <a href="contact_us.html">I'm new here</a>
              </li>
              <li>
                <a href="sermons.html">Sermons</a>
              </li>
              <li>
                <a href="event.html">Events</a>
              </li>
              <li>
                <a target="_blank" href="https://www.youtube.com/@kingdomwealthministry_">Connect</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row right">
          <div className="contact">
            <h4>Contact us</h4>
            <p>R11 Providence Street<br />Beside Readington School,<br />Lekki - Ajah, Lagos</p>
            <p>Phone: +234 916 449 4531<br />Mail: kingdomwealtha@gmail.com</p>
          </div>
          <div className="recent">
            <h4>Recent Sermons</h4>
            {dataLoaded && (
              <>
              {data.posts.map((post) => (
            <div className="figure row">
              <div>
                <img src={post.featuredImage.url} alt="image" />
              </div>
              <div className="figcaption">
                <h5 className="heading">
                  <a href="#">{post.title}</a>
                </h5>
                <h5 className="date">{post.time}</h5>
                <p>{post.excerpt2}</p>
              </div>
            
            </div>
              ))}
              </>
            )}
          </div>
        </div>
      </div>
      <h6>&copy; 2023 Kingdom Wealth Alliance<a href="http:// /" target="_blank"><span> </span></a></h6>
    </div>
  </footer>
  )
}

export default Footer
