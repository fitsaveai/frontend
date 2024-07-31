import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './WorkoutDetail.css';

const WorkoutDetail = () => {
    const [workout, setWorkout] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchWorkout = async () => {
            try {
                const response = await axios.get(`https://fitsaveai.uk.r.appspot.com/api/workouts/${id}`);
                setWorkout(response.data);
            } catch (error) {
                console.error('Error fetching workout:', error);
            }
        };

        fetchWorkout();
    }, [id]);

    if (!workout) return <div>Loading...</div>;

    return (
        <div className="workout-detail">
            <h1>{workout.title}</h1>
            <p>{workout.description}</p>
            <h2>Exercises:</h2>
            <ul>
                {workout.exercises.map((exercise, index) => (
                    <li key={index}>
                        <strong>{exercise.name}</strong>: {exercise.sets} sets of {exercise.reps} reps
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutDetail;