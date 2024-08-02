import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:1337/api/blogs/${id}?populate=*`);
        setBlog(data.data);
        console.log(data.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchBlogDetails();
  }, [id]);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  const renderContent = (contentArray) => {
    return contentArray.map((block, index) => {
      if (block.type === 'heading') {
        const HeadingTag = `h${block.level}`;
        return <HeadingTag key={index}>{block.children[0].text}</HeadingTag>;
      }
      if (block.type === 'paragraph') {
        return <p key={index}>{block.children.map((child, idx) => child.text).join('')}</p>;
      }
      if (block.type === 'text') {
        return block.text;
      }
      return null;
    });
  };

  return (
    <BlogDetailStyled>
      <div className='blogdetail-container'>
        <h1> {blog.attributes.title}</h1>
      </div>
      <div className='blogdetail-botton'>
        <img 
            src={`http://localhost:1337${blog.attributes.image.data[0].attributes.url}`} 
            alt={blog.attributes.image.data[0].attributes.alternativeText || blog.attributes.title} 
            className='blog-img' 
        />
        <div>
            {renderContent(blog.attributes.contenu)}
        </div>
      </div>
    </BlogDetailStyled>
  );
}

const BlogDetailStyled = styled.div`
  //margin-bottom: 60px;
  background-color: #f8f8f8;
  padding-bottom: 100px;
  //border: 2px solid red;
  .blogdetail-container {
    padding: 100px;
    margin-bottom: 60px;
    margin-top: 70px;
    color: white;
    background-color: #000;
    h1 {
        margin-bottom: 20px;
        font-size: 2.5rem;
        
        font-style: italic;
    }
  }
  .blogdetail-botton {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  
    img {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    h2, h3, h4, h5, h6 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    h2 {
        color: #111;
        font-size: 1.6rem;
    }
    h4 {
        color: #333;
        font-size: 1rem;
    }
    p {
        margin-bottom: 10px;
        text-align: justify;
        color: #444;
    }
  }
`;
