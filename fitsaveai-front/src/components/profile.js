import React from 'react';
import './profile.css';
import profile from '../profileImg/profile.png'

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
                        <button className='pfp-img'>Change Profile Image</button>
                    </div>
                    <div className='profile-group-cluster'>
                        <h1>Workouts active: {name}</h1>
                        <button className='pfp-img1'>Go To Dashboard</button>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ExplorePage;