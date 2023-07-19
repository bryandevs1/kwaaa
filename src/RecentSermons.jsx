import React, { useState, useEffect } from 'react';
import logo from "./images/logo.png";
import fig1 from "./images/content/fig1.jpg"
import { useQuery, gql } from '@apollo/client';


const GET_FEATURED_POSTS = gql`
  query GetFeaturedPosts {
    posts(where: { featuredPost: true }) {
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

const RecentSermons = () => {
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
    <div>
                      {dataLoaded && (
              <>
              {data.posts.map((post) => (
                  <div className="figure clearfix">
                    <div className="item-figure">
                      <div className="image-wrapper"><img src={post.featuredImage.url} alt="image" /></div>
                    </div>
                    <div className="item-content">
                      <h4><a href={post.link} target='_blank' className="headline-lato">{post.title}</a></h4>
                      <span>{post.time}</span> <span>By: {post.author.name} </span>
                      <p>{post.excerpt2}</p>
                    </div>
                  </div>
              ))}
              </>
                )}
    </div>
  )
}

export default RecentSermons
