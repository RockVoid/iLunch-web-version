import React from 'react';
import './searchBar.css';

export const SearchBar = () => {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Endereço de entrega" />
            <button onClick={() => alert('Buscando...')}>Buscar</button>
        </div>
    );
}