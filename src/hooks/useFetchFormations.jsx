import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchFormations = (selectedCategory) => {
    const [formations, setFormations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loadedFormations, setLoadedFormations] = useState({});

    useEffect(() => {
        if (selectedCategory) {
            if (loadedFormations[selectedCategory]) {
                setFormations(loadedFormations[selectedCategory]);
            } else {
                setLoading(true);
                axios.get(`http://localhost:1337/api/formations?filters[category]=${selectedCategory}`)
                    .then(response => {
                        const newFormations = response.data.data;
                        setFormations(newFormations);
                        setLoadedFormations(prevState => ({
                            ...prevState,
                            [selectedCategory]: newFormations
                        }));
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error fetching formations:', error);
                        setErrorMessage('Failed to load formations. Please try again.');
                        setLoading(false);
                    });
            }
        }
    }, [selectedCategory]);

    return { formations, loading, errorMessage };
};