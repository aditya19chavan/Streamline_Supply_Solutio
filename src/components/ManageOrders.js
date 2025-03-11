import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  // State for pending and completed orders
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);
  const [completedOrders, setCompletedOrders] = useState(JSON.parse(localStorage.getItem("completedOrders")) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []); // Fix: Define cart state
  const [acceptedProducts, setAcceptedProducts] = useState([]); // Fix: Define acceptedProducts state

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("completedOrders", JSON.stringify(completedOrders));
  }, [orders, completedOrders]);

  // Mark order as completed
  const markOrderCompleted = (order) => {
    setCompletedOrders((prev) => [...prev, order]);
    const updatedOrders = orders.filter((item) => item.id !== order.id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Fix: Define handleAccept function
  const handleAccept = (item) => {
    setAcceptedProducts((prev) => [...prev, item]);
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  // Fix: Define handleDelete function
  const handleDelete = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div>
      <h2>Manage Orders</h2>

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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => handleAccept(item)} className="btn btn-success">
                    Accept
                  </button>
                  <button onClick={() => handleDelete(item)} className="btn btn-danger">
                    Delete
                  </button>
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

export default ManageOrders;
