import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import headerImage from "../assets/header.webp";

function Tenders() {
  const [tenderData, setTenderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTender, setSelectedTender] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    file: null,
    tenderTitle: "",
    category: "",
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/tenders");
        if (!response.ok) throw new Error("Failed to fetch tenders");
        const data = await response.json();
        setTenderData(data);
      } catch (error) {
        console.error("Error fetching tenders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTenders();
  }, []);

  const fetchCompanyName = async (companyId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/company/${companyId}`);
      if (!response.ok) throw new Error("Failed to fetch company name");
      const data = await response.json();
      setCompanyName(data.name);
    } catch (error) {
      console.error("Error fetching company name:", error);
    }
  };

  const handleApply = async (tender) => {
    setSelectedTender(tender);
    setFormData({
      ...formData,
      tenderTitle: tender.title,
      category: tender.category,
    });
    await fetchCompanyName(tender.companyId);
  };

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTender) return;

    const applicationData = new FormData();
    applicationData.append("name", formData.name);
    applicationData.append("email", formData.email);
    applicationData.append("description", formData.description);
    applicationData.append("file", formData.file);
    applicationData.append("tenderId", selectedTender.id);

    try {
      const response = await fetch("http://localhost:8080/api/tenders/apply", {
        method: "POST",
        body: applicationData,
      });

      if (!response.ok) throw new Error("Failed to submit application");

      alert(`Application submitted for ${selectedTender.title} by ${formData.name}`);

      setSelectedTender(null);
      setFormData({ name: "", email: "", description: "", file: null, tenderTitle: "", category: "" });
      setCompanyName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="container">
      <Helmet>
        <style>
          {`
          body {
            font-family: "Poppins", sans-serif;
            background: #f5f7fa;
            color: #333;
          }

          .header-banner {
            background: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ),
              url(${headerImage}) center/cover no-repeat;
            color: #fff;
            text-align: center;
            padding: 80px 20px;
          }

          .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          .table th, .table td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: center;
          }
          .table th {
            background: #2575fc;
            color: white;
          }
          .apply-btn {
            padding: 8px 15px;
            background: #2575fc;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }
          
          /* Card-style form */
          .application-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
            max-width: 500px;
          }

          .application-card h2 {
            margin-bottom: 15px;
          }

          .form-group {
            margin-bottom: 10px;
          }

          .form-group label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
          }

          .form-group input, .form-group textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          .modal-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
          }

          .submit-btn {
            background: #2575fc;
            padding: 8px 15px;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }

          .cancel-btn {
            background: #ff4d4d;
            padding: 8px 15px;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }
          `}
        </style>
      </Helmet>

      <header className="header-banner">
        <h1>Tender Management</h1>
        <p>Streamline your tenders with real-time insights</p>
      </header>

      <main>
        <h2>Current Tenders</h2>
        {loading ? (
          <p>Loading tenders...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Info</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tenderData.map((tender) => (
                <tr key={tender.id}>
                  <td>{tender.id}</td>
                  <td>{tender.title}</td>
                  <td>{tender.category}</td>
                  <td><a href={tender.filePath} download>Download</a></td>
                  <td>{tender.deadline}</td>
                  <td>
                    <button className="apply-btn" onClick={() => handleApply(tender)}>Apply</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {selectedTender && (
          <div className="application-card">
            <h2>Apply for {formData.tenderTitle}</h2>
            <form onSubmit={handleSubmit}>
              {/* <div className="form-group">
                <label>Company Name:</label>
                <input type="text" value={companyName} readOnly />
              </div> */}
              <div className="form-group">
                <label>category:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Upload Document:</label>
                <input type="file" name="file" onChange={handleChange} ref={fileInputRef} required />
              </div>

              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="cancel-btn" onClick={() => setSelectedTender(null)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default Tenders;