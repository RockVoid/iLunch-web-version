import React, { useState } from 'react';
import { Header } from '../../components/header/header';
import { createUserWithEmailAndPassword, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase/firebase-sdk-config';
import './index.css';
import '../../App.css';

export const RegisterPage = () => {                 
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPhone, setRegisterPhone] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const verifyEmail = () => {
        if (!registerEmail) return;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        !emailRegex.test(registerEmail) && alert('Email inválido.');
    }
    
    const verifyPhone = () => {
        registerPhone.length === 8 && alert('Telefone inválido')
    }

    const register = async (e) => {
        e.preventDefault();

        let user = null;
        if(!registerPhone) {
            try {
                user = await createUserWithEmailAndPassword(
                    auth,
                    registerEmail, 
                    registerPassword,
                );
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                user = await signInWithPhoneNumber(
                    auth,
                    registerPhone, 
                );
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <Header logged={false} />
            <div className="register-section">
                <h2>Falta pouco pra matar sua fome</h2>
                <span>Como deseja continuar?</span>
                <button className="facebook-btn">Facebook</button>
                <button className="google-btn">Google</button>
                <div className="phone-and-email">
                    <input 
                        className="email-input" 
                        type="text"
                        disabled={registerPhone}
                        placeholder="Email"
                        onBlur={() => verifyEmail()}
                        onChange={(event) => setRegisterEmail(event.target.value)}
                    />
                    <p>ou</p>
                    <input 
                        className="phone-input" 
                        type="number" 
                        disabled={registerEmail}
                        placeholder="Telefone" 
                        onBlur={() => verifyPhone()}
                        onChange={(event) => setRegisterPhone(event.target.value)}
                    />                    
                </div>
                <div className="password-and-confirm">
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={(event) => {setRegisterPassword(event.target.value)}}
                    />
                    <button 
                        onClick={(e) => register(e)}
                        disabled={!registerPhone && !registerEmail}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </>
    );
}