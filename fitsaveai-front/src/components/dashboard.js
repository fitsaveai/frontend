import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import './dashboard.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faArrowDownZA, faArrowUpAZ, faArrowsUpDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const userWorkouts = [
    { id: 1, title: 'Monday Strength', lastPerformed: '2023-07-01' },
    { id: 2, title: 'Wednesday Cardio', lastPerformed: '2023-06-28' },
    { id: 3, title: 'Friday Full Body', lastPerformed: '2023-06-30' },
];

const Dashboard = () => {

    const[toDo, setToDo] = useState([
        { id: 1, title: 'Monday Strength', lastPerformed: '2023-07-01' },
        { id: 2, title: 'Wednesday Cardio', lastPerformed: '2023-06-28' },
        { id: 3, title: 'Friday Full Body', lastPerformed: '2023-06-30' },
        { id: 4, title: 's Full Body', lastPerformed: '2023-06-30' },
        { id: 5, title: 'a Full Body', lastPerformed: '2023-06-30' },
    ])

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
                    {/* 
                    <FontAwesomeIcon icon={faArrowUp} />
                    <FontAwesomeIcon icon={faArrowDownZA} />
                    <FontAwesomeIcon icon={faArrowUpAZ} /> 
                    <FontAwesomeIcon icon={faArrowsUpDown} />
                    <FontAwesomeIcon icon={faArrowDown} />
                    */}
                    <ul className="workout-list">
                        <li className="workout-item">
                        <a className="icons"><FontAwesomeIcon icon={faArrowUpAZ} /> </a>
                        <a className='icons'><FontAwesomeIcon icon={faArrowsUpDown} /></a>
                        <i></i>
                        </li>
                    </ul>
                    <ul className="workout-list">
                            {/* {toDo && toDo
                            .sort((a,b) => a.id > b.id ? 1:-1)
                            .map(task =>{
                                return
                            })} */}
                            {userWorkouts && userWorkouts
                            .sort((a,b) => a.id > b.id ? 1:-1)
                            .map(workout => (   
                                <li key={workout.id} className="workout-item">
                                    <span>{workout.title}</span>
                                    <span>Last performed: {workout.lastPerformed}</span>
                                    <button className="btn btn-primary">Start Workout</button>
                                </li>
                            ))}
                    
                    </ul>
                </section>
            </main>
            <script src="https://kit.fontawesome.com/bc449cadad.js" crossorigin="anonymous"></script>
        </div>
    );
};

export default Dashboard;