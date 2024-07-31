import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from './workoutcard';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faArrowDownZA, faArrowUpAZ, faArrowsUpDown, faArrowDown, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [workouts, setWorkouts] = useState([]);
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        try {
            const response = await axios.get('https://fitsaveai.uk.r.appspot.com/api/workouts', {
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
            const response = await axios.post('https://fitsaveai.uk.r.appspot.com/api/ai/generate',
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
            await axios.delete(`https://fitsaveai.uk.r.appspot.com/api/workouts/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setWorkouts(workouts.filter(workout => workout._id !== id));
        } catch (error) {
            console.error('Error deleting workout:', error);
        }
    };

    return (
        <div className="dashboard">
            <h1>Your Dashboard</h1>
            <form onSubmit={generateWorkout} className="workout-generator">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the workout you want to generate..."
                    rows={4}
                />

                <button type="submit" disabled={isLoading}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    {/* {isLoading ? 'Generating...' : 'Generate Workout'} */}
                </button>
            </form>
            <div className="workout-list">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout._id}
                        workout={workout}
                        onDelete={() => deleteWorkout(workout._id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;