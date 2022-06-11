import React from 'react';
import '../../App.css';
import './index.css';

export const MainPage = () => {
    return (
        <section className="main-page">
            <div className="card-section">
                {/*Transformar card-content em um componente*/}
                <div className="card-content">
                    <h3>Ambulantes</h3>
                    <button onClick={() => alert('Pesquisando...')}>Ver opções...</button>
                </div>
                <div className="card-content">
                    <h3>Lojas</h3>
                    <button onClick={() => alert('Pesquisando...')}>Ver opções...</button>
                </div>
            </div>
        </section>
    );
}