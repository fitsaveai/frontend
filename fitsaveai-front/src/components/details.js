import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from './workoutcard';
import './details.css';

const Details = () => {
    const NeededDetails = localStorage.getItem('NeededDetails');
    // console.log(NeededDetails)
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