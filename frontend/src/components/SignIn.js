// SignIn.js
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import "./SignIn.css"; // Create a corresponding CSS file

function SignIn({ setIsSignedIn }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful sign-in
    setTimeout(() => {
      setIsSignedIn(true);
      navigate("/dashboard"); // Redirect to dashboard
    }, 1000);
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>KrishiKare</h1>
        <h2>Welcome back</h2>
        <p>Sign in to your account to continue</p>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="*********" />
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <div className="form-group remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="signin-button">
            Sign in
          </button>

          <div className="or-continue">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <a href="/github">
              {/* GitHub Icon */}
              GitHub
            </a>
            <a href="/facebook">
              {/* Facebook Icon */}
              Facebook
            </a>
          </div>
        </form>

        <div className="register-link">
          Don't have an account? <Link to="/register">Register now</Link>
        </div>
      </div>

      <div className="signin-info">
        <img src="/path-to-your-image.jpg" alt="Agriculture Image" />
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

export default SignIn;
