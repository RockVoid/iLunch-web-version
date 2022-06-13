import React from 'react';
import './index.css';

export const CarouselCard = ({ name, imgSrc }) => {
    return (
        <div className="carousel-card">
            <h4>{name}</h4>
            <div className="carousel-content">
                <figure>
                    <img 
                        className="store-img"
                        src={imgSrc} 
                        alt={name} 
                    />
                </figure>
            </div>
        </div>
    );
}