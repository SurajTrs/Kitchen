import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import "../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://foodiii.onrender.com/api/loginuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();

      if (!json.success) {
        setError(json.message || "Invalid email or password");
      } else {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Navbar />
      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-logo">
            <div className="logo-circle">
              <i className="fas fa-utensils"></i>
            </div>
          </div>
          <div className="auth-header">
            <h1>Welcome Back!</h1>
            <p>Sign in to continue to Highlight Kitchen</p>
          </div>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <i className="fas fa-envelope input-icon"></i>
                <input type="email" name="email" placeholder="Enter your email" value={credentials.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <i className="fas fa-lock input-icon"></i>
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" value={credentials.password} onChange={handleChange} required />
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password`} onClick={() => setShowPassword(!showPassword)}></i>
              </div>
            </div>
            {error && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {error}</div>}
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? <><i className="fas fa-spinner fa-spin"></i> Signing in...</> : <><i className="fas fa-sign-in-alt"></i> Sign In</>}
            </button>
          </form>
          <div className="auth-divider"><span>or</span></div>
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/Signup">Create Account</Link></p>
          </div>
        </div>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    </div>
  );
};

export default Login;
