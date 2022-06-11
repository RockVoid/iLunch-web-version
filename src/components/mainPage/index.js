import React from 'react';
import '../../App.css';
import { CardStore } from '../card-store';
import './index.css';

export const MainPage = () => {
    const opt = [
        {
            storeName: 'Barraquinhas',
            imgUrl: 'https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png',
            optionsLink: 'www.ifood.com.br'
        },
        {
            storeName: 'Lojas',
            imgUrl: 'https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png',
            optionsLink: 'www.ifood.com.br'
        }
    ]

    return (
        <section className="main-page">
            <div className="card-section">
                {opt.map(store => {return (<CardStore store={store} key={Math.random() + 1} />)})}
            </div>
        </section>
    );
}