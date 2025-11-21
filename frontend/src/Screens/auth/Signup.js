import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import "../styles/Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", geolocation: "", password: "", MobileNo: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(credentials.MobileNo)) {
      setError("Mobile number must be 10 digits");
      return;
    }

    if (credentials.password.length < 5) {
      setError("Password must be at least 5 characters");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://foodiii.onrender.com/api/creatuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, location: credentials.geolocation, password: credentials.password, MobileNo: credentials.MobileNo }),
      });

      const json = await response.json();

      if (!json.success) {
        setError(json.message || "Registration failed");
      } else {
        navigate("/login");
      }
    } catch (error) {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Navbar />
      <div className="auth-content">
        <div className="auth-card signup-card">
          <div className="auth-logo">
            <div className="logo-circle">
              <i className="fas fa-utensils"></i>
            </div>
          </div>
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join Highlight Kitchen and start ordering</p>
          </div>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <i className="fas fa-user input-icon"></i>
                  <input type="text" name="name" placeholder="Enter your name" value={credentials.name} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <div className="input-wrapper">
                  <i className="fas fa-mobile-alt input-icon"></i>
                  <input type="tel" name="MobileNo" placeholder="10 digit number" value={credentials.MobileNo} onChange={handleChange} required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <i className="fas fa-envelope input-icon"></i>
                <input type="email" name="email" placeholder="Enter your email" value={credentials.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <div className="input-wrapper">
                <i className="fas fa-map-marker-alt input-icon"></i>
                <input type="text" name="geolocation" placeholder="Enter your address" value={credentials.geolocation} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <i className="fas fa-lock input-icon"></i>
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Create a password" value={credentials.password} onChange={handleChange} required />
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password`} onClick={() => setShowPassword(!showPassword)}></i>
              </div>
              <small className="password-hint">Minimum 5 characters</small>
            </div>
            {error && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {error}</div>}
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? <><i className="fas fa-spinner fa-spin"></i> Creating Account...</> : <><i className="fas fa-user-plus"></i> Create Account</>}
            </button>
          </form>
          <div className="auth-divider"><span>or</span></div>
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
          </div>
        </div>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    </div>
  );
};

export default Signup;
