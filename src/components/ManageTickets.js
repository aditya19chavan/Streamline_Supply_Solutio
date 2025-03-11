import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [responseData, setResponseData] = useState({ id: null, response: "" });

  // Fetch tickets from backend
  const fetchTickets = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/tickets");
      setTickets(response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      alert("Failed to fetch tickets. Please check your server.");
    }
  };

  // Send response to a ticket
  const sendResponse = async () => {
    if (!responseData.id || !responseData.response) {
      alert("Please select a ticket and provide a response.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/tickets/${responseData.id}/response`,
        { response: responseData.response }
      );
      alert("Response sent successfully!");
      setResponseData({ id: null, response: "" });
      fetchTickets(); // Refresh tickets
    } catch (error) {
      console.error("Error sending response:", error);
      alert("Failed to send response. Please try again.");
    }
  };

  // Close a ticket
  const closeTicket = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/tickets/${id}/close`);
      alert("Ticket closed successfully!");
      fetchTickets(); // Refresh tickets
    } catch (error) {
      console.error("Error closing ticket:", error);
      alert("Failed to close ticket. Ensure it has been responded to.");
    }
  };

  // Change ticket status
  const changeStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/tickets/${id}/status`,
        { status: newStatus }
      );
      alert(`Ticket status updated to ${newStatus} successfully!`);
      fetchTickets(); // Refresh tickets
    } catch (error) {
      console.error("Error changing ticket status:", error);
      alert("Failed to change ticket status.");
    }
  };

  // Delete a ticket
  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/tickets/${id}`);
      alert("Ticket deleted successfully!");
      fetchTickets(); // Refresh tickets
    } catch (error) {
      console.error("Error deleting ticket:", error);
      alert("Failed to delete ticket.");
    }
  };

  // Fetch tickets on component mount
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Tickets</h2>

      {/* Response Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendResponse();
        }}
        className="mb-4"
      >
        <div className="mb-3">
          <label htmlFor="ticketId" className="form-label">
            Select Ticket
          </label>
          <select
            id="ticketId"
            className="form-select"
            value={responseData.id || ""}
            onChange={(e) =>
              setResponseData({ ...responseData, id: e.target.value })
            }
            required
          >
            <option value="" disabled>
              Choose a ticket
            </option>
            {tickets.map((ticket) => (
              <option key={ticket.id} value={ticket.id}>
                {ticket.id} - {ticket.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="response" className="form-label">
            Response
          </label>
          <textarea
            id="response"
            className="form-control"
            rows="3"
            value={responseData.response}
            onChange={(e) =>
              setResponseData({ ...responseData, response: e.target.value })
            }
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Send Response
        </button>
      </form>

      {/* Tickets List */}
      {tickets.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.name}</td>
                <td>{ticket.issue}</td>
                <td>{ticket.status}</td>
                <td>
                  {ticket.status === "Pending" && (
                    <>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() =>
                          setResponseData({ id: ticket.id, response: "" })
                        }
                      >
                        Respond
                      </button>
                      <button
                        className="btn btn-secondary btn-sm ms-2"
                        onClick={() => changeStatus(ticket.id, "Closed")}
                      >
                        Close
                      </button>
                    </>
                  )}
                  {ticket.status === "Responded" && (
                    <>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => closeTicket(ticket.id)}
                      >
                        Close
                      </button>
                      <button
                        className="btn btn-primary btn-sm ms-2"
                        onClick={() => changeStatus(ticket.id, "Pending")}
                      >
                        Mark as Pending
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => deleteTicket(ticket.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-info text-center">
          No tickets available at the moment.
        </div>
      )}
    </div>
  );
};

export default ManageTickets;
