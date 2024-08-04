import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import styled from 'styled-components';

export default function Joindre({ className }) {
  return (
    <JoindreStyled className={className}>
      <div className='footer-left-icon'>
        <LuMapPin className='left-icon'/> <p>Coloma 2, Commune de Ratoma</p>
      </div>
      <div className='footer-left-icon'>
        <BsTelephone className='left-icon'/> <p>+216 50496811</p>
      </div>
      <div className='footer-left-icon'>
        <MdOutlineMail className='left-icon'/><p>mamadou.bahelhadj@etudiant-fst.utm.tn</p>
      </div>
    </JoindreStyled>
  )
}

const JoindreStyled = styled.div`
  .footer-left-icon {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 18px;

    .left-icon {
      margin-right: 10px;
      color: #007bff;
      font-size: 24px;
    }
  }
`;
