import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:1337/api/formations?sort=createdAt:desc&pagination[limit]=6&populate=*') 
      .then(response => {
        setCourses(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setErrorMessage('Failed to load courses. Please try again.');
        setLoading(false);
      });
  }, []);

  return (
    <FeaturedCoursesStyled>
      <h2>Formations Populaires</h2>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <CourseGrid>
          {courses.map(({ id, attributes }) => (
            <CourseCard key={id}>
              <CourseImage src={`http://localhost:1337${attributes.image?.data?.attributes?.url || '/default-image.jpg'}`} alt={attributes.Name} />
              <CourseContent>
                <h3>{attributes.Name}</h3>
                <p>{attributes.description}</p>
              </CourseContent>
            </CourseCard>
          ))}
        </CourseGrid>
      )}
    </FeaturedCoursesStyled>
  );
}

const FeaturedCoursesStyled = styled.div`
  padding: 3rem;
  background-color: #f4f4f4;
  background-color: #f0f0f0;
  h2 {
    text-align: center;
    color: #222;
    margin-bottom: 2.5rem;
    font-family: 'Roboto, sans-serif';
    font-weight: 700;
    font-size: 2rem;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const CourseCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CourseContent = styled.div`
  padding: 1rem;
  text-align: left;

  h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.5;
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007BFF;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-bottom: 1rem;
`;
