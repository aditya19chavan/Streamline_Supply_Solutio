import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation

function Register() {
  // State for adminname, email, and password
  const [adminname, setAdminname] = useState(""); // Reflects adminname in the database
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    try {
      // Sending POST request to backend to register the admin
      const response = await axios.post(
        "http://localhost:8085/api/v1/admin/save", // Backend API endpoint
        {
            adminname: adminname, // Send adminname field, matches backend entity name
          email: email, // Send email field
          password: password, // Send password field
        }
      );
      // On success, alert user and redirect to login page
      alert("Registration successful!");
      navigate("/AdminLoginn"); // Redirect to login page after successful registration
    } catch (error) {
      // On failure, show error message
      alert("Registration failed!");
      console.error(error); // Log error details in the console
    }
  };

  return (
    <div>
      <style>
        {`
          .register-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f9edd7;
          }

          .register-form {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
          }

          h2 {
            text-align: center;
            margin-bottom: 1rem;
            font-family: 'Arial', sans-serif;
            color: #333;
          }

          form div {
            margin-bottom: 1rem;
          }

          label {
            display: block;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            color: #555;
            font-family: 'Arial', sans-serif;
          }

          input {
            width: 100%;
            padding: 0.8rem;
            border-radius: 4px;
            border: 1px solid #ddd;
            font-size: 1rem;
            font-family: 'Arial', sans-serif;
            transition: border 0.3s ease-in-out;
          }

          input:focus {
            border-color: #5c6bc0;
            outline: none;
          }

          button {
            width: 100%;
            padding: 0.9rem;
            border: none;
            background-color: #218838;
            color: white;
            font-size: 1.1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: #3f4b8f;
          }

          button:focus {
            outline: none;
          }

          .login-link {
            display: block;
            text-align: center;
            margin-top: 1rem;
          }

          .login-link a {
            color: #5c6bc0;
            text-decoration: none;
            font-size: 1rem;
          }

          .login-link a:hover {
            text-decoration: underline;
          }

          @media (max-width: 600px) {
            .register-form {
              width: 90%;
              padding: 1.5rem;
            }
          }
        `}
      </style>
      <div className="register-container">
        <div className="register-form">
          <h2>Admin Registration</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label> Admin Name</label>
              <input
                type="text"
                placeholder="Enter Admin name"
                value={adminname} // Controlled input value for adminname
                onChange={(e) => setAdminname(e.target.value)} // Handle adminname change
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email} // Controlled input value for email
                onChange={(e) => setEmail(e.target.value)} // Handle email change
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password} // Controlled input value for password
                onChange={(e) => setPassword(e.target.value)} // Handle password change
              />
            </div>
            <button type="submit">Register</button>
          </form>
          {/* Login link */}
          <div className="login-link">
            <p>
              Already have an account? <Link to="/AdminLoginn">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
