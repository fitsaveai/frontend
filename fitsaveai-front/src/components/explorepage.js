import React, { useEffect } from 'react';
import './explorepage.css';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/dashboard');
        }
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden'; // Prevent scroll

        return () => {
            document.body.style.overflow = originalOverflow; // Reset overflow on unmount
        };
    }, [token, navigate]);

    const workoutPlans = [
        { id: 1, title: 'Beginner Strength Training', duration: '4 weeks' },
        { id: 2, title: 'HIIT Cardio Blast', duration: '2 weeks' },
        { id: 3, title: 'Yoga for Flexibility', duration: '3 weeks' },
        { id: 4, title: 'Advanced Powerlifting', duration: '8 weeks' },
    ];

    return (
        <div className="explore-page">
            <main className="explore-content">
                <h1>Explore Workout Plans</h1>
                <div className="workout-grid">
                    {workoutPlans.map((plan) => (
                        <div key={plan.id} className={`workout-card ${plan.id === 1 ? 'beginner-card' : ''}`}>
                            <h2>{plan.title}</h2>
                            <p>Duration: {plan.duration}</p>
                            <button className="btn btn-primary">View Plan</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ExplorePage;
