import React from "react";
import { Link } from "react-router-dom";
import strawberry from "./strawberry.png"; // Use your image path

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-text">
      <h1>
        Grow your farming<br />
        with <span className="highlight">AI-driven solutions</span>
      </h1>
      <p>
        KrishiKare connects farmers with suppliers, offers crop insurance, machinery rentals, and provides AI-based recommendations to help you make better farming decisions.
      </p>
      <div className="hero-buttons">
        <Link to="/store">
        <button className="explore-store">Explore Store</button>
        </Link>      
      </div>
    </div>
    <div className="hero-image">
      <img src={strawberry} alt="Strawberry" />
    </div>
  </section>
);

export default HeroSection;
