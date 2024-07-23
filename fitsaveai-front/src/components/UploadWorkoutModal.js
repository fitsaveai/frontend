import React, { useState } from 'react';
import axios from 'axios';
import './UploadWorkoutModal.css';

const UploadWorkoutModal = ({ onClose, onUpload }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/workouts',
                { title, description, category, isPublic: true },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            onUpload();
            onClose();
        } catch (error) {
            console.error('Error uploading workout:', error);
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
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Workout Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="weightLoss">Weight Loss</option>
                        <option value="muscleGain">Muscle Gain</option>
                        <option value="endurance">Endurance</option>
                        <option value="flexibility">Flexibility</option>
                    </select>
                    <button type="submit">Upload</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default UploadWorkoutModal;