import React from 'react';
import '../../App.css';
import './index.css';

export const CardStore = ({ store }) => {
    console.log(store);
    return (
        <div className="card-content">
            <span></span>
            <span></span>
            <div>
                <p>{store.storeName}</p>
                <figure>
                    <img 
                        src={store.imgUrl}
                        alt="Ver opções"
                    />
                </figure>
                <div className="link-options">
                    Ver opções
                    <span> &gt;</span>
                </div>
            </div>
        </div>
    );
}