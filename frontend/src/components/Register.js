import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Register.css"; // Create a corresponding CSS file

function Register() {
  return (
    <div className="register-container">
      <div className="register-form">
        <h1>KrishiKare</h1>
        <h2>Create your account</h2>
        <p>Join KrishiKare and transform your agricultural journey</p>

        <form>
          <div className="name-group">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="John" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" placeholder="+91 98765 43210" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="*********" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" id="confirmPassword" placeholder="*********" />
          </div>

          <div className="form-group radio-group">
            <p>I am registering as</p>
            <label>
              <input type="radio" name="userType" value="farmer" />
              Farmer (Buyer)
            </label>
            <label>
              <input type="radio" name="userType" value="supplier" />
              Supplier
            </label>
            <label>
              <input type="radio" name="userType" value="equipmentOwner" />
              Equipment Owner
            </label>
          </div>

          <div className="form-group terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the terms of service and privacy policy</label>
          </div>

          <button type="submit" className="create-account-button">
            Create account
          </button>
        </form>

        <div className="signin-link">
          Already have an account? <Link to="/signin">Sign in</Link>
        </div>
      </div>

      <div className="register-info">
        <h1>Empowering Agriculture Through Technology</h1>
        <p>Join thousands of farmers and agricultural suppliers across India who are transforming their operations with KrishiKare.</p>
        <div className="trusted-by">
          <p>Trusted by over</p>
          <p>25,000+ farmers</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
