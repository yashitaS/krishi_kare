import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      rating: 5,
      text: "KrishiKare has transformed how I manage my farm. The AI recommendations helped me increase my crop yield by 30% last season, and the insurance options give me peace of mind.",
      author: "Rajesh Kumar",
      designation: "Wheat Farmer, Punjab",
    },
    {
      rating: 4,
      text: "As a small-scale vegetable farmer, accessing modern machinery was always a challenge. With KrishiKare's rental marketplace, I can now use high-quality equipment without the high costs of ownership.",
      author: "Anita Desai",
      designation: "Vegetable Farmer, Maharashtra",
    },
    {
      rating: 4,
      text: "The bulk purchase option has been a game-changer for our village. By combining our orders, we get much better prices on seeds and fertilizers than we ever could individually.",
      author: "Mohammad Farhan",
      designation: "Rice Farmer, West Bengal",
    },
  ];

  // Function to generate star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} color={i < rating ? "#ffc107" : "#d4d4d4"} />);
    }
    return stars;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h3>Trusted by thousands of farmers across India</h3>
        <p>Hear from our community about how KrishiKare is making a difference in their agricultural journey.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <span className="author-name">{testimonial.author}</span>
              <span className="author-designation">{testimonial.designation}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
