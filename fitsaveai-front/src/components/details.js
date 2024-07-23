import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from './WorkoutCard';
import './details.css';

const Details = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Delay execution by 10 seconds
        setTimeout(() => {
            setShowContent(true);
        }, 3000);
    }, []);

    const NeededDetails = localStorage.getItem('NeededDetails');
    const Response = localStorage.getItem('response');

    return (
        <div className="details">
            <h1>{NeededDetails}</h1>
            {showContent ? (
                <div className="workout-list2">
                    <p>{Response}</p>
                </div>
            ):(
            <div className="workout-list">
                <p>generating...</p>
            </div>
            )}
        </div>
    );
};

export default Details;
