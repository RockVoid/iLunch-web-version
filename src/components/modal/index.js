import React, { useState } from 'react';
import './index.css'
import '../../App.css';

export const Modal = () => {
    const [modal, showModal] = useState(true);

    return (
        <>
        {
            modal &&
            <div className="modal-container-flex">
                <div className="modal-container">
                    <h1>Bem vindo ao iLunch</h1>
                    <p>Aqui você pode matar sua fome de maneira fácil, rápido e barata!</p>
                    <button onClick={() => showModal(false)}>Vamos lá!</button>
                </div>
            </div>
        }
        </>
    );
}
