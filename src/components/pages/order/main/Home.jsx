import React from 'react'
import Banner from './Banner'
import styled from 'styled-components';
import Category from './formation/Category';
import FeaturedCourses from './formation/FeaturedCourses';
import Testimonials from './Testimonials';
import PartnerLogos from './PartnerLogos';

export default function Home() {
  return (
    <HomeStyled>
        <Banner/>
        <Category/>
        <FeaturedCourses/>
        <Testimonials/>
        <PartnerLogos/>
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  /*border: 1px solid red;*/
`;