import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  background-color: #f9f9f9;
`;

const BlogCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 1rem 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  margin-bottom: 1rem;
`;

const BlogTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin: 0.5rem 0;
`;

const BlogDate = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`;

const BlogContent = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ReadMoreLink = styled(Link)`
  align-self: flex-end;
  font-size: 1rem;
  color: #1e90ff;
  text-decoration: none;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/blogs?populate=*&sort=createdAt:desc');
        setBlogs(response.data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogsContainer>
      <div className='all-blogs'>
        <h1 className='title-blogs'>Découvrez tous nos Blogs</h1>
      </div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id}>
          <BlogTitle>{blog.attributes.title}</BlogTitle>
          <BlogDate>Publié le {new Date(blog.attributes.createdAt).toLocaleDateString()}</BlogDate>
          <BlogContent>
            {blog.attributes.resume ? blog.attributes.resume.substring(0, 150) : "Pas de contenu disponible"}...
          </BlogContent>
          <ReadMoreLink to={`/blogs/${blog.id}`}>Lire la suite</ReadMoreLink>
        </BlogCard>
      ))}
    </BlogsContainer>
  );
};

export default Blogs;
