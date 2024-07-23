import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UploadWorkoutModal.css';

const UploadWorkoutModal = ({ onClose, onUpload }) => {
    console.log('Rendering UploadWorkoutModal');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isPublic, setIsPublic] = useState(true);

    useEffect(() => {
        console.log('UploadWorkoutModal mounted');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted', { title, description, category, isPublic });
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                alert('You must be logged in to upload a workout.');
                return;
            }

            console.log('Sending POST request to upload workout');
            const response = await axios.post('http://localhost:5000/api/workouts',
                { title, description, category, isPublic },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Workout uploaded successfully:', response.data);
            onUpload();
            onClose();
        } catch (error) {
            console.error('Error uploading workout:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
            alert('Failed to upload workout. Please try again.');
        }
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Upload Workout</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Workout Title"
                        value={title}
                        onChange={(e) => {
                            console.log('Title changed:', e.target.value);
                            setTitle(e.target.value);
                        }}
                        required
                    />
                    <textarea
                        placeholder="Workout Description"
                        value={description}
                        onChange={(e) => {
                            console.log('Description changed:', e.target.value);
                            setDescription(e.target.value);
                        }}
                        required
                    />
                    <select
                        value={category}
                        onChange={(e) => {
                            console.log('Category changed:', e.target.value);
                            setCategory(e.target.value);
                        }}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="strength">Strength</option>
                        <option value="cardio">Cardio</option>
                        <option value="flexibility">Flexibility</option>
                        <option value="other">Other</option>
                    </select>
                    <label>
                        <input
                            type="checkbox"
                            checked={isPublic}
                            onChange={(e) => {
                                console.log('isPublic changed:', e.target.checked);
                                setIsPublic(e.target.checked);
                            }}
                        />
                        Make this workout public
                    </label>
                    <button type="submit">Upload</button>
                    <button type="button" onClick={() => {
                        console.log('Cancel button clicked');
                        onClose();
                    }}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default UploadWorkoutModal;