import React from 'react';
import './index.css';
import '../../App.css';
import { Header } from '../../components/header/header';

export const Cart = () => {
    return (
        <div className="cart-page-container">
            <Header />
            <div className="cart">
                <div className="cart-header"><h1>Seu carrinho</h1></div>
                <div className="cart-body">
                    <div className="cart-component">
                        <div><h3>Loja</h3></div>
                        <div>
                            <h4>Prato</h4>
                            <div>Preço</div>    
                        </div>
                    </div>
                    <div>Total: R$4.99</div>
                </div>
            </div>
        </div>
    )
}