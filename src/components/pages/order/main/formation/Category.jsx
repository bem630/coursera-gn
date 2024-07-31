import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

export default function Category() {
    //state
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [formations, setFormations] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //comportements
    useEffect(() => {
        // Fetch categories from Strapi
        axios.get('http://localhost:1337/api/categories?populate=*')
            .then(response => {
                setCategories(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    useEffect(() => {
        if (selectedCategory) {
            // Fetch formations based on selected category from Strapi
            axios.get(`http://localhost:1337/api/formations?filters[category]=${selectedCategory}`)
                .then(response => {
                    setFormations(response.data.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching formations:', error);
                    setLoading(false);
                });
        }
    }, [selectedCategory]);
    //affichage
  return (
    <CategoryStyled>
        <CategoryTitle>Choisissez une catégorie</CategoryTitle>
        <CategoryList>
            {categories.map(({ id, attributes }) => (
                <CategoryItem 
                    key={id} 
                    onClick={() => setSelectedCategory(id)}
                    $isSelected={ id === selectedCategory}
                >
                    {attributes.Name}
                </CategoryItem>
            ))}
            </CategoryList>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <FormationList>
                    {formations.map(({ id, attributes }) => (
                        <FormationItem key={id}>
                            <h3>{attributes.title}</h3>
                            <p>{attributes.description}</p>
                        </FormationItem>
                    ))}
                </FormationList>
            )}
    </CategoryStyled>
  )
}
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CategoryStyled = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  animation: ${fadeIn} 0.5s ease-in;
`;

const CategoryTitle = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Arial, sans-serif';
    color: #333;
`;

const CategoryList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

const CategoryItem = styled.button`
    padding: 0.5rem 1rem;
    border: 2px solid #007BFF;
    border-radius: 5px;
    background-color: ${({ $isSelected }) => ($isSelected ? '#007BFF' : '#fff')};
    color: ${({ $isSelected }) => ($isSelected ? '#fff' : '#007BFF')};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, transform 0.2s;

    &:hover {
        background-color: #007BFF;
        color: #fff;
        transform: translateY(-2px);
    }
`;

const FormationList = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
`;

const FormationItem = styled.div`
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
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

const LoadingSpinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #007BFF;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 2rem auto;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;