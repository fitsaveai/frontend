import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from './workoutcard';
import StarterCard from './StarterCard';
import UploadWorkoutModal from './UploadWorkoutModal';
import './oasis.css';

const Oasis = () => {
    console.log('Rendering Oasis component');

    const [starterWorkouts, setStarterWorkouts] = useState([]);
    const [starterDiets, setStarterDiets] = useState([]);
    const [featuredWorkouts, setFeaturedWorkouts] = useState([]);
    const [communityWorkouts, setCommunityWorkouts] = useState([]);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    useEffect(() => {
        console.log('Oasis component mounted');
        fetchStarterWorkouts();
        fetchStarterDiets();
        fetchFeaturedWorkouts();
        fetchCommunityWorkouts();
    }, []);

    const fetchStarterWorkouts = async () => {
        try {
            console.log('Fetching starter workouts');
            const response = await axios.get('http://localhost:5000/api/workouts/starter');
            console.log('Starter workouts fetched:', response.data);
            setStarterWorkouts(response.data);
        } catch (error) {
            console.error('Error fetching starter workouts:', error);
        }
    };

    const fetchStarterDiets = async () => {
        try {
            console.log('Fetching starter diets');
            const response = await axios.get('http://localhost:5000/api/diets/starter');
            console.log('Starter diets fetched:', response.data);
            setStarterDiets(response.data);
        } catch (error) {
            console.error('Error fetching starter diets:', error);
        }
    };

    const fetchFeaturedWorkouts = async () => {
        try {
            console.log('Fetching featured workouts');
            const response = await axios.get('http://localhost:5000/api/workouts/featured');
            console.log('Featured workouts fetched:', response.data);
            setFeaturedWorkouts(response.data);
        } catch (error) {
            console.error('Error fetching featured workouts:', error);
        }
    };

    const fetchCommunityWorkouts = async () => {
        try {
            console.log('Fetching community workouts');
            const response = await axios.get('http://localhost:5000/api/workouts/community');
            console.log('Community workouts fetched:', response.data);
            setCommunityWorkouts(response.data);
        } catch (error) {
            console.error('Error fetching community workouts:', error);
        }
    };

    const handleLike = async (workoutId) => {
        try {
            console.log('Liking workout:', workoutId);
            await axios.post(`http://localhost:5000/api/workouts/${workoutId}/like`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log('Workout liked successfully');
            fetchCommunityWorkouts(); 
        } catch (error) {
            console.error('Error liking workout:', error);
        }
    };

    const handleWorkoutUpload = () => {
        console.log('Workout uploaded successfully');
        fetchCommunityWorkouts(); 
        setIsUploadModalOpen(false);
    };

    const handleUploadButtonClick = () => {
        console.log('Upload button clicked');
        setIsUploadModalOpen(true);
    };

    console.log('Current state - isUploadModalOpen:', isUploadModalOpen);

    return (
        <div className="oasis">
            <h1>Welcome to the Oasis</h1>
            <button
                onClick={handleUploadButtonClick}
                className="upload-btn"
            >
                Upload Workout
            </button>

            <section className="starter-section">
                <h2>Get Started</h2>
                <div className="starter-grid">
                    <div className="starter-workouts">
                        <h3>Starter Workouts</h3>
                        <div className="starter-cards">
                            {starterWorkouts.map(workout => (
                                <StarterCard key={workout._id} item={workout} type="workout" />
                            ))}
                        </div>
                    </div>
                    <div className="starter-diets">
                        <h3>Starter Diets</h3>
                        <div className="starter-cards">
                            {starterDiets.map(diet => (
                                <StarterCard key={diet._id} item={diet} type="diet" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-workouts">
                <h2>Featured Workouts</h2>
                <div className="workout-grid">
                    {featuredWorkouts.map(workout => (
                        <WorkoutCard
                            key={workout._id}
                            workout={workout}
                            showLikeButton={true}
                            onLike={handleLike}
                        />
                    ))}
                </div>
            </section>

            <section className="community-workouts">
                <h2>Community Workouts</h2>
                <div className="workout-grid">
                    {communityWorkouts.map(workout => (
                        <WorkoutCard
                            key={workout._id}
                            workout={workout}
                            showLikeButton={true}
                            onLike={handleLike}
                        />
                    ))}
                </div>
            </section>

            {isUploadModalOpen && (
                <UploadWorkoutModal
                    onClose={() => {
                        console.log('Closing upload modal');
                        setIsUploadModalOpen(false);
                    }}
                    onUpload={handleWorkoutUpload}
                />
            )}
        </div>
    );
};

export default Oasis;