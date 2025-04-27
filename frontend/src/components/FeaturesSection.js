import React from "react";
import { FaShoppingCart, FaTractor, FaBoxes, FaShieldAlt, FaRobot, FaHeadset } from "react-icons/fa";
import "./FeaturesSection.css";

const features = [
  {
    icon: <FaShoppingCart size={32} color="#388e3c" />,
    title: "E-commerce Marketplace",
    description: "Buy and sell agricultural products directly, eliminating middlemen and ensuring better prices for both farmers and consumers."
  },
  {
    icon: <FaTractor size={32} color="#388e3c" />,
    title: "Machinery Rental",
    description: "Access modern farming equipment without the heavy investment. Rent machinery when you need it, at affordable rates."
  },
  {
    icon: <FaBoxes size={32} color="#388e3c" />,
    title: "Bulk Purchase",
    description: "Join forces with other farmers to make bulk purchases at discounted rates, reducing input costs for everyone."
  },
  {
    icon: <FaShieldAlt size={32} color="#388e3c" />,
    title: "Crop Insurance",
    description: "Protect your harvest with comprehensive crop insurance plans that cover weather events, pests, and market fluctuations."
  },
  {
    icon: <FaRobot size={32} color="#388e3c" />,
    title: "AI Recommendations",
    description: "Get personalized guidance on crop selection, pest control, and optimal farming practices based on your location and conditions."
  },
  {
    icon: <FaHeadset size={32} color="#388e3c" />,
    title: "24/7 Support",
    description: "Access expert support around the clock via chat, phone, or email. Our agriculture specialists are always ready to help."
  }
];

const FeaturesSection = () => (
  <section className="features-section">
    <div className="features-header">
      <h3 className="features-label">FEATURES</h3>
      <h2 className="features-title">Everything you need to succeed in agriculture</h2>
      <p className="features-subtitle">
        KrishiKare is designed to address the unique challenges faced by farmers and agricultural suppliers.
      </p>
    </div>
    <div className="features-grid">
      {features.map((feature, idx) => (
        <div className="feature-card" key={idx}>
          <div className="feature-icon">{feature.icon}</div>
          <div>
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-description">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
