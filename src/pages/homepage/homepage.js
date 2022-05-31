import React from 'react';
import { SearchBar } from '../../components/searchBar/searchBar';
import './homepage.css';

export const Homepage = () => {
    return (
        <main className="homepage">
            <div className="homepage_main__text">
                <h2>Tudo pra facilitar seu dia a dia</h2>
                <h5>O que você precisa está aqui. Peça e receba.</h5>
            </div>
            <SearchBar />
        </main>
    );
};