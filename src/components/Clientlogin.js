import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../components/Clientlogin.css';

function Clientlogin() {
  const [isLoginActive, setLoginActive] = useState(false);
  const [isPopupActive, setPopupActive] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.username);
      } catch (error) {
        console.error('Invalid token');
      }
    }
  }, [token]);

  const handleRegisterClick = () => {
    setPopupActive(true);  // Open popup
    setLoginActive(true);  // Show register form
  };

  const handleLoginClick = () => {
    setPopupActive(true);  // Open popup
    setLoginActive(false); // Show login form
  };

  const handleCloseClick = () => setPopupActive(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users/', { username, email, password });
      alert('Registration successful! Please login.');
      setLoginActive(false); // Switch to login form after registration
    } catch (error) {
      alert(`Registration failed: ${error.response?.data?.message || error.message}`);
      console.error(error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      alert('Login successful!');
    } catch (error) {
      alert('Invalid email or password!');
      console.error(error);
    }
  };

  return (
    <div className="client-container">
      <div className="client-row">
        <div className="client-col-left">
          <h1>Login for Enquiry</h1>
          <img src={require('../assets/seo.png')} alt="logo" className="client-logo" />
          <button className="client-btn-login-popup btn btn-success" onClick={handleLoginClick}>
            Client Login
          </button>
          <div className="client-signup-prompt">
            <h3>
              Don't have an account?{' '}
              <span onClick={handleRegisterClick} style={{ cursor: 'pointer', color: 'blue' }}>
                Sign Up Now
              </span>
            </h3>
          </div>
        </div>
      </div>

      {isPopupActive && (
        <div className="client-wrapper">
          <span className="client-icon-close" onClick={handleCloseClick}>✖</span>
          <div className="client-form-box">
            {isLoginActive ? (
              <>
                <h2>Register</h2>
                <form onSubmit={handleRegisterSubmit}>
                  <div className="client-input-box">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="client-input-box">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="client-input-box">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="btn client-btn">Register</button>
                </form>
                <h3>
                  Already have an account?{' '}
                  <span onClick={handleLoginClick} style={{ cursor: 'pointer', color: 'blue' }}>
                    Login
                  </span>
                </h3>
              </>
            ) : (
              <>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="client-input-box">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="client-input-box">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="btn client-btn">Login</button>
                </form>
                <h3>
                  Don't have an account?{' '}
                  <span onClick={handleRegisterClick} style={{ cursor: 'pointer', color: 'blue' }}>
                    Sign Up Now
                  </span>
                </h3>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Clientlogin;
