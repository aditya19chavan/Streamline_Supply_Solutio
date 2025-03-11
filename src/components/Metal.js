import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import metalProcessingImage from "../assets/metalProcessing.jpg";
import metalDistributionImage from "../assets/metalDistribution.jpg";

function Metal() {
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
        <h1 className="marquee">🏗️ Metals Industry Services 🏗️</h1>

        {/* Metal Processing Section */}
        <div className="service-section">
          <h2>Metal Processing & Production</h2>
          <p>
            We provide comprehensive metal processing services including
            casting, forging, and machining, ensuring quality and precision in
            every product we produce.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={metalProcessingImage}
                alt="Metal Processing"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Metal Casting & Forging</h3>
              <ul>
                <li>High-precision casting and forging for various alloys.</li>
                <li>State-of-the-art machines for precise product shaping.</li>
                <li>Quality control at every stage of production.</li>
              </ul>
              <p>
                Whether it's casting or forging, we ensure your metal products
                meet the highest standards for durability and performance.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Metal Processing & Production")}
              >
                Apply for Service
              </button>
            </div>
          </div>
        </div>

        {/* Metal Distribution Section */}
        <div className="service-section" style={{ marginTop: "30px" }}>
          <h2>Metal Distribution & Logistics</h2>
          <p>
            Our distribution services ensure timely and efficient delivery of
            metals to your business, from raw materials to finished products.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={metalDistributionImage}
                alt="Metal Distribution"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Logistics & Supply Chain</h3>
              <ul>
                <li>Efficient transportation and storage solutions.</li>
                <li>Delivery of raw metals or finished products worldwide.</li>
                <li>Custom supply chain solutions based on your needs.</li>
              </ul>
              <p>
                We handle the logistics so you can focus on your production and
                operations, ensuring timely and safe delivery.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Metal Distribution & Logistics")}
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
          color: #9e9e9e;
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

export default Metal;