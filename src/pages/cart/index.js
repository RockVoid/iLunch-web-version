import React, { useContext } from 'react';
import '../../App.css';
import './index.css';
import { Header } from '../../components/header/header';
import { useAuth } from '../../contexts/AuthContext';

export const Cart = () => {
    const cartContext = useAuth(); 

    return (
        <div className="cart-page-container">
            <Header />
            <div className="cart">
                <div className="cart-header"><h1>Seu carrinho tem {cartContext.cartGlobal.length} itens</h1></div>
                <div className="cart-body">
                    {/*Cart component begin*/}
                    <div className="cart-component">
                        <div className="cart-component-title"><h3>Carneiro do Ordones</h3></div>
                        <div className="cart-component-container">
                            <div className="cart-component-img">
                                <h4>Bife a role</h4>
                                <div><img src="" alt="bife a role"/></div>
                            </div>
                            <div>Preço: R$4.99</div>    
                        </div>
                    </div>
                    {/*Cart component end*/}
                    <div>Total: R$4.99</div>
                </div>
            </div>
        </div>
    )
}