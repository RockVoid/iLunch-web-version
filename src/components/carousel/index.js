import React from 'react';
import './index.css';
import { CarouselCard } from '../carousel-card/index';

export const Carousel = () => {
    const stores = [
        {
            name: 'Coco Bambu',
            imgSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201910292243_94aaf166-84cc-4ebf-a35d-d223be34d01f.png'
        },
        {
            name: 'China in Box',
            imgSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/d4a3984f-2b73-4f46-99df-1d6bc79ff293/202001031317_CXpO_i.png'
        },
        {
            name: 'Outback',
            imgSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201906182008_2b157a73-7564-4733-94c1-8d0376e7bb39.png'
        },
        {
            name: 'Habibs',
            imgSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201801231937__HABIB_VERDE.jpg'
        },
        {
            name: 'MC Donalds',
            imgSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/Logo%20McDonald_MCDON_DRIV15.jpg'
        },
        {
            name: 'Eataly',
            imgSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/595f29c3-3264-4e74-8089-cec0421420fb/202002101723_dmdz_i.jpg'
        },
        {
            name: 'BIG Mercado',
            imgSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/202010121938_31dbd467-bb46-4884-8879-e545789acc39.png'
        },
        {
            name: 'DIA Mercado',
            imgSrc: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/0dbcb1e9-b354-4306-b0f7-d485ac655131/202004061634_lP8b_.jpeg'
        },
    ]

    return (
        <div className="carousel">
            {stores.map((item, index) => {
                return (
                    <CarouselCard 
                        name={item.name} 
                        imgSrc={item.imgSrc} 
                        key={index} 
                    />
                )
            })}           
        </div>
    );
}