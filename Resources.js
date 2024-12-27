import React from 'react'

function Resources() {
  return (
    <div>
      <style>
        {`
               .container_Resources{
        width: 1200px;
        margin: auto;
         background-color: lemonchiffon;
        /* background-color: aquamarine; */
    }
    .row_Resources{
        display: flex;
        flex-wrap: wrap;
        border-radius: 20px;
        border: lemonchiffon
        ;
          background-color: lemonchiffon;
    }
    .col-xl-6{
        width: 50%;
         /* border: solid;  */
        padding: 40px;
         box-sizing: border-box; 
       border-radius: 20px;
        padding-left: 40px;
     
    }
    img{
        width: 500px;
    }
    .container_{
        background-color: lemonchiffon;
    }
    img:hover{
        zoom: 10px; 
        transition: transform 0.3s ease;
          transform: scale(1.1); 
    }
              
              
              
              `}
      </style>
      <div classname="body_Resources">
        <div className="container_Resources">
          <h1 style={{ textAlign: "center" }}>
            ...<span style={{ color: "rgb(3, 63, 33)", fontSize: 40 }}> H</span>
            istory ...
          </h1>
          <h2 style={{ textAlign: "center", listStyleType: "disc" }}>
            <span style={{ color: "rgb(64, 41, 170)", fontSize: 40 }}> S</span>
            uccess Stories
          </h2>
          <h3 style={{ textAlign: "center", color: "rgb(10, 10, 46)" }}>
            Streamline Supply System turns your e-commerce dream into reality!
          </h3>
          <p style={{ textAlign: "center" }}>
            <span style={{ color: "rgb(3, 63, 33)", fontSize: 40 }}> We</span>{" "}
            are not just in business to succeed; we are here to make a
            difference
          </p>
          <div className="row">
            <div className="col-xl-6">
              <img
                src="https://green.org/wp-content/uploads/2024/01/Solar-Power-and-Energy-Independenc.jpg"
                alt
              />
            </div>
            <div className="col-xl-6">
              <h1>Solar </h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                quibusdam?
              </h3>
              <p>
                Here are some sample reviews for solar products that can be used
                on your eCommerce website. These are categorized for various
                solar product types to make them versatile and appealing to
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources