import React, { useState } from 'react';
import '../components/Clientlogin.css'; // Import the CSS file

function Companylogin() {
 const [isLoginActive, setLoginActive] = useState(false);
  const [isPopupActive, setPopupActive] = useState(false);

  const handleRegisterClick = () => setLoginActive(true);
  const handleLoginClick = () => setLoginActive(false);
  const handlePopupClick = () => setPopupActive(true);
  const handleCloseClick = () => setPopupActive(false);

  return (
    <div className="client-container">
      <div className="client-row">
        <div className="client-col-left">
          <h1>Register to work with us!</h1>
          
        <img src={require("../assets/predictive-chart.png")} alt="logo" className="client-logo" />
        <button
        type="button"
        className="client-btn-login-popup btn btn-success"
        style={{ width: '150px',marginLeft: '20px'  }}
        onClick={handlePopupClick}
      >
      Company Login
      </button>
       
        <div className="client-col-right">
        
        </div>
        <div className="client-signup-prompt">
  <h3>
    Don't have an account?{' '}
    <span
    
      onClick={handleRegisterClick}  // This triggers the registration form
      style={{ cursor: 'pointer', color: 'blue' }}
   
    >
      Sign Up Now
    </span>
  </h3>
</div>

        </div>
      </div>
      {isPopupActive && (
        <div className="client-wrapper">
          <span className="client-icon-close" onClick={handleCloseClick}>
            ✖
          </span>
          <div className={`client-form-box ${isLoginActive ? 'client-active' : ''}`}>
            {isLoginActive ? (
              <>
                <h2>Register</h2>
                <form>
                  <div className="client-input-box">
                    <label style={{ color: 'rgb(0, 0, 0)' }}>Username</label>
                    <input type="text" placeholder="Enter username" />
                  </div>
                  <div className="client-input-box">
                    <label style={{ color: 'rgb(0, 0, 0)' }}>Email</label>
                    <input type="email" placeholder="Enter email" />
                  </div>
                  <div className="client-input-box">
                    <label style={{ color: 'rgb(0, 0, 0)' }}>Password</label>
                    <input type="password" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn client-btn">
                    Register
                  </button>
                  <p>
                    Already have an account?{' '}
                    <span onClick={handleLoginClick} style={{ cursor: 'pointer', color: 'blue' }}>
                      Login
                    </span>
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2>Login</h2>
                <form>
                  <div className="client-input-box">
                    <label style={{ color: 'rgb(0, 0, 0)' }}>Email</label>
                    <input type="email" placeholder="Enter email" />
                  </div>
                  <div className="client-input-box">
                    <label style={{ color: 'rgb(0, 0, 0)' }}>Password</label>
                    <input type="password" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn client-btn">
                    Login
                  </button>
                  <p>
                    Don't have an account?{' '}
                    <span onClick={handleRegisterClick} style={{ cursor: 'pointer', color: 'blue' }}>
                      Register
                    </span>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


export default Companylogin