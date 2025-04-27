// SellerDashboard.js
import React from 'react';
import './SellerDashboard.css'; // Create a corresponding CSS file

const SellerDashboard = () => {
    return (
        <div className="seller-dashboard">
            <header className="seller-header">
                <h1>Seller Dashboard</h1>
            </header>
            <main className="seller-main">
                <section className="seller-summary">
                    <h2>Summary</h2>
                    <div className="summary-cards">
                        <div className="card">
                            <h3>Total Sales</h3>
                            <p>$10,000</p>
                        </div>
                        <div className="card">
                            <h3>Products Listed</h3>
                            <p>50</p>
                        </div>
                        {/* Add more summary cards here */}
                    </div>
                </section>
                <section className="seller-products">
                    <h2>Your Products</h2>
                    {/* Display seller's products here */}
                </section>
                <section className="seller-orders">
                    <h2>Recent Orders</h2>
                    {/* Display recent orders here */}
                </section>
            </main>
            <footer className="seller-footer">
                <p>© 2025 KrishiKare</p>
            </footer>
        </div>
    );
};

export default SellerDashboard;
