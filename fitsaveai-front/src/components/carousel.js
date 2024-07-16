// Carousel.js
import React, { useState } from 'react';
import './carousel.css';

const images = [
    'url-to-image-1.jpg',
    'url-to-image-2.jpg',
    'url-to-image-3.jpg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>❮</button>
            <img src={images[currentIndex]} alt="slide" className="carousel-image" />
            <button className="carousel-button next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;
