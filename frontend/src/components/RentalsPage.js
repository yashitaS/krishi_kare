// RentalsPage.js
import React, { useState } from 'react';
import './RentalsPage.css';

const RentalsPage = () => {
    const [rentals, setRentals] = useState([
        {
            id: 1,
            name: 'John Deere 5E Series Tractor',
            weeklyRate: 899,
            specifications: [
                '75 HP Engine',
                '4WD Configuration',
                'Lift Capacity: 3,000 lbs'
            ],
            image: '/images/john-deere-tractor.jpg' // Replace with your image path
        },
        {
            id: 2,
            name: 'New Holland TCS.30',
            weeklyRate: 1299,
            specifications: [
                '175 HP Engine',
                'Grain Tank: 6,000 L',
                'Cutting Width: 20 ft'
            ],
            image: '/images/new-holland-tractor.jpg' // Replace with your image path
        },
        {
            id: 3,
            name: 'Heavy Duty Moldboard Plow',
            weeklyRate: 299,
            specifications: [
                '5 Bottom Plow',
                'Working Width: 8 ft',
                'Hydraulic Adjustment'
            ],
            image: '/images/moldboard-plow.jpg' // Replace with your image path
        }
    ]);

    const [cartItems, setCartItems] = useState([]); // Cart state

    // Add to cart function
    const addToCart = (rental) => {
        setCartItems([...cartItems, rental]);
        alert(`${rental.name} added to cart!`); // Temporary feedback
    };

    return (
        <div className="rentals-page">
            <header className="rentals-header">
                <h1>Farm Equipment Rental</h1>
            </header>
            <main className="rentals-main">
                <div className="rentals-grid">
                    {rentals.map(rental => (
                        <div key={rental.id} className="rental-card">
                            <h2>{rental.name}</h2>
                            <p className="weekly-rate">Weekly Rate: ${rental.weeklyRate}</p>
                            <ul className="specifications">
                                {rental.specifications.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>
                            <button className="rent-now-button" onClick={() => addToCart(rental)}>Rent Now</button>
                        </div>
                    ))}
                </div>
            </main>
            {/* Display the cart items */}
            {cartItems.length > 0 && (
              <div className="cart-display">
                <h3>Cart Items:</h3>
                <ul>
                  {cartItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
    );
};

export default RentalsPage;
