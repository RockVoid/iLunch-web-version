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
    ]

    return (
        <div className="carousel">
            {stores.map((item, index) => {
                return (
                    <CarouselCard name={item.name} imgSrc={item.imgSrc} key={index} />
                )
            })}           
        </div>
    );
}