import React from 'react';
import { FaCode } from 'react-icons/fa';
import styled from 'styled-components';

const FormationItem = ({ title, description }) => (
    <FormationCard>
        <h3><FaCode /> {title}</h3>
        <p>{description}</p>
    </FormationCard>
);
export { FormationItem };

const FormationCard = styled.div`
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
        transform: translateY(-5px);
        background-color: #f0f0f0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    h3 {
        margin: 0 0 0.5rem;
        font-family: 'Arial, sans-serif';
        color: #333;
    }

    p {
        margin: 0;
        font-family: 'Arial, sans-serif';
        color: #666;
    }
`;