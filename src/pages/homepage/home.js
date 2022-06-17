import React from 'react';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/index';
import { MainPage } from '../../components/mainPage';
import { Footer } from '../../components/footer';
import { Modal } from '../../components/modal';

import './home.css';

let firstTime = localStorage.getItem('firstTime')
    ? !JSON.parse(localStorage.getItem('firstTime'))
    : true;

export const Homepage = () => {
    const checkNewUser = () => {
        if (firstTime) { JSON.stringify(localStorage.setItem('firstTime', firstTime)) }
    }
    checkNewUser();
    return (
        <>
            <Header logged={true}/>
            {firstTime && <Modal />}
            <Card />
            <MainPage />
            <Footer/>
        </>
    );
};