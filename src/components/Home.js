import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
 // Define state to handle the card hover effect
  const [hovered, setHovered] = useState(false);

  // Define hover styles
  const cardStyle = {
    width: "18rem",
    borderRadius: 10,
    border: "2px solid #c8c2b7",
    transition: "background-color 0.2s ease-in",
    backgroundColor: hovered ? '#f0ad4e' : 'transparent', // Change background color on hover
  };

  const cardBodyStyle = {
    transition: "background-color 0.2s ease-in",
    backgroundColor: hovered ? '#e0e0e0' : 'transparent', // Change card body background on hover
  };

  const buttonStyle = {
    transition: "background-color 0.2s ease-in",
    backgroundColor: '#007bff', // Default button color
  };

 return (
   <div>
     {/* Slider start */}
     <div className="carousel slider container1 mt-3 mb-3 mx-3">
       <div
         id="carouselExample"
         className="carousel slide"
         data-bs-ride="carousel"
       >
         <div className="carousel-inner">
           <div className="carousel-item active">
             <img
               src={require("../assets/1.png")}
               className="d-block w-100"
               alt="Image 1"
             />
           </div>
           <div className="carousel-item">
             <img
               src={require("../assets/2.png")}
               className="d-block w-100"
               alt="Image 2"
             />
           </div>
           <div className="carousel-item">
             <img
               src={require("../assets/1.png")}
               className="d-block w-100"
               alt="Image 3"
             />
           </div>
           <div className="carousel-item">
             <img
               src={require("../assets/2.png")}
               className="d-block w-100"
               alt="Image 4"
             />
           </div>
           <div className="carousel-item">
             <img
               src={require("../assets/3.png")}
               className="d-block w-100"
               alt="Image 5"
             />
           </div>
         </div>
         <button
           className="carousel-control-prev"
           type="button"
           data-bs-target="#carouselExample"
           data-bs-slide="prev"
         >
           <span
             className="carousel-control-prev-icon"
             aria-hidden="true"
           ></span>
           <span className="visually-hidden">Previous</span>
         </button>
         <button
           className="carousel-control-next"
           type="button"
           data-bs-target="#carouselExample"
           data-bs-slide="next"
         >
           <span
             className="carousel-control-next-icon"
             aria-hidden="true"
           ></span>
           <span className="visually-hidden">Next</span>
         </button>
       </div>
     </div>
     {/* Slider end */}

     {/* front page start */}
     <div className="container">
       <div className="row">
         <div className="col-xl-12">
           {/* container start*/}
           <div
             style={{ borderRadius: 30, border: "1px solid", padding: 40 }}
             className="container mt-5 mb-5"
           >
             <div className="row">
               <div className="col-12 col-md-9">
                 <div className="text-left">
                   <h1 className="home-title mt-3">
                     <b>
                       Do business in the <br />
                       world's busiest market,
                       <br />
                       the internet.
                     </b>
                   </h1>
                   <button
                     style={{
                       color: "#000000",
                       border: "2px solid #352f45",
                       fontWeight: 500,
                       padding: "16px 40px",
                       background: "#60a517",
                       borderRadius: 500,
                     }}
                     onClick={() => navigate("/companylogin")} // Redirect to /clientlogin
                   >
                     <b>Sign-up its's free</b>
                   </button>
                   <button
                     style={{
                       color: "#000000",
                       border: "2px solid #352f45",
                       fontWeight: 500,
                       padding: "16px 40px",
                       background: "#f1f1f1",
                       borderRadius: 500,
                     }}
                     onClick={() => {
                      window.open("https://wa.me/9834609627?text=Hi,%20I%20would%20like%20to%20request%20a%20callback.", "_blank");
                    }}
                   >
                     <b>Contact with us</b>
                   </button>
                   <hr />
                   <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Cum maiores similique dignissimos quam error ipsum velit
                     iste quibusdam dolores fuga incidunt magnam ratione dolor
                     non voluptate explicabo numquam, vel tenetur.lorem Lorem
                     ipsum dolor, sit amet consectetur adipisicing elit.
                     Excepturi eum, dicta consequatur vero, voluptates
                     repudiandae tempora quas veritatis provident, voluptatum
                     explicabo aliquam pariatur voluptate corrupti hic
                     temporibus quod labore at.
                   </p>
                 </div>
               </div>
               <div id="companypic" className="col-12 col-md-3 text-center">
                 <img
                   id="profile"
                   src={require("../assets/rb_8994.png")}
                   alt="profile-pic"
                   className="img-fluid rounded-circle"
                 />
               </div>
             </div>
           </div>
         </div>
         {/* container end */}
         {/*---crux start---*/}
         <div className="container">
           {/* container 1 */}
           <div className="container">
             <div className="row">
               <div
                 style={{
                   backgroundColor: "#F9EDD7",
                   border: "1px solid darkgray",
                   display: "flex",
                   justifyContent: "space-between",
                   boxSizing: "border-box",
                   borderRadius: 20,
                   padding: "40px 85px 50px 50px",
                   marginRight: 20,
                 }}
                 className="col-xl-5 mt-4 mb-4"
               >
                 <div
                   className="market-section-item seo fadeinup2 fadeinup"
                   style={{ display: "flex", alignItems: "center" }}
                 >
                   <div className="content-part fadeinup3" style={{ flex: 1 }}>
                     <p className="market-features">SEO</p>
                     <h3>
                       <b>Be the first store in search</b>
                     </h3>
                     <p>
                       The built-in and extensible SEO tools ensures your store
                       is found first when a shopper is looking to make a
                       purchase.
                     </p>
                   </div>
                   <div
                     className="img-part fadeinup3"
                     style={{ flexShrink: 0, marginLeft: 20 }}
                   >
                     <img
                       src={require("../assets/seo.png")}
                       alt="//"
                       loading="lazy"
                       height={94}
                       width={112}
                     />
                   </div>
                 </div>
               </div>
               <div
                 style={{
                   border: "1px solid darkgray",
                   justifyContent: "space-between",
                   boxSizing: "border-box",
                   borderRadius: 20,
                   padding: "40px 85px 50px",
                 }}
                 className="col-xl-6 mt-4 mb-4"
               >
                 <div
                   className="market-section-item social-selling fadeinup2 fadeinup"
                   style={{ display: "flex", alignItems: "center" }}
                 >
                   <div className="content-part fadeinup3" style={{ flex: 1 }}>
                     <p className="market-features">SOCIAL SELLING</p>
                     <h3>
                       <b> Make them buy where they browse</b>
                     </h3>
                     <p>
                       Make it easier for your buyers to shop from you,
                       regardless of what social platform they're on.
                     </p>
                   </div>
                   <div
                     className="img-part fadeinup3"
                     style={{ flexShrink: 0, marginLeft: 20 }}
                   >
                     <img
                       src={require("../assets/social.png")}
                       alt="//"
                       loading="lazy"
                       height={119}
                       width={122}
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* container 2 */}
           <div className="container">
             <div className="row">
               <div
                 style={{
                   color: "#f1f1f1",
                   backgroundColor: "#008452",
                   border: "1px solid darkgray",
                   display: "flex",
                   justifyContent: "space-between",
                   padding: "40px 85px 50px 50px",
                   boxSizing: "border-box",
                   borderRadius: 20,
                 }}
                 className="col-xl-8 mt-4 mb-4"
               >
                 <div
                   className="market-section-item campaigns fadeinup4 fadeinup"
                   style={{
                     display: "flex",
                     alignItems: "center",
                     width: "100%",
                   }}
                 >
                   <div
                     className="content-part fadeinup5"
                     style={{ flex: 1, marginRight: 20 }}
                   >
                     <p className="market-features">CAMPAIGNS</p>
                     <h3>
                       <b>Get shoppers to the finish line</b>
                     </h3>
                     <p>
                       Turn all your shoppers into buyers as you prompt them to
                       finish their checkout line using effective campaigns and
                       smart notifications.
                     </p>
                   </div>
                   <div
                     className="img-part fadeinup5"
                     style={{ flexShrink: 0 }}
                   >
                     <img
                       src={require("../assets/campaign.png")}
                       alt
                       loading="lazy"
                       height={140}
                       width={160}
                     />
                   </div>
                 </div>
               </div>
               <div
                 style={{ borderRadius: 30 }}
                 className="col-xl-4 mt-4 mb-4;"
               >
                 <img
                   style={{ height: "95%", width: "100%", borderRadius: 20 }}
                   src={require("../assets/meeting.jpg")}
                   alt
                 />
               </div>
             </div>
           </div>
           {/* container 3 */}
           <div className="container">
             <div className="row">
               <div
                 style={{
                   border: "1px solid darkgray",
                   display: "flex",
                   justifyContent: "space-between",
                   boxSizing: "border-box",
                   borderRadius: 20,
                   padding: "40px 85px 50px 50px",
                 }}
                 className="col-xl-6 mt-4 mb-4"
               >
                 <div
                   className="market-section-item content-management fadeinup6 fadeinup"
                   style={{
                     display: "flex",
                     alignItems: "center",
                     width: "100%",
                   }}
                 >
                   <div
                     className="content-part fadeinup7"
                     style={{ flex: 1, marginRight: 20 }}
                   >
                     <p className="market-features">CONTENT MANAGEMENT</p>
                     <h3>
                       <b>Nurture them with content</b>
                     </h3>
                     <p>
                       Keep your audience up to date with all kinds of content,
                       helping them become more aware of your business.
                     </p>
                   </div>
                   <div
                     className="img-part fadeinup7"
                     style={{ flexShrink: 0 }}
                   >
                     <img
                       src={require("../assets/content.png")}
                       alt="Content Management Illustration"
                       loading="lazy"
                       height={130}
                       width={140}
                     />
                   </div>
                 </div>
               </div>
               <div
                 style={{
                   backgroundColor: "#F9EDD7",
                   border: "1px solid darkgray",
                   display: "flex",
                   justifyContent: "space-between",
                   boxSizing: "border-box",
                   borderRadius: 20,
                   padding: "40px 85px 50px 50px",
                   marginLeft: 20,
                 }}
                 className="col-xl-5 mt-4 mb-4"
               >
                 <div
                   className="market-section-item ai-bot fadeinup6 fadeinup"
                   style={{
                     display: "flex",
                     alignItems: "center",
                     width: "100%",
                   }}
                 >
                   <div
                     className="content-part fadeinup7"
                     style={{ flex: 1, marginRight: 20 }}
                   >
                     <p className="market-features">Contact suppliers</p>
                     <h3>
                       <b>Let your products find their buyers</b>
                     </h3>
                     <p>
                       Put us to use to show products your shoppers might be
                       interested in using based on their past shopping
                       behaviors.
                     </p>
                   </div>
                   <div
                     className="img-part fadeinup7"
                     style={{ flexShrink: 0 }}
                   >
                     <img
                       src={require("../assets/buyersillustration.png")}
                       alt="Buyers Illustration"
                       loading="lazy"
                       height={115}
                       width={126}
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/*---crux end------*/}
       </div>
     </div>
     {/*-------*/}
     <div>
       {/* Cards section start */}
       <div style={{ textAlign: "center", padding: 50 }}>
         <div>
           <p>resources</p>
           <h1 style={{ fontSize: "2.5rem", margin: "20px 0" }}>
             <b>
               From getting started to <br />
               what's next,
             </b>
             <b style={{ color: "#008452" }}> we've got it all.</b>
           </h1>
         </div>
       </div>

       <div
         style={{ gap: 20, display: "grid", paddingTop: 40 }}
         className="container mt-5 mb-5 "
       >
         <div className="row">
           {/* Card 1 */}
           <div style={{ display: "flex" }} className="col-xl-3">
             <div
               className="card"
               style={cardStyle}
               onMouseEnter={() => setHovered(true)} // On hover, set hovered to true
               onMouseLeave={() => setHovered(false)} // On mouse leave, reset hovered to false
             >
               <img
                 style={{ height: "50%", width: "50%", margin: "auto" }}
                 src={require("../assets/process.png")}
                 alt="docs.."
               />
               <div className="card-body" style={cardBodyStyle}>
                 <h3 className="card-title">
                   <b>Help Center</b>
                 </h3>
                 <p className="card-text">
                   Manuals, documents, procedures for business and tender
                   participations
                 </p>
                 <a href="#" className="btn btn-primary" style={buttonStyle}>
                   Go somewhere
                 </a>
               </div>
             </div>
           </div>

           {/* Card 2 */}
           <div style={{ display: "flex" }} className="col-xl-3">
             <div
               className="card"
               style={cardStyle}
               onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setHovered(false)}
             >
               <img
                 style={{ height: "50%", width: "50%", margin: "auto" }}
                 src={require("../assets/predictive-chart.png")}
                 alt="docs.."
               />
               <div className="card-body" style={cardBodyStyle}>
                 <h3 className="card-title">
                   <b>Live Tendors</b>
                 </h3>
                 <p className="card-text">
                   Some quick example text to build on the card title and make
                   up the bulk of the card's content.
                 </p>
                <a
  href="/tenders"
  className="btn btn-primary"
  style={{
    ...buttonStyle, // Apply your existing buttonStyle
    cursor: "pointer", // Ensure it looks interactive
  }}
