import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import smartIrrigationImage from "../assets/smartIrrigation.png";
import precisionFarmingImage from "../assets/precisionFarming.jpg";

function Agritech() {
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
        <h1 className="marquee">🌾 Modern Agriculture Technology 🌾</h1>

        {/* Smart Irrigation System Section */}
        <div className="service-section">
          <h2>Smart Irrigation Systems</h2>
          <p>
            Our smart irrigation solutions ensure optimal water usage, reducing
            waste and enhancing crop yield by utilizing data-driven technology.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={smartIrrigationImage}
                alt="Smart Irrigation"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Automated Watering Systems</h3>
              <ul>
                <li>Real-time moisture monitoring.</li>
                <li>Weather-based irrigation scheduling.</li>
                <li>Water usage optimization to reduce costs.</li>
              </ul>
              <p>
                Ensure your crops receive just the right amount of water at the
                right time with our automated irrigation solutions.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Smart Irrigation Systems")}
              >
                Apply for Service
              </button>
            </div>
          </div>
        </div>

        {/* Precision Farming Section */}
        <div className="service-section" style={{ marginTop: "30px" }}>
          <h2>Precision Farming</h2>
          <p>
            Enhance productivity and efficiency with precision farming tools
            that use data, AI, and machine learning to optimize crop management.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={precisionFarmingImage}
                alt="Precision Farming"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Data-Driven Farming Solutions</h3>
              <ul>
                <li>Soil quality and nutrient monitoring.</li>
                <li>AI-driven crop yield prediction.</li>
                <li>Automated planting and harvesting.</li>
              </ul>
              <p>
                Maximize your crop yield and reduce resource wastage with our
                data-driven precision farming services.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Precision Farming")}
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
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 20px auto;
          width: 80%;
          max-width: 1200px;
        }

        .marquee {
          font-size: 3rem;
          font-weight: bold;
          color: green;
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

        .modal-dialog {
          max-width: 500px;
          margin: 30px auto;
        }

        @media (max-width: 576px) {
          .modal-dialog {
            max-width: 90%;
          }
        }

        body {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default Agritech;
