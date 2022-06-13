import React from 'react';
import './index.css';
import '../../App.css';
import { Header } from '../../components/header/header';

export const RegisterPage = () => {
    return (
        <>
            <Header logged={false} />
            <div className="register-section">
                <h2>Falta pouco pra matar sua fome</h2>
                <span>Como deseja continuar?</span>
                <input className="facebook-input" type="text" placeholder="Facebook" />
                <input className="google-input" type="text" placeholder="Gmail" />
                <div className="phone-and-email">
                    <input className="email-input" type="text" placeholder="Email" />
                    <input className="phone-input" type="text" placeholder="Telefone" />                    
                </div>
            </div>
        </>
    );
}