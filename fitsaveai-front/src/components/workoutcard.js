import React, { useState } from 'react';
import './workoutcard.css';

const WorkoutCard = ({ workout, onDelete }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="workout-card">
            <h2>{workout.title}</h2>
            <p>{workout.description}</p>
            <div className="button-container">
                <button onClick={toggleExpand}>
                    {isExpanded ? 'Hide Details' : 'View Details'}
                </button>
                <button onClick={() => onDelete(workout._id)} className="delete-btn">
                    Delete Workout
                </button>
            </div>
            {isExpanded && (
                <div className="workout-details">
                    {workout.exercises.map((exercise, index) => (
                        <div key={index} className="exercise">
                            <h3>{exercise.name}</h3>
                            <p>Sets: {exercise.sets}</p>
                            <p>Reps: {exercise.reps} on {exercise.interval}</p>
                            {exercise.time && <p>Duration: {exercise.time}</p>}
                            {exercise.notes && <p>Notes: {exercise.notes}</p>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WorkoutCard;