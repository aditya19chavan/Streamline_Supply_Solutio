import React from 'react'
import { Link } from "react-router-dom";

function Sectorsweserve() {
  return (
    <div>

<style>
  {`
        /* Resetting margins and paddings */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .container1 {
            display: flex;
        }

        .sidebar1 {
            width: 20%;
            background-color: #f4f4f4;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }

        .sidebar1 h2 {
            margin-bottom: 20px;
        }

        .sidebar1 ul {
            list-style: none;
            padding: 0;
        }

        .sidebar1 ul li:hover {
            background-color: #6f6d6d; /* Change background color on hover */
        }

        .sidebar1 ul li {
            margin: 10px 0;
            cursor: pointer;
            padding: 10px 15px; /* Add padding to list items */
            border-radius: 5px; /* Add rounded corners */
            transition: background-color 0.3s ease; 
        }

        .content1 {
            width: 80%;
            padding: 20px;
        }

        .content1 h1 {
            text-align: center;
            margin-bottom: 40px;
        }

        .grid1 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .card {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: scale(1.06);
            box-shadow: 0px 15px 35px rgba(0.2, 0.2, 0.2, 1.5); /* Enhanced box shadow on hover */
        }

        .card img {
            width: 100%;
            height: auto;
            display: block;
            transition: opacity 0.3s ease;
            object-fit: cover;
        }

        .card .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.6); /* Overlay color */
            opacity: 0.8; /* Default opacity */
            transition: background 0.3s ease, opacity 0.3s ease;
            color: #000; /* Default text color */
            font-size: 20px;
            text-decoration: none;
            font-weight: bold;
            text-align: center;
        }

        .card:hover .overlay {
            background: none; /* Remove overlay effect */
            opacity: 1; /* Make overlay fully transparent */
            color: white; /* Ensure text remains white */
        }

        .card .overlay a {
            color: inherit; /* Inherit text color from .overlay */
            font-size: 20px;
            text-decoration: none;
            font-weight: bold;
        }

        .card .overlay a:hover {
            color: #fff; /* Change text color on hover */
        }
              `}
    </style>
  
<div className="container1">
  <aside className="sidebar1">
    <h2>Industries</h2>
    <ul>
      <li onclick="navigateTo('powergeneration.html')">Power Generation</li>
      <li>
  <Link 
    to="/automobiles" 
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    Automobiles
  </Link>
</li>

      <li onclick="navigateTo('cement.html')">Cement</li>
      <li onclick="navigateTo('chemicals.html')">Chemicals and Fertilisers</li>
      <li onclick="navigateTo('solar.html')">Solar Energy</li>
      <li onclick="navigateTo('sugar.html')">Sugar Industry</li>
      <li onclick="navigateTo('battery.html')">Battery and Energy</li>
      <li onclick="navigateTo('paper.html')">Paper &amp; Pulp</li>
      <li onclick="navigateTo('pharmaceuticals.html')">Pharmaceuticals</li>
      <li onclick="navigateTo('fireandsafety.html')">Fire and safety</li>  
      <li onclick="navigateTo('mahadiscom.html')">MAHADISCOM</li>
      <li onclick="navigateTo('refineries.html')">Refineries and Petrochemicals</li>
      <li onclick="navigateTo('softbeverages.html')">Soft Beverages</li>
      <li onclick="navigateTo('metals.html')">Metals</li>
      <li onclick="navigateTo('agritech.html')">Modern Agriculture Technology</li>
      <li onclick="navigateTo('textile.html')">Textile</li>
    </ul>
  </aside>
  <main className="content1">
    <h1>SHIV ENGINEERS HAS A RICH EXPERIENCE OF WORKING ACROSS INDUSTRIES</h1>
    <div className="grid1">
      <div className="card">
        {/* src="./assets/3.jpg */}
        <img  src={require("../assets/Automobile.jpg")} alt="Automobiles" />
        <div className="overlay">
        <Link 
    to="/automobiles" 
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    Automobiles
  </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/cement.jpg")}alt="Cement" />
        <div className="overlay">
        <Link
                  to="/Cement"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Cement
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/Fertilizers-Pesticide.jpg")} alt="Chemicals and Fertilisers" />
        <div className="overlay">
        <Link
                  to="/ChemicalAndFerti"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  ChemicalAndFertilizer
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/solar.webp")}alt="solar" />
        <div className="overlay">
        <Link
                  to="/solerEnergy"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  SolerEnergy
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/sugar.png")} alt="Sugar" className="card-image" />
        <div className="overlay">
          <a href="sugar.html" className="overlay-text">Sugar Industry</a>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/battery.webp")} alt="battery" />
        <div className="overlay">
        <Link
                  to="/BatteryAndEnergy"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                Battery and Energy
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/Paper-Package.jpg")} alt="Paper & Pulp" />
        <div className="overlay">
        <Link
                  to="/PaperAndpulp"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                PaperAndpulp
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/Pharmaceuticals.jpg")}alt="Pharmaceuticals" />
        <div className="overlay">
        <Link
                  to="/Pharmacitical"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                 Pharmacitical
                </Link>
        </div>
      </div>
      {/* New industries */}
      <div className="card">
        <img  src={require("../assets/firesafety.webp")} alt="Plywood" />
        <div className="overlay">
        <Link
                  to="/FireAndSafety"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                 FireAndSafety
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/genco.jpg")}alt="Power Generation" />
        <div className="overlay">
        <Link
                  to="/PowerAndGeneration"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
               PowerAndGeneration
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/MAHADISCOM.jpg")}alt="Food" />
        <div className="overlay">
        <Link
                  to="/Mahadiscom"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
            Mahadiscom
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/Refineries-Petrochemicals.jpg")} alt="Refineries and Petrochemicals" />
        <div className="overlay">
        <Link
                  to="/Petrochemical"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
              Refineries and Petrochemical
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/soft_beverages.jpg")} alt="Soft Beverages" />
        <div className="overlay">
        <Link
                  to="/SoftBeverages"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
             SoftBeverages
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/steel-Metal.jpg")} alt="Metals" />
        <div className="overlay">
        <Link
                  to="/Metal"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                 Metal
                </Link>
        </div>
      </div>
      <div className="card">
        <img  src={require("../assets/agritech.webp")}alt="Agri Technology" />
        <div className="overlay">
        <Link
                  to="/Agritech"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                Modern Agriculture 
                </Link>
        </div>
      </div>
      <div className="card">
      <img  src={require("../assets/Textile.jpg")}alt="Textile" />
  <div className="overlay">
  <Link
                  to="/Textile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
            Textile
                </Link>
  </div>
</div>

    </div>
  </main>
</div>


    </div>
  )
}

export default Sectorsweserve