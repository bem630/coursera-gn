import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <CallToActionSection aria-labelledby="cta-title">
      <ContentWrapper>
        <h2 id="cta-title">Rejoignez notre communauté de professionnels en formation !</h2>
        <p aria-describedby="cta-description">Inscrivez-vous dès aujourd'hui pour accéder à des formations de qualité, adaptées à vos besoins et à vos objectifs professionnels.</p>
        <ButtonWrapper>
          <StyledButton to="/formations" aria-label="En savoir plus sur les formations">En savoir plus</StyledButton>
          <StyledButton to="/contact" primary aria-label="Contactez-nous">Contactez-nous</StyledButton>
        </ButtonWrapper>
      </ContentWrapper>
    </CallToActionSection>
  );
};

const CallToActionSection = styled.section`
  background-image: url('/src/assets/african-american-young-programmer-wearing-headphone-while-typing-security-codes-business-website-working-rmeote-from-home-employee-programming-software-application-software-screen.jpg'); /* Image de personnes en formation */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 6rem 2rem;
  color: #fff;
  position: relative;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  h2 {
    font-size: 2.9rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    z-index: 1;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled(Link)`
  background-color: ${({ primary }) => (primary ? '#007bff' : 'transparent')};
  color: ${({ primary }) => (primary ? '#fff' : '#007bff')};
  border: 2px solid #007bff;
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#007bff')};
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export default CallToAction;
