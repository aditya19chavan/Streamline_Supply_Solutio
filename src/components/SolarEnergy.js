import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import solarPanelImage from "../assets/solarPanel.jpg";
import solarPowerImage from "../assets/solarPower.avif";
import { Link } from "react-router-dom";

function SolarEnergy() {
  const navigateTo = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const openModal = (title) => {
    setServiceTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", address: "", message: "" }); // Reset form data
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("serviceRequests")) || [];
    localStorage.setItem("serviceRequests", JSON.stringify([...storedData, formData]));
    closeModal();
    navigateTo("/service-requests"); // Redirect to the table page
  };

  return (
    <div className="container">
      <main className="content">
        {/* Title Section with Marquee */}
        <h1 className="marquee">Solar Energy Industry Services</h1>

        {/* Solar Panel Installation Services Section */}
        <div className="service-section">
          <h2>Solar Panel Installation</h2>
          <p>
            We provide professional solar panel installation services, helping
            you switch to renewable energy and reduce your carbon footprint.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={solarPanelImage}
                alt="Solar Panel Installation Image"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Solar Panel Setup</h3>
              <ul>
                <li>
                  Designing and installing solar power systems for homes and
                  businesses.
                </li>
                <li>
                  Choosing the best solar panel system for your energy needs.
                </li>
              </ul>
              <p>
                Our experts ensure seamless installation to help you harness
                solar energy efficiently.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Solar Panel Installation")}
              >
                Apply for Service
              </button>
            </div>
          </div>
        </div>

        {/* Solar Power Maintenance Section */}
        <div className="service-section" style={{ marginTop: "30px" }}>
          <h2>Solar Power System Maintenance</h2>
          <p>
            We offer maintenance services to keep your solar power system
            running efficiently and maximize its lifespan.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={solarPowerImage}
                alt="Solar Power System Image"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Routine Maintenance</h3>
              <ul>
                <li>
                  Cleaning and checking solar panels to ensure maximum
                  efficiency.
                </li>
                <li>
                  Inspecting wiring and electrical connections for safety.
                </li>
              </ul>
              <p>
                Regular maintenance ensures your system operates at peak
                performance.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Solar Power System Maintenance")}
              >
                Apply for Service
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Apply Modal */}
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          id="applyModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="applyModalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="modal-header">
                <h5 className="modal-title" id="applyModalLabel">
                  Apply for Service
                </h5>
              </div>
              <div className="modal-body">
                <p>{serviceTitle}</p>
                <form className="apply-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="message"
                      className="form-control"
                      placeholder="Describe Your Request"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline CSS */}
      <style>{`
        /* Center the content */
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 20px auto;
          width: 80%;
          max-width: 1200px;
        }

        /* Marquee effect for title */
        .marquee {
          font-size: 3rem;
          font-weight: bold;
          color: blue;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
        }

        .service-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .service-button {
          margin-top: 10px;
        }

        /* Modal Styles */
        .modal-dialog {
          max-width: 500px;
          margin: 30px auto;
        }

        @media (max-width: 576px) {
          .modal-dialog {
            max-width: 90%;
          }
        }

        /* Add spacing between footer and content */
        body {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default SolarEnergy;