import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';

export default function Category() {
    //state
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [formations, setFormations] = useState([]);
    
    //comportements
    useEffect(() => {
        // Fetch categories from Strapi
        axios.get('http://localhost:1337/api/categories?populate=*')
            .then(response => {
                setCategories(response.data.data);
                console.log(response.data)
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
                    console.log(response.data)
                })
                .catch(error => {
                    console.error('Error fetching formations:', error);
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
            <FormationList>
                {formations.map(({ id, attributes }) => (
                    <FormationItem key={id}>
                        <h3>{attributes.title}</h3>
                        <p>{attributes.description}</p>
                    </FormationItem>
                ))}
            </FormationList>
    </CategoryStyled>
  )
}
const CategoryStyled = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const CategoryTitle = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
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
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #007BFF;
        color: #fff;
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
    }

    p {
        margin: 0;
    }
`;