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
                <input type="text" placeholder="Facebook" />
                <input type="text" placeholder="Gmail" />
                <div className="phone-and-email">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Telefone" />                    
                </div>
            </div>
        </>
    );
}