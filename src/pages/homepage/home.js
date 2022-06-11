import React from 'react';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/index';
import { MainPage } from '../../components/mainPage';
import { Footer } from '../../components/footer';

import './home.css';

export const Homepage = () => {
    return (
        <>
            <Header logged={true}/>
            <Card />
            <MainPage />
            <Footer/>
        </>
    );
};