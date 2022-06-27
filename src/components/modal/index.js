import React, { useState } from 'react';
import './index.css'
import '../../App.css';
import { Link } from 'react-router-dom';

export const Modal = () => {
    return (
        <div className="modal-container-flex">
            <div className="modal-container">
                <h1>Bem vindo ao iLunch</h1>
                <p>
                    Aqui você pode matar sua fome de maneira fácil, rápido e barata!
                    Faça seu cadastro e comece a aproveitar!    
                </p>
                <Link to="/register"><button>Vamos lá!</button></Link>
            </div>
        </div>
    );
}
