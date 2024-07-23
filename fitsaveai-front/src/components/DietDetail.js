import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DietDetail.css';

const DietDetail = () => {
    const [diet, setDiet] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchDiet = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/diets/${id}`);
                setDiet(response.data);
            } catch (error) {
                console.error('Error fetching diet:', error);
            }
        };

        fetchDiet();
    }, [id]);

    if (!diet) return <div>Loading...</div>;

    return (
        <div className="diet-detail">
            <h1>{diet.title}</h1>
            <p>{diet.shortDescription}</p>
            <h2>Full Description:</h2>
            <p>{diet.fullDescription}</p>
            <h2>Nutritional Information:</h2>
            <ul>
                <li>Calories: {diet.calories}</li>
                <li>Protein: {diet.protein}g</li>
                <li>Carbs: {diet.carbs}g</li>
                <li>Fat: {diet.fat}g</li>
            </ul>
        </div>
    );
};

export default DietDetail;