>
  Go somewhere
</a>

               </div>
             </div>
           </div>

           {/* Card 3 */}
           <div style={{ display: "flex" }} className="col-xl-3">
             <div
               className="card"
               style={cardStyle}
               onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setHovered(false)}
             >
               <img
                 style={{ height: "50%", width: "50%", margin: "auto" }}
                 src={require("../assets/supplier.png")}
                 alt="docs.."
               />
               <div className="card-body" style={cardBodyStyle}>
                 <h3 className="card-title">
                   <b>Future scope</b>
                 </h3>
                 <p className="card-text">
                   Some quick example text to build on the card title and make
                   up the bulk of the card's content.
                 </p>
                 <a
  href="/sectorsweserve"
  className="btn btn-primary"
  style={{
    ...buttonStyle, // Apply your existing buttonStyle
    cursor: "pointer", // Ensure it looks interactive
  }}
>
  Go somewhere
</a>

               </div>
             </div>
           </div>

           {/* Card 4 */}
           <div style={{ display: "flex" }} className="col-xl-3">
             <div
               className="card"
               style={cardStyle}
               onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setHovered(false)}
             >
               <img
                 style={{ height: "50%", width: "50%", margin: "auto" }}
                 src={require("../assets/process.png")}
                 alt="docs.."
               />
               <div className="card-body" style={cardBodyStyle}>
                 <h3 className="card-title">
                   <b>Past occurrences</b>
                 </h3>
                 <p className="card-text">
                 "With a legacy of successful ventures ,
                  our company has continually shaped industries and communities alike."
                 </p>
                 <a
  href="/services/premier"
  className="btn btn-primary"
  style={{
    ...buttonStyle, // Apply your existing buttonStyle
    cursor: "pointer", // Ensure it looks interactive
  }}
