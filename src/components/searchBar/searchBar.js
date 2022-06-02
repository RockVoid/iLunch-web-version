import React from 'react';
import '../../App.css'; 
import './searchBar.css';

export const SearchBar = () => {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Qualquer budega..." />
            <button type="submit" onClick={() => alert('Buscando...')}>Buscar</button>
        </div>
    );
}