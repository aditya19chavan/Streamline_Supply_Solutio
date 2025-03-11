import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import energyStorageImage from "../assets/energyStorage.jpg";
import solarPowerImage from "../assets/solarPower.avif";

function BatteryAndEnergy() {
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
        <h1 className="marquee">⚡ Battery & Energy Solutions ⚡</h1>

        {/* Energy Storage Systems Section */}
        <div className="service-section">
          <h2>Energy Storage Systems</h2>
          <p>
            Our energy storage solutions help store excess energy for later use,
            improving efficiency and reducing energy costs.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={energyStorageImage}
                alt="Energy Storage"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Advanced Battery Solutions</h3>
              <ul>
                <li>Scalable energy storage systems.</li>
                <li>Optimized power backup during peak hours.</li>
                <li>Eco-friendly and cost-effective solutions.</li>
              </ul>
              <p>
                We provide state-of-the-art energy storage systems to ensure
                uninterrupted power supply and increased energy efficiency.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Energy Storage Systems")}
              >
                Apply for Service
              </button>
            </div>
          </div>
        </div>

        {/* Solar Power Systems Section */}
        <div className="service-section" style={{ marginTop: "30px" }}>
          <h2>Solar Power Systems</h2>
          <p>
            Harness the power of the sun with our solar panel installations,
            reducing reliance on grid power and lowering energy costs.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={solarPowerImage}
                alt="Solar Power"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Solar Panel Installations</h3>
              <ul>
                <li>Customized solar solutions for homes and businesses.</li>
                <li>Lower energy bills and reduced carbon footprint.</li>
                <li>Efficient, long-lasting solar panels.</li>
              </ul>
              <p>
                Save money and contribute to a cleaner environment by switching
                to solar energy.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Solar Power Systems")}
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

export default BatteryAndEnergy;