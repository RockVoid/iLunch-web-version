import React from 'react';
import '../App.css';
import './header.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__link">
                <div className="header__link__logo">
                    <img 
                        src="http://matheuslessa.com.br/wp-content/uploads/2019/04/vale-a-pena-vender-pelo-ifood.jpg"
                        alt="iLunch"
                    />
                </div>
            </div>
            <div className="header__link">
                <div className="header__link__menus">
                    <ul>
                        <li><a href="#1">Entregador</a></li>
                        <li><a href="#2">Restaurante e mercado</a></li>
                        <li><a href="#3">Carreiras</a></li>
                        <li><a href="#4">iLunch Card</a></li>
                    </ul>
                </div>
            </div>
            <div className="header__link">
                <div className="header__link__buttons">
                    <button className="btn__criar_conta">Criar conta</button>
                    <button className="btn__entrar">Entrar</button>
                </div>
            </div>
        </div>
    );
};