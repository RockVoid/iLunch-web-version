import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const CarouselCard = ({ name, imgSrc }) => {
    return (
        <div className="carousel-card">
            <h4>{name}</h4>
            <div className="carousel-content">
                <Link to="/store-profile">
                    <figure>
                        <img 
                            className="store-img"
                            src={imgSrc} 
                            alt={name} 
                        />
                    </figure>
                </Link>
            </div>
        </div>
    );
}