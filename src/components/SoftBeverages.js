import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import beverageImage from "../assets/beverage.jpg";
import distributionImage from "../assets/distribution.avif";

function SoftBeverages() {
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
        <h1 className="marquee">🥤 Soft Beverages Industry Services 🥤</h1>

        {/* Soft Beverage Manufacturing Section */}
        <div className="service-section">
          <h2>Soft Beverage Manufacturing</h2>
          <p>
            We provide high-quality manufacturing solutions for soft drinks,
            from production to packaging, ensuring compliance with health and
            safety standards.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={beverageImage}
                alt="Soft Beverage Manufacturing"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Manufacturing & Production</h3>
              <ul>
                <li>
                  Manufacturing of carbonated and non-carbonated beverages.
                </li>
                <li>Efficient production lines with minimal downtime.</li>
                <li>
                  Packaging and quality control for consistency and safety.
                </li>
              </ul>
              <p>
                Let us help you scale your production and maintain high-quality
                standards across your beverage lines.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Soft Beverage Manufacturing")}
              >
                Apply for Service
              </button>
            </div>
          </div>
        </div>

        {/* Soft Beverage Distribution Section */}
        <div className="service-section" style={{ marginTop: "30px" }}>
          <h2>Soft Beverage Distribution</h2>
          <p>
            We provide comprehensive distribution services to ensure your
            beverages reach the right markets with timely and efficient
            delivery.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={distributionImage}
                alt="Soft Beverage Distribution"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Logistics & Distribution</h3>
              <ul>
                <li>Efficient logistics for large-scale distribution.</li>
                <li>Cold chain solutions to maintain product quality.</li>
                <li>Supply chain management from factory to shelf.</li>
              </ul>
              <p>
                With our distribution network, your products will reach
                retailers on time and in perfect condition.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Soft Beverage Distribution")}
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
          color: #009688;
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

export default SoftBeverages;