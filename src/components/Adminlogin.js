import React, { useState, useEffect } from 'react';
import '../components/Clientlogin.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Adminlogin() {
  const [isLoginActive, setLoginActive] = useState(false);
  const [isPopupActive, setPopupActive] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize navigate

  const handleRegisterClick = () => {
    setPopupActive(true);
    setLoginActive(true);
  };
  const handleLoginClick = () => {
    setPopupActive(true);
    setLoginActive(false);
  };
  const handleCloseClick = () => setPopupActive(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
      setUsername(savedData.username);
      setEmail(savedData.email);
      setPassword(savedData.password);
    }
  }, []);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const userData = { username, email, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Registration successful!');
    setLoginActive(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData && savedData.email === email && savedData.password === password) {
      alert('Login successful!');
      navigate('/adminpanel');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="client-container">
      <div className="client-row">
        <div className="client-col-left">
          <h1>Admin Login Here</h1>
          <img src={require('../assets/seo.png')} alt="logo" className="client-logo" />
          <button className="client-btn-login-popup btn btn-success" style={{ height: '60px' }} onClick={handleLoginClick}>
            Admin Login
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
                  <p>Already have an account? <span onClick={handleLoginClick} style={{ cursor: 'pointer', color: 'blue' }}>Login</span></p>
                </form>
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
                  <p>Don't have an account? <span onClick={handleRegisterClick} style={{ cursor: 'pointer', color: 'blue' }}>Register</span></p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Adminlogin;
