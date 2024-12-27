import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/SElogo.png';  // Correct path to the image



const Header = () => {
  return (
    <div>
      {/* Navbar start */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="">
            <img
              src={logo} // Referencing the imported logo
              alt="Logo"
              width="90px"
              height="90px"
            />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              {/* Dropdown Menu for Services/Products */}
              <li className="nav-item dropdown">
  <Link
    className="nav-link dropdown-toggle text-light"
 
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Services/Products
  </Link>

  <div className="dropdown-menu dropdown-menu-dark p-4" style={{ width: "500px" }}>
    <div className="row">
      <div className="col-md-3">
        <ul className="list-unstyled">
          <li>
            <Link className="dropdown-item" to="/services">
              About Services
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/services/premier">
              Premier Services
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/services/contact">
              Contact Services
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/services/tenders">
              Tenders
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>

              {/* End of Dropdown */}
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/premier"
                >
                  Premier
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Suppliers
                </a>
              </li>

              {/*  */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Connect
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-dark p-4"
                  style={{ width: "100%" }}
                >
                  <div className="row">
                    <div className="col-12">
                      <ul className="list-unstyled">
                        <li>
                          <a className="dropdown-item" href="/companylogin">
                            Company Login
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12">
                      <ul className="list-unstyled">
                        <li>
                        <Link className="dropdown-item" to="/clientlogin">
                          Client login
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12">
                      <ul className="list-unstyled">
                        <li>
                          <a className="dropdown-item" href="#">
                            Register
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/*  */}
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="tenders"
                  to="/tenders"
                >
                  Tenders
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar end */}
    </div>
  );
};

export default Header;
