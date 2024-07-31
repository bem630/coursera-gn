import React from 'react';
import { FaBook } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const CategoryItem = ({ id, name, isSelected, onSelect }) => (
    <CategoryButton
        onClick={() => onSelect(id)}
        $isSelected={isSelected}
        role="button"
        aria-pressed={isSelected}
        aria-label={`Select category ${name}`}
    >
        <FaBook /> {name}
    </CategoryButton>
);
export { CategoryItem };

const popIn = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const CategoryButton = styled.button`
    padding: 0.5rem 1rem;
    border: 2px solid #007BFF;
    border-radius: 5px;
    background-color: ${({ $isSelected }) => ($isSelected ? '#007BFF' : '#fff')};
    color: ${({ $isSelected }) => ($isSelected ? '#fff' : '#007BFF')};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, transform 0.2s;
    animation: ${popIn} 0.5s ease;

    &:hover {
        background-color: #007BFF;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
    }
    &:focus {
        outline: 2px dashed #007BFF;
        outline-offset: 4px;
    }
    &[aria-selected="true"] {
    border-color: #0056b3;
  }
`;