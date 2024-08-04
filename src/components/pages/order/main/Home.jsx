import React from 'react'
import Banner from './Banner'
import styled from 'styled-components';
import Category from './category/Category';
import FeaturedCourses from './formation/FeaturedCourses';
import Testimonials from './Testimonials';
import PartnerLogos from './PartnerLogos';
import LatestBlogs from './LatestBlogs';
import UpcomingEvents from './UpcomingEvents';
import CallToAction from './CallToAction';
import FAQSection from './FAQSection';
import Services from './Services';

export default function Home() {
  return (
    <HomeStyled>
        <Banner/>
        <Category/>
        <FeaturedCourses/>
        <Services/>
        <Testimonials/>
        {/*<PartnerLogos/>*/}
        <LatestBlogs/>
        <UpcomingEvents/>
        <CallToAction/>
        <FAQSection/>
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  /*border: 1px solid red;*/
`;