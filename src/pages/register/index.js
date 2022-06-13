import React from 'react';
import './index.css';
import '../../App.css';
import { Header } from '../../components/header/header';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    return (
        <>
            <Header logged={false} />
            <div className="register-section">
                <h2>Falta pouco pra matar sua fome</h2>
                <span>Como deseja continuar?</span>
                <button className="facebook-btn">Facebook</button>
                <button className="google-btn">Gmail</button>
                <div className="phone-and-email">
                    <input className="email-input" type="text" placeholder="Email Alternativo" />
                    <input className="phone-input" type="number" placeholder="Telefone" />                    
                </div>
                <button className="back-btn"><Link to="/">Voltar</Link></button>
            </div>
        </>
    );
}