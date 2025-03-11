import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [errorMessage, setErrorMessage] = useState(""); // For handling error messages

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // POST request to login the user
  //     const response = await axios.post(
  //       "http://localhost:8085/api/v1/admin/login", // Your API URL
  //       {
  //         email,
  //         password,
  //       }
  //     );

  //     console.log(response.data); // For debugging, log the response

  //     // Check if login was successful (this is assuming the backend will return a success message or status)
  //     if (response.data && response.data.message === "Login successful") {
  //       alert("Login successful!");
  //       navigate("/adminpanel"); // Redirect to the next page after successful login
  //     } else {
  //       // Handle unexpected response structure
  //       setErrorMessage(
  //         "Unexpected response structure, no valid message found."
  //       );
  //     }
  //   } catch (error) {
  //     // Improved error handling
  //     if (error.response) {
  //       // Server responded with a status other than 2xx
  //       console.error("Login failed: ", error.response.data);
  //       const errorMessage =
  //         error.response.data.message || "Invalid email or password!";
  //       setErrorMessage(`Error: ${errorMessage}`); // Display error message
  //     } else if (error.request) {
  //       // No response received from the server
  //       console.error("No response from the server: ", error.request);
  //       setErrorMessage("Server is not responding. Please try again later.");
  //     } else {
  //       // Something went wrong in setting up the request
  //       console.error("Error setting up request: ", error.message);
  //       setErrorMessage("An error occurred. Please try again.");
  //     }
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:8085/api/v1/admin/login",
        {
          email,
          password,
        }
      );
  
      console.log(response.data); // Debugging
  
      if (response.data && response.data.message === "Login successful") {
        alert("Login successful!");
  
        // Store the email in localStorage for logout
        localStorage.setItem("userEmail", email);
  
        navigate("/adminpanel"); // Redirect after login
      } else {
        setErrorMessage("Unexpected response structure, no valid message found.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Login failed: ", error.response.data);
        setErrorMessage(error.response.data.message || "Invalid email or password!");
      } else if (error.request) {
        console.error("No response from the server: ", error.request);
        setErrorMessage("Server is not responding. Please try again later.");
      } else {
        console.error("Error setting up request: ", error.message);
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };
  


  return (
    <div>
      <style>
        {`
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f9edd7;
          }

          .login-form {
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

          .error-message {
            color: red;
            text-align: center;
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          @media (max-width: 600px) {
            .login-form {
              width: 90%;
              padding: 1.5rem;
            }
          }
        `}
      </style>
      <div className="login-container">
        <div className="login-form">
          <h2>Admin Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Display error message if present */}
          <form onSubmit={handleLogin}>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
