import React from 'react';
import { Carousel } from '../../components/carousel';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header/header';
import { Store } from '../../components/store';
import '../../App.css';
import './index.css';

export const StoreProfile = () => {
    return (
        <>
            <Header logged={true}/>
            <Store />
            <h5>Confira outras lojas!</h5>
            <Carousel />
            <Footer />
        </>
    );
}