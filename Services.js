import React from 'react'

const Services = () => {
  return (
    <div>
      <style>
{`
body {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
     
      }
      header {
        background-color: #333;
        color: white;
        padding: 10px 0;
        text-align: center;
      }
      .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
      }

      .section-title {
        text-align: center;
        font-size: 2.5em;
        color: #333;
        margin: 40px 0;
      }

      .product-cards,
      .service-cards,
      .reviews {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 40px;
      }

      .card {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .card-content {
        padding: 20px;
        text-align: center;
      }

      .card-content h5 {
        font-size: 1.3em;
        margin-bottom: 10px;
        color: #333;
      }

      .card-content p {
        font-size: 1em;
        color: #777;
        margin-bottom: 20px;
      }

      .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }

      .button {
        display: inline-block;
        background-color: #e74c3c;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-size: 1.1em;
        transition: background-color 0.3s;
      }

      .button:hover {
        background-color: #c0392b;
      }

      .testimonial {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .testimonial:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }

      .testimonial .quote {
        font-size: 1.2em;
        color: #e74c3c;
        margin-bottom: 10px;
      }

      .testimonial .author {
        font-size: 1em;
        font-weight: bold;
        color: #333;
      }

      .service-card {
        background-color: #589b07;
        color: white;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        transition: transform 0.3s;
      }

      .service-card h5 {
        font-size: 1.5em;
        margin-bottom: 20px;
      }

      .service-card p {
        font-size: 1em;
        margin-bottom: 20px;
      }

      .service-card:hover {
        transform: translateY(-10px);
      }

      .footer {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 20px;
        margin-top: 40px;
      }
  `}


  </style>
 <div className="container">
  <div className="container">
    <header>
      <h1>Streamline Supply Solution Products &amp; Services</h1>
    </header>
    <br /><br /><br />
    {/*Card Start*/}
    {/*Card End*/}
    {/* Products Section */}
    <section>
      <h2 className="section-title">Our Products</h2>
      <div className="product-cards">
        {/* Product 1 */}
        <div className="card" style={{border: 'solid black 3px'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOv8pBMLFoWUJaEjsrW7mcWUqyhU4e9AVX329-0biDP1GWlkC6zumEokBmRspF10a590&usqp=CAU" alt="Product 1" />
          <div className="card-content">
            <h5>Welding Machine</h5>
            <p>
              High-quality welding machine for all types of welding
              projects.
            </p>
            <a href="#" className="button">Buy Now</a>
          </div>
        </div>
        {/* Product 2 */}
        <div className="card" style={{border: 'solid black 3px'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOv8pBMLFoWUJaEjsrW7mcWUqyhU4e9AVX329-0biDP1GWlkC6zumEokBmRspF10a590&usqp=CAU" alt="Product 2" />
          <div className="card-content">
            <h5>Welding Helmet</h5>
            <p>
              Protective helmet designed for safety and comfort during
              welding.
            </p>
            <a href="#" className="button">Buy Now</a>
          </div>
        </div>
        {/* Product 3 */}
        <div className="card" style={{border: 'solid black 3px'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOv8pBMLFoWUJaEjsrW7mcWUqyhU4e9AVX329-0biDP1GWlkC6zumEokBmRspF10a590&usqp=CAU" alt="Product 3" />
          <div className="card-content">
            <h5>Welding Gloves</h5>
            <p>Durable gloves for protection during welding operations.</p>
            <a href="#" className="button">Buy Now</a>
          </div>
        </div>
      </div>
    </section>
    {/* Services Section */}
    <section>
      <h2 className="section-title">Our Services</h2>
      <div className="service-cards">
        {/* Service 1 */}
        <div className="service-card" style={{border: 'solid black 3px'}}>
          <h5>Home Welding</h5>
          <p>
            Reliable welding services for your home repairs and projects.
          </p>
        </div>
        {/* Service 2 */}
        <div className="service-card" style={{border: 'solid black 3px'}}>
          <h5>Gate Welding</h5>
          <p>Custom welding solutions for your gates, fences, and more.</p>
        </div>
        {/* Service 3 */}
        <div className="service-card" style={{border: 'solid black 3px'}}>
          <h5>Machine Welding</h5>
          <p>
            Precision welding for all types of machinery repairs and
            modifications.
          </p>
        </div>
        {/* Service 4 */}
        <div className="service-card" style={{border: 'solid black 3px'}}>
          <h5>Car Welding</h5>
          <p>
            Expert welding services for automotive repairs and custom work.
          </p>
        </div>
        {/*Service 5*/} 
        <div className="service-card" style={{border: 'solid black 3px'}}>
          <h5>Car Welding</h5>
          <p>
            Expert welding services for automotive repairs and custom work.
          </p>
        </div>
        {/*Service 6*/}
        <div className="service-card" style={{border: 'solid black 3px'}}>
          <h5>Car Welding</h5>
          <p>
            Expert welding services for automotive repairs and custom work.
          </p>
        </div>
      </div>
    </section>
    {/* Customer Reviews Section */}
    <section>
      <h2 className="section-title">Customer Reviews</h2>
      <div className="reviews">
        {/* Testimonial 1 */}
        <div className="testimonial" style={{border: 'solid black 3px'}}>
          <p className="quote">
            "The best welding service I've used, fast and reliable!"
          </p>
          <p className="author">John Doe, Homeowner</p>
        </div>
        {/* Testimonial 2 */}
        <div className="testimonial" style={{border: 'solid black 3px'}}>
          <p className="quote">
            "Excellent customer support and amazing results!"
          </p>
          <p className="author">Jane Smith, Business Owner</p>
        </div>
        {/* Testimonial 3 */}
        <div className="testimonial" style={{border: 'solid black 3px'}}>
          <p className="quote">
            "I highly recommend their services, always on time and top
            quality."
          </p>
          <p className="author">Carlos Martinez, Contractor</p>
        </div>
      </div>
    </section>
  </div>
</div>




    </div>
  )
}

export default Services