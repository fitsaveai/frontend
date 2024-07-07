import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from './workoutcard';
import './details.css';

const Details = () => {
    const [workouts, setWorkouts] = useState([]);
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const NeededDetails = localStorage.getItem('NeededDetails');

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/workouts', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setWorkouts(response.data);
        } catch (error) {
            console.error('Error fetching workouts:', error);
        }
    };

    const generateWorkout = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/ai/generate',
                { prompt },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setWorkouts([response.data, ...workouts]);
            console.log(response)
            setPrompt('');
        } catch (error) {
            console.error('Error generating workout:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteWorkout = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/workouts/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setWorkouts(workouts.filter(workout => workout._id !== id));
        } catch (error) {
            console.error('Error deleting workout:', error);
        }
    };
    console.log(NeededDetails)
    return (
        <div className="details">
            <h1>{NeededDetails}</h1>
            <div className="workout-list">
                {/* {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout._id}
                        workout={workout}
                        onDelete={() => deleteWorkout(workout._id)}
                    />
                ))} */}
            </div>
        </div>
    );
};

export default Details;