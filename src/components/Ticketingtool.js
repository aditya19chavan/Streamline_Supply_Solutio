import React, { useState, useEffect } from "react";
import { fetchTickets, createTicket } from "./api"; // Import API functions

function TicketingTool() {
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", issue: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch tickets from API when the component loads
  useEffect(() => {
    const loadTickets = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchTickets();
        setTickets(data);
      } catch (err) {
        setError("Failed to fetch tickets");
      } finally {
        setLoading(false);
      }
    };
    loadTickets();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle ticket submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.issue) {
      try {
        const newTicket = await createTicket({
          name: formData.name,
          email: formData.email,
          issue: formData.issue,
          status: "Open",
        });
        setTickets([...tickets, newTicket]);
        setFormData({ name: "", email: "", issue: "" }); // Reset form
      } catch (err) {
        setError("Failed to create ticket");
      }
    }
  };

  return (
    <div>
      <style>
        {`
          .tcontainer {
            padding: 20px;
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: auto;
            background: #f4f4f4;
            border-radius: 10px;
          }
          .header1 {
            text-align: center;
            background-color: #0056b3;
            color: white;
            padding: 20px;
            border-radius: 10px;
          }
          .form-tcontainer {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }
          form {
            display: flex;
            flex-direction: column;
          }
          label {
            margin-bottom: 10px;
            font-weight: bold;
          }
          input,
          textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button {
            margin-top: 10px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
          .btn {
            background-color: #28a745;
            color: white;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            border-radius: 5px;
            overflow: hidden;
          }
          th,
          td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
          }
          th {
            background-color: #0056b3;
            color: white;
          }
          tr:nth-child(even) {
            background-color: #e9ecef;
          }
          tr:hover {
            background-color: #f1f1f1;
          }
        `}
      </style>

      <header className="header1">
        <h1>Ticketing Tool</h1>
        <p>Submit and track your support tickets</p>
      </header>

      <main className="tcontainer">
        {/* Ticket Submission Form */}
        <section className="form-tcontainer">
          <h2>Submit a Ticket</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Issue:
              <textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </section>

        {/* Submitted Tickets Table */}
        <section>
          <h2>Submitted Tickets</h2>
          {loading ? (
            <p>Loading tickets...</p>
          ) : tickets.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Issue</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.id}</td>
                    <td>{ticket.name}</td>
                    <td>{ticket.email}</td>
                    <td>{ticket.issue}</td>
                    <td>{ticket.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No tickets submitted yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default TicketingTool;
