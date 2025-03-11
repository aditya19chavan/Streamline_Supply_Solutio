import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/SElogo.png';  // Correct path to the image



const Header = () => {
  return (
    <div>
      {/* Navbar start */}
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    {/* Logo */}
    <a className="navbar-brand text-light" href="">
      <img src={logo} alt="Logo" width="90px" height="90px" />
    </a>

    {/* Navbar Toggle Button for Mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3"> {/* Added margin for spacing */}
          <Link className="nav-link active text-light" aria-current="page" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link active text-light" to="/about">
            About
          </Link>
        </li>

        {/* Dropdown Menu for Services/Products */}
        <li className="nav-item dropdown mx-3">
          <Link
            className="nav-link dropdown-toggle text-light"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services/Products
          </Link>

          <div className="dropdown-menu dropdown-menu-dark p-4" style={{ width: "300px" }}>
            <ul className="list-unstyled">
              <li>
                <Link className="dropdown-item" to="/services">Select Products</Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link className="dropdown-item" to="/sectorsweserve">Select Services sectorswise </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              {/* <li>
                <Link className="dropdown-item" to="/filterservices">Search Products & Services</Link>
              </li> */}
            </ul>
          </div>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link active text-light" to="/premier">
            Premier
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link active text-light" to="/tenders">
            Tenders
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link active text-light" to="/AdminRegister">
            Admin
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link active text-light" to="/ticketingtool">
            TicketingTool
          </Link>
        </li>
      </ul>

      {/* Login Button with Dropdown */}
      <li className="nav-item dropdown" style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="btn btn-primary dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Login/Register
        </button>
        <div className="dropdown-menu dropdown-menu-dark dropdown-menu-end p-4" style={{ width: "300px" }}>
          <div className="row">
            <div className="col-12">
              <ul className="list-unstyled">
                <li>
                  <a className="dropdown-item" href="/CompanyRegister">Company Login</a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <ul className="list-unstyled">
                <li>
                  <Link className="dropdown-item" to="/UserRegister">User Login</Link>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <ul className="list-unstyled">
                <li>
                  <Link className="dropdown-item" to="/AdminRegister">Admin Login</Link>
                </li>
              </ul>
            </div>
            {/* <div className="col-12">
              <ul className="list-unstyled">
                <li>
                  <a className="dropdown-item" href="#">Register</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </li>

    </div>
  </div>
</nav>

      {/* Navbar end */}
    </div>
  );
};

export default Header;
