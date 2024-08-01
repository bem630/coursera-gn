import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <ErrorPageStyled>
      <div className="error-container">
        <img src="/src/assets/228438-P28070-739.jpg" alt="Page non trouvée" />
        <h1>Oups ! Page non trouvée</h1>
        <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    </ErrorPageStyled>
  );
}

// Styled Components

const ErrorPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  text-align: center;

  .error-container {
    max-width: 600px;
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
      margin-bottom: 2rem;
      border-radius: 10px;
    }

    h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 2rem;
    }

    a {
      display: inline-block;
      background-color: #007bff;
      color: #fff;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
