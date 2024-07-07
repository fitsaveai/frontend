import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './workoutcard.css';

const WorkoutCard = ({ workout, onDelete }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const details = (exercise, index) => {
        console.log(exercise)
        localStorage.setItem('NeededDetails', exercise.name);
    };
    // {console.log(workout.exercises)}
    const downloadPDF = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/workouts/${workout._id}/pdf`, {
                responseType: 'blob',
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });

            const blob = new Blob([response.data], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${workout.title}.pdf`;
            link.click();
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    return (
        <div className="workout-card">
            <h2>{workout.title}</h2>
            <p>{workout.description}</p>
            <div className="button-container">
                <button onClick={toggleExpand}>
                    {isExpanded ? 'Hide Details' : 'View Details'}
                </button>
                <button onClick={downloadPDF} className="download-btn">
                    Download PDF
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
                            <p>Reps: {exercise.reps}</p>
                            {exercise.time && <p>Duration: {exercise.time}</p>}
                            {exercise.notes && <p>Notes: {exercise.notes}</p>}
                            {exercise.duration && <p>Notes: {exercise.duration}</p>}
                            <Link to="/details" onClick={details(exercise, index)}><button>Details</button></Link> {}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WorkoutCard;