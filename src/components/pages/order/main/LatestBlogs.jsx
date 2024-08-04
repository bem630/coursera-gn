import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LatestBlogsStyled = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;

  h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    padding-left: 4rem;
    color: #333;
  }
  .blogs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 90%;
    margin: auto;
    .blog-card {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    .blog-title {
      font-size: 1.3em;
      color: #333;
      margin-bottom: 10px;
      text-align: left;
    }

    .blog-excerpt {
      font-size: 1em;
      color: #666;
      margin-bottom: 15px;
    }

    .read-more {
      font-size: 1em;
      color: #007bff;
      text-decoration: none;
      display: flex;
      align-items: center;

      svg {
        margin-left: 5px;
      }
    }
  }
  }

  .link-all-blogs {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 20px;
    color: #007bff;
    &:hover {
      color: #0056b3;
      text-decoration: none;
    }
  }
`;

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/blogs?sort=publishedAt:desc&pagination[limit]=3&populate=*')
      .then(response => {
        setBlogs(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des blogs', error);
      });
  }, []);

  return (
    <LatestBlogsStyled>
      <h2>Derniers Articles</h2>
      <div className="blogs-grid">
        {blogs.map(({attributes, id}) => (
          <div key={id} className="blog-card">
          <img 
            src={`http://localhost:1337${attributes.image.data[0].attributes.url}`} 
            alt={attributes.image.data[0].attributes.alternativeText || attributes.title} 
            className='blog-img' 
          />
            <div className="blog-title">{attributes.title}</div>
            <div className="blog-excerpt">{attributes.date}</div>
            <a href={`/blogs/${id}`} className="read-more">
              Lire la suite <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
      <Link to={`/blogs`} className='link-all-blogs'>Voir Tous les Blogs</Link>
    </LatestBlogsStyled>
  );
};

export default LatestBlogs;
