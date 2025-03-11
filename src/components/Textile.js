import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fabricManufacturingImage from "../assets/fabricManufacturing.webp";
import textilePrintingImage from "../assets/textilePrinting.jpg";

function Textile() {
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
        <h1 className="marquee">🧵 Textile Industry Services 🧵</h1>

        {/* Fabric Manufacturing Section */}
        <div className="service-section">
          <h2>Fabric Manufacturing & Production</h2>
          <p>
            We specialize in high-quality fabric production, offering various
            fabrics for different industries such as fashion, home textiles, and
            upholstery.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={fabricManufacturingImage}
                alt="Fabric Manufacturing"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Weaving & Spinning</h3>
              <ul>
                <li>Wide range of fabric types and blends.</li>
                <li>High-efficiency weaving and spinning processes.</li>
                <li>Customization available for designs and fabric types.</li>
              </ul>
              <p>
                We provide a comprehensive range of fabric manufacturing
                services to meet your specific needs, whether it’s for fashion
                or industrial use.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Fabric Manufacturing & Production")}
              >
                Apply for Service
              </button>
            </div>
          </div>
        </div>

        {/* Textile Printing Section */}
        <div className="service-section" style={{ marginTop: "30px" }}>
          <h2>Textile Printing & Dyeing</h2>
          <p>
            Our textile printing services offer vibrant and durable designs for
            fashion, upholstery, and industrial textiles. We also provide fabric
            dyeing to add the perfect colors to your materials.
          </p>
          <div className="service-grid">
            <div className="service-image">
              <img
                src={textilePrintingImage}
                alt="Textile Printing"
                className="img-fluid"
              />
            </div>
            <div className="service-card">
              <h3>Fabric Dyeing & Printing</h3>
              <ul>
                <li>Eco-friendly dyeing techniques.</li>
                <li>Custom printing for fashion and industrial fabrics.</li>
                <li>High-quality, color-fast printing and dyeing solutions.</li>
              </ul>
              <p>
                We offer various textile printing techniques, ensuring vibrant
                and long-lasting designs, whether for fashion collections or
                industrial applications.
              </p>
              <button
                className="service-button btn btn-primary"
                onClick={() => openModal("Textile Printing & Dyeing")}
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
          color:rgb(127, 9, 182);
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

export default Textile;
