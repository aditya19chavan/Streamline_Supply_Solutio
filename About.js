import React from 'react'

function About() {
  return (
   
    <div>
      
 
      <div className="container text-overlay" style={{ paddingTop: "90px" }} >
        <div className="image-container">
          <img
            src="https://cdn.prod.website-files.com/64a2be73942e1d57fed077f3/66a0c737d5d590e7b8069fbc_about-us_header-p-1600.png"
            width="102%"
            alt="Image"
          />
         
          <div className="text-overlay">
            <ul>
              <li>
                <h2>About Us</h2>{" "}
              </li>
            </ul>
            <h1>We set the highest standards in everything we do,</h1>
            {/* <h1>Driven by a strong commitment to excellence.</h1> */}
            <h1>Our work ethic is the foundation of our success.</h1>
            <h6>We are continuously innovating to elevate our services.</h6>
          </div>
        </div>
        {/*Image eND*/}
      </div>
      <br />
      {/*Image End*/}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/*Half part text Start*/}
     
        <div className="row">
          <div className="col-xl-5" style={{ color: "rgb(6, 70, 6)" }}>
            <strong>
              <h1>
                We are providing the best solution to all your requirements
              </h1>
            </strong>
            <img style={{ paddingTop: "100px" }}
            src={require("../assets/aboutpic.webp")}
            width="100%"
            alt="Image"
          />
          </div>
          <div className="col-xl-7">
            <h2>About Us</h2>
            <hr/>

            <h5 style={{ textAlign: "justify" }}>
              <h3>Who We Are:</h3>
              Shiv Engineers is a trusted and authorized contractor specializing
              in supplying a wide range of products and services to various
              industries. We act as a mediator, bridging the gap between
              manufacturers and end-users, providing essential products and
              services across multiple sectors.
              <br />
              <br />
              <h3>Our Expertise:</h3>
              Wecater to several industries, including government organizations
              like Mahagenco, Mahatransco, and other leading power generation
              and transmission companies. With extensive experience in
              industrial, chemical, mechanical, solar, and pharmaceutical
              sectors, we offer tailored solutions to meet diverse client needs.
              <br />

              <h3>Our Services:</h3>
              As authorized contractors, we manage the supply of equipment,
              provide maintenance services, and assist with manual labor supply.
              We focus on delivering high-quality products sourced from trusted
              partners, ensuring the best solutions for our clients.
              <br />
              <br />
              <h3>GovernmentTender Participation:</h3>
              Shiv Engineers participates in various government tenders,
              handling projects related to electricity generation, transmission,
              and many other critical sectors. We are committed to meeting
              regulatory standards and delivering excellence in every project we
              undertake.
            </h5>
            <br />
            <h5 style={{ textAlign: "justify" }}>
              <h3>Our Commitment:</h3>
              With a strong focus on communication and efficient project
              management, Shiv Engineers strives to enhance client engagement
              and streamline processes. We are dedicated to providing the best
              service, ensuring our clients' success across various projects.
            </h5>
            <br />
            <h5 style={{ textAlign: "justify" }}>
              <h3>Why Choose Us:</h3>
              With a reputation for reliability and excellence, Shiv Engineers
              continues to build long-lasting relationships with clients by
              offering top-tier products and services. Trust us to be your go-to
              contractor for comprehensive industry solutions.
            </h5>
          </div>
          
        </div>
     
      {/*Half part text End*/}
      <br />
      <br />
      <br />
      {/*Core Values Start*/}
      <div className="cont" style={{backgroundColor: "#fed600",height:"500px",borderRadius:"15px"}}  >
        <h1 style={{ textAlign: "center",paddingTop:"20px" }}>Our Core Values</h1> <hr/>
        <h5 style={{ textAlign: "center"}}>
        At Shiv Engineers, our core values are built on a foundation of integrity, excellence, and customer-centricity. We prioritize delivering high-quality, innovative solutions that are reliable and tailored to meet each client's specific needs. Our commitment to collaboration ensures strong partnerships, both internally and with our clients, fostering long-term relationships based on trust and mutual success. We uphold the highest standards of safety, professionalism, and sustainability, ensuring that every project adheres to industry regulations and contributes to a better future. Through continuous improvement, we strive to stay ahead of industry trends and offer cutting-edge solutions. With a focus on efficiency and communication, we aim to exceed client expectations in every aspect of our service.
        </h5>

        <div className="cont" style={{ paddingTop: "30px" , paddingBottom:"30px"}}>
        <div className="row">
        <div className="col-xl-5">
        <img style={{ paddingTop: "10px" }}
            src={require("../assets/SElogo.png")}
            width="50%"
            height="70%"
            alt="Image"
          />
           </div>
         <div className="col-xl-7" style={{ paddingTop: "40px" }}>
         <h5 style={{ paddingRight: "10px" }}>
          "Building Tomorrow with Integrity, Excellence, and Innovation – <br/>
          Your Trusted Partner for Reliable, Sustainable Solutions."  </h5>
          </div>
          </div>
          </div>
      </div>
      {/*Core Values End*/}


   


      {/*Cards Start*/}
      <div className="cont"
      
      style={{
        marginTop:"40px",
        backgroundImage: `url(${require("../assets/tps.jpg")})`, 
        backgroundSize: "cover",  
        padding: "20px", 
        borderRadius: "15px",
        
      }}
      
      >
   
        <div className="row">
          <div className="col-xl-3" style={{ margin: "47.5px" }}>
            <div className="card" style={{ width: "18rem",opacity: "50%", backgroundColor: "transparent", border: "2px black" }}>
              <img  style={{ width: "180px",height:"110px",paddingLeft:"90px",paddingBottom:"20px",paddingTop:"30px" }}
                  src={require("../assets/abt1.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ color:"white" }}>
                <h5 className="card-title"><b>Customer-first philosophy</b></h5>
                <p className="card-text">
                <b>
                In all these years, it's our customers' trust and goodwill that has helped us establish a strong position in the market. No matter the size of your business, we're here to help you grow.
                </b>
                </p>
         
              </div>
            </div>
          </div>
          <div className="col-xl-3" style={{ margin: "47.5px" }}>
            <div className="card" style={{ width: "18rem",opacity: "50%", backgroundColor: "transparent", border: "2px black" }}>
            <img  style={{ width: "180px",height:"110px",paddingLeft:"90px",paddingBottom:"20px",paddingTop:"30px" }}
                  src={require("../assets/abt2.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ color:"white" }}>
                <h5 className="card-title"><b>Commitment to Innovation</b></h5>
                <p className="card-text">
                <b>
          Through consistent investment in research and development, we enhance our solutions and ensure the highest quality and reliability. By controlling key aspects of our service delivery, we provide tailored, sustainable solutions that meet our clients' needs while staying ahead of industry trends.
          </b>
                </p>
           
              </div>
            </div>
          </div>
          <div className="col-xl-3" style={{ margin: "47.5px" }}>
            <div className="card" style={{ width: "18rem",opacity: "50%", backgroundColor: "transparent", border: "2px black" }}>
            <img  style={{ width: "180px",height:"110px",paddingLeft:"90px",paddingBottom:"20px",paddingTop:"30px" }}
                  src={require("../assets/abt3.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ color:"white" }}>
                <h5 className="card-title"><b>Long-term commitment</b></h5>
                <p className="card-text">
                <b>
                Years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business that’s powered by you, our customer
                </b>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Cards End*/}
      {/*Text Start*/}
      <div className="cont grnbox">
        <h4
          style={{
            textAlign: "center",
            backgroundColor: "rgb(6, 70, 6)",
            color: "white",
            padding: 90,
            borderRadius: 7,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus earum officiis omnis pariatur quas et possimus ducimus
          alias delectus velit. Ea error quidem reprehenderit accusamus omnis
          sapiente rerum eveniet suscipit blanditiis, officiis ullam, voluptatum
          neque natus quam. Quibusdam, adipisci doloribus. Lorem ipsum dolor sit
          amet.
        </h4>
      </div>
    </div>
  );
}

export default About