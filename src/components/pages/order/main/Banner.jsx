import React from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

export default function Banner() {
  return (
    <BannerStyled>
      <div className="overlay"></div>
      <video src="/src/assets/preview.mp4" autoPlay muted loop />
      <div className="content">
        <h2>Apprenez aujourd'hui, réussissez demain.</h2>
        <small>
        Chez INNOVA TECH,  nous transformons vos rêves en réalité. Avec une équipe d'experts dédiés et des ressources de classe mondiale, vous garantissant une éducation de qualité et des compétences applicables immédiatement.
        </small>
        <div className="buttons">
          <button className="btn-primary">En savoir plus</button>
          <button className="btn-secondary">Nous rejoindre</button>
        </div>
        <div className="explore">
          <span>Explore</span>
          <FaAngleDown className="icon" />
        </div>
      </div>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    filter: brightness(0.7);
  }

  .content {
    position: relative;
    z-index: 2;
    max-width: 1000px;
    padding: 0 20px;
    animation: fadeIn 1.5s ease-in-out;
    /* Ajout de la propriété top pour abaisser le contenu */
    top: 9%; /* Ajustez cette valeur pour abaisser ou relever le contenu */
    
    h2 {
      font-size: 2.4em;
      margin-bottom: 20px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
      animation: slideInDown 1s ease-in-out;
    }

    small {
      font-size: 1em;
      margin-bottom: 30px;
      display: block;
      line-height: 1.7;
      color: #ccc;
      animation: fadeIn 2s ease-in-out;
      text-align: center;
    }

    .buttons {
      margin-bottom: 40px;

      .btn-primary, .btn-secondary {
        background: linear-gradient(45deg, #ff6b6b, #f06595);
        color: #fff;
        border: none;
        padding: 12px 25px;
        margin: 0 10px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 1em;
        transition: all 0.3s ease-in-out;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

        &:hover {
          background: linear-gradient(45deg, #f06595, #ff6b6b);
          transform: translateY(-3px);
          box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);
          animation: pulse 1s infinite;
        }
      }

      .btn-secondary {
        background: linear-gradient(45deg, #1e90ff, #00bfff);

        &:hover {
          background: linear-gradient(45deg, #00bfff, #1e90ff);
        }
      }
    }

    .explore {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.3em;
      cursor: pointer;
      margin-top: 20px;
      color: #fff;
      animation: bounce 2s infinite;

      span {
        margin-bottom: 10px;
      }

      .icon {
        font-size: 1.5em;
        transition: transform 0.3s ease-in-out;
        color: #ff6b6b;
        filter: drop-shadow(0 0 5px #ff6b6b);

        &:hover {
          transform: translateY(5px);
        }
      }
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInDown {
    from { transform: translateY(-50px); }
    to { transform: translateY(0); }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

