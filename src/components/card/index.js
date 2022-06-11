import React from 'react';
import { SearchBar } from '../searchBar/searchBar';
import './index.css';

export const Card = () => {
    return (
        <main className="homepage">
            <div className="homepage_main__text">
                <p>Tudo pra facilitar seu dia a dia</p>
                <h5>O que você precisa está aqui. Peça e receba.</h5>
            </div>
            <SearchBar />
        </main>
    );
}