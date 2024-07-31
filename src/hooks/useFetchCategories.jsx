import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:1337/api/categories?populate=*')
            .then(response => {
                setCategories(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setErrorMessage('Failed to load categories. Please try again.');
                setLoading(false);
            });
    }, []);

    return { categories, loading, errorMessage };
};