// InsurancePage.js
import React from 'react';
import './InsurancePage.css';

const InsurancePage = () => {
    return (
        <div className="insurance-page">
            <header className="insurance-header">
                <h1>Farm Insurance</h1>
            </header>
            <main className="insurance-main">
                <section className="insurance-types">
                    <h2>For Buyers</h2>
                    <div className="insurance-cards">
                        <div className="insurance-card">
                            <h3>Basic Coverage</h3>
                            <p className="price">₹499/month</p>
                            <p>Essential coverage for small-scale buyers</p>
                            <ul className="coverage-list">
                                <li>Crop quality protection</li>
                                <li>Transportation loss coverage</li>
                                <li>Transaction security</li>
                                <li>Price drop protection</li>
                                <li>Weather-related losses</li>
                            </ul>
                            <button className="get-started-button">Get Started</button>
                        </div>
                        <div className="insurance-card most-popular">
                            <h3>Premium Coverage</h3>
                            <p className="price">₹999/month</p>
                            <p>Complete protection for regular buyers</p>
                            <ul className="coverage-list">
                                <li>Crop quality protection</li>
                                <li>Transportation loss coverage</li>
                                <li>Transaction security</li>
                                <li>Price drop protection</li>
                                <li>Weather-related losses</li>
                            </ul>
                            <button className="get-started-button">Get Started</button>
                        </div>
                        <div className="insurance-card">
                            <h3>Enterprise Coverage</h3>
                            <p className="price">₹1,999/month</p>
                            <p>Comprehensive protection for bulk buyers</p>
                            <ul className="coverage-list">
                                <li>Crop quality protection</li>
                                <li>Transportation loss coverage</li>
                                <li>Transaction security</li>
                                <li>Price drop protection</li>
                                <li>Weather-related losses</li>
                            </ul>
                            <button className="get-started-button">Get Started</button>
                        </div>
                    </div>
                </section>
                <section className="insurance-types">
                    <h2>For Sellers</h2>
                    <div className="insurance-cards">
                        <div className="insurance-card">
                            <h3>Basic Coverage</h3>
                            <p className="price">₹499/month</p>
                            <p>Essential coverage for small-scale sellers</p>
                            <ul className="coverage-list">
                                <li>Crop quality protection</li>
                                <li>Transportation loss coverage</li>
                                <li>Transaction security</li>
                                <li>Price drop protection</li>
                                <li>Weather-related losses</li>
                            </ul>
                            <button className="get-started-button">Get Started</button>
                        </div>
                        <div className="insurance-card most-popular">
                            <h3>Premium Coverage</h3>
                            <p className="price">₹999/month</p>
                            <p>Complete protection for regular sellers</p>
                            <ul className="coverage-list">
                                <li>Crop quality protection</li>
                                <li>Transportation loss coverage</li>
                                <li>Transaction security</li>
                                <li>Price drop protection</li>
                                <li>Weather-related losses</li>
                            </ul>
                            <button className="get-started-button">Get Started</button>
                        </div>
                        <div className="insurance-card">
                            <h3>Enterprise Coverage</h3>
                            <p className="price">₹1,999/month</p>
                            <p>Comprehensive protection for bulk sellers</p>
                            <ul className="coverage-list">
                                <li>Crop quality protection</li>
                                <li>Transportation loss coverage</li>
                                <li>Transaction security</li>
                                <li>Price drop protection</li>
                                <li>Weather-related losses</li>
                            </ul>
                            <button className="get-started-button">Get Started</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="insurance-footer">
                <p>© 2025 KrishiKare</p>
            </footer>
        </div>
    );
};

export default InsurancePage;
