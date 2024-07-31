import React from 'react';
import styled from 'styled-components';
import { partnerLogos } from '../../../../fakeData/fakeData';

const PartnerLogos = () => {
  return (
    <PartnerLogosSection>
      <h2>Nos Partenaires</h2>
      <LogoGrid>
        {partnerLogos.map((logo) => (
          <LogoCard key={logo.id}>
            <img src={logo.url} alt={logo.alt} />
          </LogoCard>
        ))}
      </LogoGrid>
      <CTAButton href="/contact">Devenir Partenaire</CTAButton>
    </PartnerLogosSection>
  );
};

const PartnerLogosSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  text-align: center;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: #222;
    margin-bottom: 3rem;
    font-weight: 700;
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const LogoCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 3rem;
  padding: 0.75rem 2rem;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;

export default PartnerLogos;