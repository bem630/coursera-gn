import React, { useState } from 'react'
import { useFetchCategories } from '../../../../../hooks/useFetchCategories.jsx'
import { useFetchFormations } from '../../../../../hooks/useFetchFormations.jsx'
import styled, { keyframes } from 'styled-components';
import { CategoryItem } from './CategoryItem.jsx';
import { FormationItem } from './FormationItem.jsx';

export default function Category() {
    //state
    const { categories, loading: loadingCategories, errorMessage: categoriesError } = useFetchCategories();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { formations, loading: loadingFormations, errorMessage: formationsError } = useFetchFormations(selectedCategory);
    
    //comportements
    
    //affichage
  return (
    <CategoryStyled>
        <CategoryTitle>Choisissez une catégorie</CategoryTitle>
        {categoriesError && (
            <ErrorMessage>
                {categoriesError} <button onClick={() => window.location.reload()}>Réessayer</button>
            </ErrorMessage>
        )}
        <CategoryList>
            {categories.map(({ id, attributes }) => (
                <CategoryItem 
                    key={id} 
                    id={id}
                    name={attributes.Name}
                    isSelected={id === selectedCategory}
                    onSelect={setSelectedCategory}
                />
            ))}
        </CategoryList>
        {loadingCategories || loadingFormations ? (
                <LoadingSpinner />
            ) : (
                <FormationList>
                    {formations.map(({ id, attributes }) => (
                        <FormationItem 
                            key={id}
                            title={attributes.title}
                            description={attributes.description}
                        />
                    ))}
                </FormationList>
        )}
        {formationsError && <ErrorMessage>{formationsError}</ErrorMessage>}
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
    font-family: 'Roboto, sans-serif';
    color: #333;
`;

const CategoryList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

const FormationList = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    animation: ${fadeIn} 0.5s ease-in;
`;

const LoadingSpinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #007BFF;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 0.8s linear infinite;
    margin: 2rem auto;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    color: #007BFF;
    cursor: pointer;
    text-decoration: underline;
  }
`;