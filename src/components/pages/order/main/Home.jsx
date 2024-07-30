import React from 'react'
import Banner from './Banner'
import styled from 'styled-components';

export default function Home() {
  return (
    <HomeStyled>
        <Banner/>
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  /*border: 1px solid red;*/
`;