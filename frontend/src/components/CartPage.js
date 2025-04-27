// CartPage.js
import React, { useState, useEffect } from 'react';
import './CartPage.css';

const CartPage = () => {
    // Dummy cart data
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Organic Potatoes', price: 2.99, quantity: 2, image: '/images/potatoes.jpg' },
        { id: 2, name: 'Fresh Carrots', price: 1.99, quantity: 3, image: '/images/carrots.jpg' },
        { id: 3, name: 'Premium Rice', price: 5.49, quantity: 1, image: '/images/rice.jpg' }
    ]);

    // Function to update quantity
    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    // Function to remove item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = subtotal > 0 ? 5.00 : 0;
    const total = subtotal + shippingCost;

    return (
        <div className="cart-page">
            <header className="cart-header">
                <h1>Your Cart</h1>
            </header>

            <main className="cart-main">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-price">${item.price.toFixed(2)}</p>
                                        <div className="item-quantity">
                                            <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>

                        <div className="cart-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping:</span>
                                <span>${shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className="checkout-button">Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </main>

            <footer className="cart-footer">
                <p>© 2025 KrishiKare</p>
            </footer>
        </div>
    );
};

export default CartPage;
