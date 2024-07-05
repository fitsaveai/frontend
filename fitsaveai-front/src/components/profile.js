import React from 'react';
import { useState, useEffect } from 'react';
import './profile.css';
import axios from 'axios';
import profile from '../profileImg/profile.png'
import { Link, useNavigate } from 'react-router-dom';
import WorkoutCard from './workoutcard';
import WorkoutList from './workoutlist';

const ExplorePage = () => {
    const [workouts, setWorkouts] = useState([]);
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const tokenCopy = document.getElementById('token');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
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

    // const generateWorkout = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/ai/generate',
    //             { prompt },
    //             { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    //         );
    //         setWorkouts([response.data, ...workouts]);
    //         console.log(response)
    //         setPrompt('');
    //     } catch (error) {
    //         console.error('Error generating workout:', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const deleteWorkout = async (id) => {
    //     try {
    //         await axios.delete(`http://localhost:5000/api/workouts/${id}`, {
    //             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    //         });
    //         setWorkouts(workouts.filter(workout => workout._id !== id));
    //     } catch (error) {
    //         console.error('Error deleting workout:', error);
    //     }
    // };
    console.log(name)
    return (
        <div className="profile-page">
            <main className="profile-content">
                <h1>Explore Workout Plans</h1>
                <div className='profile-cluster'>
                    <div className='profile-img-cluster'>
                        <h1>{name}</h1>
                        <img src={profile} alt="hi" width='60%'/>
                        <Link to="/accInfo"><button className='pfp-img'>Edit Profile</button></Link>
                    </div>
                    <div className='profile-group-cluster'>
                        <h1>Workouts active: number</h1>
                        <h3>Top 5 of your workouts:</h3>
                        <div className="workout-list1">
                            {workouts.map((workout) => (
                        <WorkoutList
                            key={workout._id}
                            workout={workout}
                        />
                    ))}
                        </div>
                        <Link to="/dashboard"><button className='pfp-img1'>Go To Dashboard</button></Link> 
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ExplorePage;