import React from 'react'
import styled, { keyframes } from 'styled-components';

export default function FeaturedCourses() {
  return (
    <FeaturedStyled>FeaturedCourses</FeaturedStyled>
  )
}
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FeaturedStyled = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  animation: ${fadeIn} 0.5s ease-in;
`;