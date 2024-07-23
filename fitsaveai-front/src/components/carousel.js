// Carousel.js
import React, { useState } from 'react';
import './carousel.css';

const images = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F673217844283870026%2F&psig=AOvVaw1HdGlICyVcefwXRd7nlyoF&ust=1721188106257000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiro8LTqocDFQAAAAAdAAAAABAE',
    'https://cdn.pixabay.com/photo/2016/11/14/03/16/arms-1822476_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/01/19/18/01/legs-1991140_960_720.jpg',
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
