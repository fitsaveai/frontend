import React from 'react';
import './profile.css';
import profile from '../profileImg/profile.png'
import { Link, useNavigate } from 'react-router-dom';

const ExplorePage = () => {
    const tokenCopy = document.getElementById('token');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
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
                        <div className="workout-list">
                            
                        </div>
                        <Link to="/dashboard"><button className='pfp-img1'>Go To Dashboard</button></Link> 
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ExplorePage;