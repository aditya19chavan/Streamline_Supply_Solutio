import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  // Inline styles for the navbar
  const navbarStyle = {
    backgroundColor: "#343a40", // Dark background
    padding: "10px 20px", // Padding to space out navbar elements
  };

  const linkStyle = {
    color: "white", // White text color for links
    textDecoration: "none", // Remove underline
    marginRight: "15px", // Space between links
  };

  const linkHoverStyle = {
    color: "#ffc107", // Yellow color on hover
    textDecoration: "none", // No underline on hover
  };

  const navbarBrandStyle = {
    color: "white", // White color for the brand
  };

  // Cart state (retrieved from localStorage)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [acceptedProducts, setAcceptedProducts] = useState([]);

  useEffect(() => {
    // Save cart data to localStorage if updated
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to handle accepting a product
  const handleAccept = (product) => {
    // Add the product to the accepted products array
    setAcceptedProducts((prev) => [...prev, product]);

    // Remove the product from the cart
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  // Function to handle deleting a product from the cart
  const handleDelete = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={navbarBrandStyle}>
            SE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={linkStyle}
                  onMouseOver={(e) =>
                    (e.target.style.color = linkHoverStyle.color)
                  }
                  onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                >
                  Home
                </Link>
              </li>
         
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/adminpanel"
                  style={linkStyle}
                  onMouseOver={(e) =>
                    (e.target.style.color = linkHoverStyle.color)
                  }
                  onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                >
                  Admin Panel
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/service-requests" // Added Service Requests Link
                  style={linkStyle}
                  onMouseOver={(e) =>
                    (e.target.style.color = linkHoverStyle.color)
                  }
                  onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                >
                  Service Requests
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Admin Panel Content */}
      <h1>Admin Panel</h1>
      <h2>Cart Items:</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th> {/* Add Actions column */}
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => handleAccept(item)} className="btn btn-success">Accept</button>
                  <button onClick={() => handleDelete(item)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Accepted Products Section */}
      <h2>Accepted Products:</h2>
      {acceptedProducts.length === 0 ? (
        <p>No products accepted yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {acceptedProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
