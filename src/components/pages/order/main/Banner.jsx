import React from 'react'
import styled from 'styled-components';

export default function Banner() {
  return (
    <BannerStyled>
        <Video autoPlay loop muted aria-label="Promotional Video">
            <source src="/src/assets/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </Video>
        <GradientOverlay />
        <TextOverlay>
        Apprenez aujourd'hui, réussissez demain.
        <div className="btns-banner">
            <button className='btn-banner btn1'>En savoir plus</button>
            <button className='btn-banner btn2'>Nous réjoindre</button>
        </div>
      </TextOverlay>
    </BannerStyled>
  )
}
const BannerStyled = styled.div`
  /*border: 1px solid blue;*/
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 1;
`;

const TextOverlay = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  z-index: 2;
  font-size: 2rem;
  font-weight: bold;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  font-size: calc(1.5rem + 1vw);
  .btns-banner {
    .btn-banner {
        font-size: 16px;
        color: #fff;
        background-color: #007bff;
        padding: 10px 20px;
        border-radius: 5px;
        outline: none;
        border: none;
        margin: 20px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-align: center;
        &:hover {
            background-color: #0056b3;
        }
    }
  }
`;