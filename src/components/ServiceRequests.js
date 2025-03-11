import React, { useState, useEffect } from "react";

function ServiceRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("serviceRequests")) || [];
    setRequests(storedRequests);
  }, []);

  const handleDelete = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index);
    setRequests(updatedRequests);
    localStorage.setItem("serviceRequests", JSON.stringify(updatedRequests));
  };

  const handleAccept = (index) => {
    alert(`Request ${index + 1} accepted!`);
  };
 // eslint-disable-next-line no-unused-vars



  

  return (
    <div className="container">
      <h2>Service Requests</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, index) => (
            <tr key={index}>
              <td>{req.name}</td>
              <td>{req.email}</td>
              <td>{req.address}</td>
              <td>{req.message}</td>
              <td>
                <button className="btn btn-success" onClick={() => handleAccept(index)}>Accept</button>
               
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceRequests;
