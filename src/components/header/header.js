import React from 'react';
import '../../App.css';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = ({ logged }) => {
    return (
        <div className="header">
            <div className="header__link">
                <div className="header__link__logo">
                    <Link to="/">
                        <img 
                            src="http://matheuslessa.com.br/wp-content/uploads/2019/04/vale-a-pena-vender-pelo-ifood.jpg"
                            alt="iLunch"
                        />
                    </Link>
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
            {logged && <div className="header__link">
                <div className="header__link__buttons">
                    <button className="btn__criar_conta">
                        <Link to="/register">Criar conta</Link>
                    </button>
                    <button className="btn__entrar">
                        <Link to="/login">Entrar</Link>
                    </button>
                    <Link to="/cart" className="cart">
                        <img 
                            src="data:image/png;base64,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"
                            alt="Carrinho"
                        />
                    </Link>
                </div>
            </div>}
        </div>
    );
};