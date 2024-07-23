import React from 'react';
import { Link } from 'react-router-dom';
import './StarterCard.css';

const StarterCard = ({ item, type }) => {
    return (
        <Link to={`/${type}/${item._id}`} className="starter-card">
            <h4>{item.title}</h4>
            <p>{item.shortDescription}</p>
        </Link>
    );
};

export default StarterCard;