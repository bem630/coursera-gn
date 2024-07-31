import React from 'react'
import Banner from './Banner'
import styled from 'styled-components';
import Category from './formation/Category';

export default function Home() {
  return (
    <HomeStyled>
        <Banner/>
        <Category/>
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  /*border: 1px solid red;*/
`;