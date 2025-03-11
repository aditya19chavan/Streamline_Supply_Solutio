import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import powerGeneration1Image from "../assets/powerGeneration1.jpg";
import powerGeneration2Image from "../assets/powerGeneration2.jpeg";
import { Link } from "react-router-dom";

function PowerAndGeneration() {
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
        <h1 className="marquee">Power and Generation Industry Services</h1>

        {/* Power Generation and Maintenance Section */}
        <div className="service-section">
          <h2>Power Generation and Maintenance</h2>
          <p>
            We provide comprehensive services for power generation systems,
            including maintenance, troubleshooting, and upgrades to ensure
            efficient operation and energy production.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={powerGeneration1Image}
                alt="Power Generation"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Power Plant Maintenance</h3>
              <ul>
                <li>
                  Regular inspection and maintenance of power generation
                  equipment.
                </li>
                <li>
                  Timely replacement and repairs of turbines, generators, and
                  other machinery.
                </li>
              </ul>
              <p>
                We ensure your power plants are running smoothly and efficiently
                with our specialized maintenance services.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Power Plant Maintenance")}
              >
                Apply for Service
              </button>
            </div>
          </div>
        </div>

        {/* Energy System Optimization Section */}
        <div className="service-section" style={{ marginTop: "30px" }}>
          <h2>Energy System Optimization</h2>
          <p>
            Our energy optimization services help maximize efficiency, reduce
            operational costs, and enhance the performance of your energy
            production systems.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={powerGeneration2Image}
                alt="Energy System Optimization"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Energy Efficiency Audits</h3>
              <ul>
                <li>Conducting audits to identify energy inefficiencies.</li>
                <li>
                  Implementing solutions to optimize energy consumption and
                  reduce costs.
                </li>
              </ul>
              <p>
                Our team helps optimize your energy systems, ensuring maximum
                efficiency and cost-effectiveness.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Energy System Optimization")}
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
          color: brown;
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

export default PowerAndGeneration;
