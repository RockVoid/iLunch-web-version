import React, { useState } from 'react';
import './index.css';
import '../../App.css';
import { Header } from '../../components/header/header';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase-sdk-config';

export const RegisterPage = () => {                 
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPhone, setRegisterPhone] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail || registerPhone,
                registerPassword,
            );
            console.log(user)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header logged={false} />
            <div className="register-section">
                <h2>Falta pouco pra matar sua fome</h2>
                <span>Como deseja continuar?</span>
                <button className="facebook-btn">Facebook</button>
                <button className="google-btn">Gmail</button>
                <div className="phone-and-email">
                    <input 
                        className="email-input" 
                        type="text" 
                        placeholder="Email Alternativo"
                        onBlur={(event) => {setRegisterEmail(event.target.value)}}
                    />
                    <input 
                        className="phone-input" 
                        type="number" 
                        placeholder="Telefone" 
                        onBlur={(event) => {setRegisterPhone(event.target.value)}}
                    />                    
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Password"
                        onBlur={(event) => {setRegisterPassword(event.target.value)}}
                    />
                </div>
                <button className="back-btn"><Link to="/">Voltar</Link></button>
            </div>
        </>
    );
}