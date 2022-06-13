import React from 'react';
import './index.css';
import { CarouselCard } from '../carousel-card';

const pratos = [
    {
        name: 'Carbonara',
        pratoUrl: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201906182008_2b157a73-7564-4733-94c1-8d0376e7bb39.png',
    },
    {
        name: 'Caldo de cana',
        pratoUrl: 'https://akdelicatessen.com.br/wp-content/uploads/2022/04/caipirinha-de-garapa-800x420.png',
    },
    {
        name: 'Pastel na brasa',
        pratoUrl: 'https://s2.glbimg.com/4ZSiCQFAKt_apvCNMVaM_z1Z1PU=/0x0:620x372/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/06/04/14_29_48_237_receita_pastel_de_queijo1.jpg',
    },
    {
        name: 'Arroz de leite',
        pratoUrl: 'https://cdn.panelinha.com.br/receita/1493746003533-_AY_9463.jpg',
    }
];

export const Store = () => {
    return (
        <div className="store-container">
            <h3>Coco Bambu</h3>
            <div className="img-text-container">
                <figure>
                    <img 
                        src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201906182008_2b157a73-7564-4733-94c1-8d0376e7bb39.png" 
                        alt="Options name" 
                    />
                </figure>
                <div className="desc-and-text">
                    <div className="desc">
                        <h5>Descrição</h5>
                        <p>
                            Este é um restautante renomado, tal
                            este é um restautante renomado tal
                            este é um restautante renomado. Tal
                            este é um restautante renomado e tal
                            este é um restautante renomado e tal
                        </p>
                    </div>
                </div>
            </div>
            <div className="store-options">
                <h5>Opções de pratos</h5>
                <div className="carousel-options">
                    {pratos.map((item, index) => {
                        return (<CarouselCard key={index} name={item.name} imgSrc={item.pratoUrl} />);
                    })}
                </div>
            </div>
        </div>
    );
}