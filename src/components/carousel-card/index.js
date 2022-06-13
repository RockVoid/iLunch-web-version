import React from 'react';
import './index.css';

export const CarouselCard = ({ name, imgSrc }) => {
    return (
        <div className="carousel-card">
            <h4>La pasta</h4>
            <div className="carousel-content">
                <figure>
                    <img 
                        className="store-img"
                        src="http://matheuslessa.com.br/wp-content/uploads/2019/04/vale-a-pena-vender-pelo-ifood.jpg" 
                        alt="link" 
                    />
                </figure>
            </div>
        </div>
    );
}