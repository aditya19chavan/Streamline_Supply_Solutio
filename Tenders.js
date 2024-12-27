import React from "react";

function Tenders() {
  return (
    <div>
       <style>
        {`
      /* Global Styles */
      body {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        background: #f5f7fa;
        color: #333;
      }

      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }

      /* Header */
      .header-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            src={require("../assets/header.webp")} center/cover no-repeat;
        color: #fff;
        text-align: center;
        padding: 80px 20px;
      }

      .header-banner h1 {
        font-size: 50px;
        margin: 0;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(253, 253, 253, 0.49);
      }

      .header-banner p {
        font-size: 24px;
        margin: 10px 0;
        color: rgb(255, 246, 246);
        text-shadow: none;
      }

      .header-banner nav ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 20px 0 0;
      }

      .header-banner nav ul li {
        margin: 0 15px;
      }

      .header-banner nav ul li a {
        color: rgb(255, 243, 243);
        text-decoration: none;
        font-size: 18px;
        padding: 12px 25px;
        border-radius: 30px;
        transition: background-color 0.3s, color 0.3s;
      }

      .header-banner nav ul li a:hover,
      .header-banner nav ul li a.active {
        background-color: #fff;
        color: #2575fc;
      }

      main {
        padding: 40px 20px;
      }

      .container {
        max-width: 1400px;
        margin: auto;
      }

      .section {
        background: #fff;
        border-radius: 15px;
        margin-bottom: 50px;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .section h2 {
        text-align: center;
        color: #2575fc;
        margin-bottom: 30px;
      }

      /* Flex Layout for Current Tender and Tender Statistics */
      .tender-columns {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
      }

      .col-xl-4 {
        flex: 0 0 30%;
      }

      .col-xl-8 {
        flex: 0 0 65%;
      }

      .col-xl-6 {
        flex: 0 0 48%; /* Adjust size for two columns side by side */
      }

      .section img {
        width: 100%;
        max-width: 800px;
        height: auto;
        display: block;
        margin: 20px auto;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }

      table th,
      table td {
        padding: 15px;
        border: 1px solid #ddd;
        text-align: center;
      }

      table th {
        background: #6a11cb;
        color: white;
      }

      table tr:nth-child(even) {
        background: #f5f7fa;
      }

      .btn {
        display: inline-block;
        padding: 10px 20px;
        background: linear-gradient(90deg, #ff8c00, #ff0080);
        color: white;
        border: none;
        border-radius: 30px;
        text-decoration: none;
        cursor: pointer;
        transition: box-shadow 0.3s ease;
      }

      .btn:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      footer {
        text-align: center;
        background: #6a11cb;
        color: white;
        padding: 10px 0;
      }

      .chart-container {
        margin: 20px auto;
        max-width: 500px;
        height: 300px;
      }
      `}
    </style>

      <header class="header-banner">
        <h1>Tender Management System</h1>
        <p>Streamline your tenders with real-time insights</p>
        <nav>
          <ul>
            <li>
              <a href="#current-tenders">Current Tenders</a>
            </li>
            <li>
              <a href="#tender-stats">Tender Statistics</a>
            </li>
            <li>
              <a href="#submit-tender">Submit Tender</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="container">
          {/* Current Tenders Section */}
          <section id="current-tenders" className="section">
            <h2>Current Tenders</h2>
            <div className="tender-columns">
              <div className="col-xl-4">
                <img
                 src={require("../assets/CurrentTenders.png")}
                  alt="Current Tenders Overview"
                />
              </div>
              <div className="col-xl-8">
                <table>
                  <thead>
                    <tr>
                      <th>Tender ID</th>
                      <th>Title</th>
                      <th>Deadline</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>Material Supply</td>
                      <td>2024-12-15</td>
                      <td>Open</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>Equipment Maintenance</td>
                      <td>2024-12-20</td>
                      <td>Closed</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Tender Statistics Section */}
          <section id="tender-stats" className="section">
            <h2>Tender Statistics</h2>
            <div className="tender-columns">
              <div className="col-xl-6">
                <img   src={require("../assets/img1.png")} alt="Statistics 1" />
              </div>
              <div className="col-xl-6">
                <img   src={require("../assets/img2.jpeg")} alt="Statistics 2" />
              </div>
            </div>
          </section>

          {/* Submit Tender Section */}
          <section id="submit-tender" className="section">
            <h2>Apply for a Tender</h2>
            <form id="tender-form" onSubmit="return validateForm()">
              <label htmlFor="title">Tender Title:</label>
              <input type="text" id="title" required />
              <label htmlFor="deadline">Deadline:</label>
              <input type="date" id="deadline" required />
              <button type="submit" className="btn">
                Submit Tender
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Tenders;
