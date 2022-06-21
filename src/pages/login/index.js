import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Login = () => {
    return (
        <div className="login-container">
            <div className="login">
                <div className="login-header">
                    <h1>Login</h1>
                    <button><Link to="/">Inicio</Link></button>
                </div>
                <div className="login-inputs">
                    <input 
                        type="text" 
                        placeholder="Email ou número de telefone" 
                    />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                    />
                    <Link to="/"><button>Entrar</button></Link>
                    <Link to="/register"><button>Cadastrar</button></Link>
                    <Link to="/forget-login">Esqueci minha senha</Link>
                </div>
            </div>
        </div>
    );
}