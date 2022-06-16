import React from 'react';
import { Header } from '../../components/header/header';

export const Login = () => {
    return (
        <>
            <Header logged={false} />
            <div className="login-contaner">
                <h2>Login</h2>
                <div className="login-container-inputs">
                    <input type="text" />
                    <input type="password" />
                    <span className="errors"></span>
                    <button>Entrar</button>
                </div>
            </div>
        </>
    );
}