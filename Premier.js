import React from 'react'

function Premier() {
  return (
    <div>

<style>
    {`
        /* Common Styles for Logo Animation */
        .client-logos-container {
            overflow: hidden;
            margin-top: 50px;
            position: relative;
            width: 100%;
        }

        .client-logos-wrapper {
            display: flex;
            animation-duration: 12s;
            animation-iteration-count: infinite;
            transition: transform 0.3s ease; /* Smooth transition when pausing animation */
            gap: 50px; /* Increase the gap between logos */
        }

        .logo-row-left {
            animation-name: moveLeftToRight;
            animation-timing-function: linear;
        }

        .logo-row-right {
            animation-name: moveRightToLeft;
            animation-timing-function: linear;
        }

        @keyframes moveLeftToRight {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
            }
        }

        @keyframes moveRightToLeft {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-100%);
            }
        }

        .client-logo {
            width: 700px;
            height: auto;
            margin: 0 30px; /* Increased margin to further separate logos */
             justify-content: center;
  align-items: center;
   display: flex;
            overflow: hidden;
            transition: transform 0.3s ease, opacity 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .client-logo img {
            width: 100%;
            height: 100%;
          object-fit: contain;
        }

        /* Hover Effects */
        .client-logo:hover {
            transform: scale(1.1);
            opacity: 0.9;
        }

        /* Pause animation when logo is hovered */
        .client-logos-wrapper:hover {
            animation-play-state: paused; /* Stop the animation */
        }

        h2 {
            font-weight: bold;
            color: #d4a373;
        }

        /* Decorative Horizontal Line */
        .decorative-line {
            border: 0;
            height: 2px;
            background: linear-gradient(to right, #d4a373, #4caf50);
            margin: 50px 0;
        }

        /* Logo Section Background */
        .logo-section {
            background: rgb(13, 146, 84);
            background: radial-gradient(circle, rgba(97, 207, 156, 1) 0%, rgba(4, 110, 2, 0.9445028011204482) 100%);
            padding: 50px 0;
        }
            `}
    </style>
<div>
  {/* Hero Section */}
  <div className="container-fluid text-center py-5" style={{backgroundColor: '#d4a373', color: 'white'}}>
    <h1 style={{fontSize: '3rem'}}>Customer Success Stories</h1>
    <p style={{fontSize: '1.2rem'}}>Explore how we’ve helped our clients streamline operations and grow their businesses.</p>
  </div>
  <hr className="decorative-line" />
  {/* About Section */}
  <div className="container-lg my-5 py-4" style={{backgroundColor: '#ffffff', borderRadius: 10, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
    <h2 className="text-center" style={{color: '#d4a373', fontWeight: 'bold'}}>About Streamline Supply Solution</h2>
    <p className="text-center" style={{color: '#555', fontSize: '1.1rem'}}>
      Streamline Supply Solution is your partner in optimizing contractor operations. From tender tracking to seamless collaboration, 
      we ensure you have the tools to succeed in today's competitive market.
    </p>
  </div>
  <hr className="decorative-line" />
  {/* How We Help Section */}
  <div className="container-lg my-5 py-4" style={{backgroundColor: '#ffffff', borderRadius: 10, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
    <h2 className="text-center" style={{color: '#d4a373', fontWeight: 'bold'}}>How We Help</h2>
    <div className="row mt-4">
      <div className="col-md-4 text-center">
        <p style={{fontSize: '1.2rem', color: '#4caf50'}}>✔ Streamlined Operations</p>
        <p style={{color: '#555'}}>Save time and resources with automated processes.</p>
      </div>
      <div className="col-md-4 text-center">
        <p style={{fontSize: '1.2rem', color: '#4caf50'}}>✔ Better Communication</p>
        <p style={{color: '#555'}}>Improve collaboration across teams and partners.</p>
      </div>
      <div className="col-md-4 text-center">
        <p style={{fontSize: '1.2rem', color: '#4caf50'}}>✔ Data-Driven Decisions</p>
        <p style={{color: '#555'}}>Access real-time analytics to make smarter choices.</p>
      </div>
    </div>
  </div>
  <hr className="decorative-line" />
  <br/>
  {/* Client Logos Section */}
  <div className="logo-section">
    <div className="container">
      <h2 className="text-center" style={{color: 'white'}}>Our Trusted Suppliers</h2>
      {/* Row 1: Left-to-Right Animation */}
      <div className="client-logos-container">
        <div className="client-logos-wrapper logo-row-left">
          <div className="client-logo">
          <a href="https://client1.com" target="_blank">
  <img src={require("../assets/saad.png")} alt="Client 1"  />
</a>

          </div>
          <div className="client-logo">
          <a href="https://client1.com" target="_blank">
  <img src={require("../assets/samson.png")} alt="Client 1"  />
</a>

          </div>
          <div className="client-logo">
            <a href="https://client3.com" target="_blank">
              <img src={require("../assets/sap.png")}  alt="Client 3" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client3.com" target="_blank">
              <img src={require("../assets/merk.png")}  alt="Client 3" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client4.com" target="_blank">
              <img src={require("../assets/elgi.png")} alt="Client 4" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client4.com" target="_blank">
              <img src={require("../assets/thermax.png")} alt="Client 4" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client5.com" target="_blank">
              <img src={require("../assets/zotta.jpg")} alt="Client 5" />
            </a>
          </div>
        </div>
      </div>
      {/* Row 2: Right-to-Left Animation */}
      <div className="client-logos-container">
        <div className="client-logos-wrapper logo-row-right">
          <div className="client-logo">
            <a href="https://client6.com" target="_blank">
              <img src={require("../assets/saad.png")}alt="Client 6" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client7.com" target="_blank">
              <img src={require("../assets/samson.png")} alt="Client 7" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client8.com" target="_blank">
              <img src={require("../assets/sap.png")}alt="Client 8" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client4.com" target="_blank">
              <img src={require("../assets/elgi.png")} alt="Client 4" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client9.com" target="_blank">
              <img src={require("../assets/thermax.png")} alt="Client 9" />
            </a>
          </div>
          <div className="client-logo">
            <a href="https://client10.com" target="_blank">
              <img src={require("../assets/zotta.jpg")} alt="Client 10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Customer Stories Section */}
  <div className="container-lg my-5 py-4" style={{backgroundColor: '#ffffff', borderRadius: 10, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
    <h2 className="text-center" style={{color: '#d4a373', fontWeight: 'bold'}}>Customer Testimonials</h2>
    <div className="row mt-4">
      <div className="col-md-4 mb-4">
        <div className="card" style={{border: 'none'}}>
          <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Customer 1" />
          <div className="card-body text-center">
            <h5 className="card-title" style={{color: '#4caf50'}}>Alex Johnson</h5>
            <p style={{color: '#555'}}>"The tender tracking module streamlined our processes, saving us hours every week!"</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card" style={{border: 'none'}}>
          <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Customer 2" />
          <div className="card-body text-center">
            <h5 className="card-title" style={{color: '#4caf50'}}>Sarah Lee</h5>
            <p style={{color: '#555'}}>"The collaboration portal improved communication with our clients and partners!"</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card" style={{border: 'none'}}>
          <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Customer 3" />
          <div className="card-body text-center">
            <h5 className="card-title" style={{color: '#4caf50'}}>Michael Carter</h5>
            <p style={{color: '#555'}}>"Uploading and managing important documents has never been this easy!"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr className="decorative-line" />
</div>

        

    </div>
  )
}

export default Premier 