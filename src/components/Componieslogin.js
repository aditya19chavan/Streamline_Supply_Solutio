import React from 'react'

function Componieslogin() {
  return (
    <div>



 <style>
    {`
     body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #c5aa7840;
    }
    header {
      background-color: #253f5a;
      color: #fff;
      padding: 1rem;
      text-align: center;
      border-radius: 50px;
      margin: auto;
   
    }
    main {
      padding: 20px;
      max-width: 1300px;
      margin: auto;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    .table-responsive {
      margin-top: 20px;
    }
    .table th, .table td {
      text-align: center;
      padding: 15px;
    }
    
           .table-striped tbody tr:nth-child(odd) {
            background-color: #a890905e;
          }
    .table-bordered {
      border: 2px solid #dee2e6;
    }
    .thead-light th {
      background-color: #3f6183;
      color:rgb(255, 255, 255);
    }
    .btn-primary {
      background-color: #1db777;
      border-color: #44ff00;
    }
    .btn-primary:hover {
      background-color: #0021b3;
      border-color: #004085;
    }
    .section-title {
      color: #6c757d;
    }
    .form-group label {
      font-weight: bold;
    }
    .form-check-label {
      font-size: 16px;
    }
      
`}
  </style>



<div>

<div>
  <header>
    <h1>Company Registration</h1>
  </header>
  <main>
    <section className="mb-4">
      <h2 style={{color: '#151515'}}><b>Live Tenders</b></h2>
      <p>Find the most recent tenders suitable for your company. Register now to get started!</p>
      <hr />
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Tender ID</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Deadline</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Hydroelectric Power Plant Maintenance</td>
              <td>Power Generation</td>
              <td>2024-01-15</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
            <tr>
              <td>002</td>
              <td>Procurement of Industrial Chemicals</td>
              <td>Chemicals and Fertilisers</td>
              <td>2024-02-10</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
            <tr>
              <td>003</td>
              <td>Supply of Lithium Batteries</td>
              <td>Battery and Energy</td>
              <td>2024-03-05</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
            <tr>
              <td>004</td>
              <td>Installation of Fire Safety Equipment</td>
              <td>Fire and Safety</td>
              <td>2024-01-25</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
            <tr>
              <td>005</td>
              <td>Supply of Automotive Spare Parts</td>
              <td>Automobile</td>
              <td>2024-02-20</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
            <tr>
              <td>006</td>
              <td>Setup of a Sugar Refinery</td>
              <td>Sugar Industry</td>
              <td>2024-03-15</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
            <tr>
              <td>007</td>
              <td>Solar Panel Installation</td>
              <td>Solar Energy</td>
              <td>2024-01-30</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
            <tr>
              <td>008</td>
              <td>Supply of Pharmaceutical Ingredients</td>
              <td>Pharmaceutical</td>
              <td>2024-02-28</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
            <tr>
              <td>009</td>
              <td>Steel Structure Manufacturing</td>
              <td>Metal</td>
              <td>2024-03-10</td>
              <td><a href="#" className="btn btn-primary btn-sm">View Details</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section style={{marginBottom: 30, border: '2px solid black', borderRadius: 20, padding: 15}}>
      <h3 className="section-title" style={{marginBottom: 15, color: '#03910f'}}><b>Rules for Collaboration</b></h3>
      <ul style={{listStyleType: 'disc', marginLeft: 20}}>
        <li>Participants must adhere to true experience. Refer to given documents for dealership letters.</li>
        <li>Only companies with valid experience will be considered.</li>
        <li>Ensure all necessary documents are uploaded.</li>
        <li>Follow ethical guidelines and fair competition policies.</li>
        <li>Follow the format of documents for dealership letter and previous work experienceproof as given below</li>
      </ul>
    </section>
    <h3 style={{marginBottom: 15, color: '#090908'}}><b>Refer to the documents below as a reference</b> </h3>
    <div className="row">
      <div className="col-md-3">
        <a href="./authletter.pdf" download="authletter.pdf">
          <img src={require("../assets/Dealershipletter.png")} alt="Doc1" style={{width: '100%', height: 'auto'}} />
        </a>
      </div>
      <div className="col-md-3">
        <a href="./INV103.pdf" download="INV103.pdf">
          <img src={require("../assets/POCOpy.png")} style={{width: '100%', height: 'auto'}} />
        </a>
      </div>
      <div className="col-md-3">
        <a href="./experience.pdf" download="experience.pdf">
          <img src={require("../assets/productdetails.png")}alt="Doc1" style={{width: '100%', height: 'auto'}} />
        </a>
      </div>
      <div className="col-md-3">
        <a href="./experience.pdf" download="experience.pdf">
          <img src={require("../assets/experienceproof.png")}alt="Doc1" style={{width: '100%', height: 'auto'}} />
        </a>
      </div>
    </div>
    <section style={{marginBottom: 30}}>
      <h3 className="section-title" style={{color: '#e36e14'}}><b>Upload Required Documents</b></h3>
      <form action="display.html" method="GET" encType="multipart/form-data">
        <label htmlFor="document" className="form-label">Upload Documents:</label>
        <input type="file" className="form-control" id="document" name="document" />
      </form>
    </section>
    <hr />
    <div className="container" style={{border: '2px solid black', borderRadius: 20, backgroundColor: '#F9EDD7', margin: 'auto', padding: 20}}>
      <h3 className="section-title" style={{color: '#000000'}}><b>Register Your Company and Select Departments</b></h3>
      <form action="display.html" method="GET">
        <div className="form-group">
          <label htmlFor="companyName">Register Company Name:</label>
          <input type="text" className="form-control" id="companyName" name="companyName" placeholder="Enter your company name" required />
        </div>
        <br />
        <h4><b>Select Your Departments:</b></h4>
        <hr />
        <br />
        <div className="row">
          {/* Left Column */}
          <div className="col-xl-6">
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="categories[]" defaultValue="Power Generation" id="powerGen" />
                <label className="form-check-label" htmlFor="powerGen">Power Generation</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="categories[]" defaultValue="Chemicals and Fertilisers" id="chemFert" />
                <label className="form-check-label" htmlFor="chemFert">Chemicals and Fertilisers</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="categories[]" defaultValue="Battery and Energy" id="batteryEnergy" />
                <label className="form-check-label" htmlFor="batteryEnergy">Battery and Energy</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="categories[]" defaultValue="Fire and Safety" id="fireSafety" />
                <label className="form-check-label" htmlFor="fireSafety">Fire and Safety</label>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-xl-6">
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="categories[]" defaultValue="Solar Energy" id="solarEnergy" />
                <label className="form-check-label" htmlFor="solarEnergy">Solar Energy</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="categories[]" defaultValue="Metal" id="metal" />
                <label className="form-check-label" htmlFor="metal">Metal</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="categories[]" defaultValue="Pharmaceutical" id="pharma" />
                <label className="form-check-label" htmlFor="pharma">Pharmaceutical</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="categories[]" defaultValue="Agriculture" id="agriculture" />
                <label className="form-check-label" htmlFor="agriculture">Modern Agriculture Technology</label>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  </main>
</div>



</div>

    </div>




  
  )
}

export default Componieslogin