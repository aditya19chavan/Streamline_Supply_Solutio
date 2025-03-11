import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageTenders = () => {
  const [tenders, setTenders] = useState([]);
  const [tenderData, setTenderData] = useState({
    title: "",
    category: "",
    deadline: "",
  });
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const fetchTenders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/tenders");
      setTenders(response.data);
    } catch (error) {
      console.error("Error fetching tenders", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", tenderData.title);
    formData.append("category", tenderData.category);
    formData.append("deadline", tenderData.deadline);
    if (file) formData.append("file", file);

    try {
      if (editingId) {
        // Update existing tender
        await axios.put(`http://localhost:8080/api/tenders/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Tender updated successfully!");
      } else {
        // Add new tender
        await axios.post("http://localhost:8080/api/tenders", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Tender added successfully!");
      }

      fetchTenders();
      setTenderData({ title: "", category: "", deadline: "" });
      setFile(null);
      setEditingId(null);
    } catch (error) {
      console.error("Error saving tender", error);
      alert("Error saving tender");
    }
  };

  const handleEdit = (tender) => {
    setTenderData({ title: tender.title, category: tender.category, deadline: tender.deadline });
    setEditingId(tender.id);
  };

  const deleteTender = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/tenders/${id}`);
      fetchTenders();
      alert("Tender deleted successfully!");
    } catch (error) {
      console.error("Error deleting tender", error);
      alert("Error deleting tender");
    }
  };

  useEffect(() => {
    fetchTenders();
  }, []);

  return (
    <div className="container mt-4">
      <h2>{editingId ? "Update Tender" : "Manage Tenders"}</h2>
      <form className="p-4 mb-4 bg-light border rounded" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter tender title"
            value={tenderData.title}
            onChange={(e) => setTenderData({ ...tenderData, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter tender category"
            value={tenderData.category}
            onChange={(e) => setTenderData({ ...tenderData, category: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deadline</label>
          <input
            type="date"
            className="form-control"
            value={tenderData.deadline}
            onChange={(e) => setTenderData({ ...tenderData, deadline: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">File</label>
          <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingId ? "Update Tender" : "Add Tender"}
        </button>
        {editingId && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditingId(null)}>
            Cancel
          </button>
        )}
      </form>

      <h3>Existing Tenders</h3>
      <ul className="list-group">
        {tenders.map((tender) => (
          <li key={tender.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{tender.title}</strong> - {tender.category} (Deadline: {tender.deadline})
            </div>
            <div>
              {/* <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(tender)}>
                Edit
              </button> */}
              <button className="btn btn-danger btn-sm" onClick={() => deleteTender(tender.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTenders;
