import React from 'react';
import './index.css';
import { CarouselCard } from '../carousel-card/index';

export const Carousel = () => {
    return (
        <div className="carousel">
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
        </div>
    );
}