>
  Go somewhere
</a>

               </div>
             </div>
           </div>
         </div>
       </div>
       {/* Cards section end */}
     </div>
     {/*-------*/}

     {/* empty container start */}
     <div
       style={{ backgroundColor: "#f9edd7", padding: "240px 0" }}
       className="container4"
     >
       <div className="row"></div>
     </div>
     {/* empty container end */}

     {/* customer support start*/}
     <div
       style={{
         border: "1px solid",
         padding: 40,
         backgroundColor: "#01403d",
         color: "#f1f1f1",
       }}
       className="container5 mt-5 mb-5"
     >
       <div className="row">
         <div className="col-12 col-md-9">
           <div className="text-left">
             <span
               style={{ fontFamily: "Caveat,cursive", color: "palevioletred" }}
               className="section-title support-title fadeinup1"
             >
               Customer Support{" "}
             </span>
             <h1 className="home-title mt-3">
               <b>
                 No problem too big, <br />
                 no question too <br />
                 small.
               </b>
             </h1>
             <p>
               We're committed to the growth of your ecommerce business,
               <br />
               just as you are. Reach out to us when in need.
             </p>
             <button
               style={{
                 color: "#000000",
                 border: "2px solid #352f45",
                 fontWeight: 500,
                 padding: "16px 40px",
                 background: "#f1f1f1",
                 borderRadius: 500,
               }}
               onClick={() => {
                window.location.href = "mailto:shivengineersinfo@gmail.com";
              }}
             >
               <b>Send us an email</b>
             </button>
             <button
               style={{
                 color: "#000000",
                 border: "2px solid #352f45",
                 fontWeight: 500,
                 padding: "16px 40px",
                 background: "#f1f1f1",
                 borderRadius: 500,
               }}
               onClick={() => {
                window.open("https://wa.me/9834609627?text=Hi,%20I%20would%20like%20to%20request%20a%20callback.", "_blank");
              }}
             >
               <b>Request a callback</b>
             </button>
           </div>
         </div>
         <div id="companypic" className="col-12 col-md-3 text-center">
           <img
             id="profile"
             src={require("../assets/customer-support-rep.webp")}
             alt="profile-pic"
             className="img-fluid"
           />
         </div>
       </div>
     </div>
     {/* customer support end*/}

     <div>
       {/* container start*/}
       <div
         style={{
           borderRadius: 30,
           border: "1px solid",
           padding: 40,
           backgroundImage: "url(/assets/background.jpg)",
         }}
         className="container7 mt-5 mb-5 mx-3"
       >
         <div className="row">
           <div className="col-12 col-md-9">
             <div className="text-left">
               <h1 style={{ color: "dark" }} className="home-title mt-3">
                 <b>
                   What better day to start doing business with the internet?{" "}
                   <br />
                 </b>
               </h1>
               <b>
                 <br />
                 <div></div>
                 <button
                   style={{
                     width: "100%",
                     height: "100%",
                     padding: 40,
                     fontSize: 24,
                     background: "#336200",
                     border: "2px solid #352f45",
                     borderRadius: 500,
                     alignItems: "end",
                     marginLeft: 130,
                     cursor: "pointer",
                   }}
                   onClick={() => navigate("/clientlogin")} // Redirect to /clientlogin
                 >
                   <b>Start Business today with us</b>
                 </button>
               </b>
             </div>
             <b></b>
           </div>
           <b></b>
         </div>
         <b></b>
       </div>
       <b>{/* container end */}</b>
     </div>

     {/* front page end */}
   </div>
 );
};

export default Home;
