import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ManageTenders from "./ManageTenders";
import ManageTickets from "./ManageTickets";
import ManageOrders from "./ManageOrders"; // Import ManageOrders Component
import '../components/AdminPanelPage.css';

const AdminPanelPage = () => {
  const [activeSection, setActiveSection] = useState("tickets");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail"); // Retrieve email from local storage
      if (!userEmail) {
        console.error("No user email found in local storage.");
        return;
      }
  
      const response = await fetch("http://localhost:8085/api/v1/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }), // Send email for logout
      });
  
      if (response.ok) {
        localStorage.removeItem("user"); // Remove user session data
        localStorage.removeItem("userEmail"); // Remove email
        navigate("/"); // Redirect to homepage
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  const renderSection = () => {
    switch (activeSection) {
      case "tickets":
        return <ManageTickets />;
      case "tenders":
        return <ManageTenders />;
      case "manageOrders":
        return <ManageOrders />;
      default:
        return <ManageTickets />;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">SE</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link text-light" to="/admin">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" to="/adminpanel">Admin Panel</Link></li>
              <li className="nav-item">
                <button className="btn btn-danger ms-3" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Admin Panel Content */}
      <div className="admin-panel">
        <h1>Admin Panel</h1>

        {/* Admin Panel Buttons */}
        <div className="buttons">
          <button onClick={() => setActiveSection("tickets")}>Manage Tickets</button>
          <button onClick={() => setActiveSection("tenders")}>Manage Tenders</button>
          <button onClick={() => setActiveSection("manageOrders")}>Manage Orders</button>
        </div>

        {/* Dynamic Section Rendering */}
        <div className="content1">{renderSection()}</div>
      </div>
    </div>
  );
};

export default AdminPanelPage;
