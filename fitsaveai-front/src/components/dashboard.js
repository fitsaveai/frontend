import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const userWorkouts = [
        { id: 1, title: 'Monday Strength', lastPerformed: '2023-07-01' },
        { id: 2, title: 'Wednesday Cardio', lastPerformed: '2023-06-28' },
        { id: 3, title: 'Friday Full Body', lastPerformed: '2023-06-30' },
    ];

    return (
        <div className="dashboard">
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/" className="nav-logo">FitSaverAI</Link>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/explore" className="nav-link">Explore</Link>
                </div>
                <div className="nav-right">
                    <button className="btn btn-secondary">Log Out</button>
                </div>
            </nav>
            <main className="dashboard-content">
                <h1>Welcome, User!</h1>
                <section className="quick-actions">
                    <button className="btn btn-primary">Create New Workout</button>
                    <button className="btn btn-secondary">View Progress</button>
                </section>
                <section className="user-workouts">
                    <h2>Your Workouts</h2>
                    <ul className="workout-list">
                        {userWorkouts.map((workout) => (
                            <li key={workout.id} className="workout-item">
                                <span>{workout.title}</span>
                                <span>Last performed: {workout.lastPerformed}</span>
                                <button className="btn btn-primary">Start Workout</button>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;