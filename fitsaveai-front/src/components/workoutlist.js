import React, { useState } from 'react';
import './workoutcard.css';

const WorkoutList = ({ workout, onDelete }) => {
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpand = () => {
    //     setIsExpanded(!isExpanded);
    // };

    return (
        <div className="workout-card1">
            <h2>{workout.title}</h2>
            <p>{workout.description}</p>
        </div>
    );
};

export default WorkoutList;