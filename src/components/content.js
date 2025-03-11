<div>
  import React from "react";
  function Content() 
  return (
  // Slider start
  <div classname="carousel slider container mt-5">
    <div id="carouselExample" classname="carousel slide">
      <div classname="carousel-inner">
        <div classname="carousel-item active">
          <img src=".\assets\1.png" classname="d-block w-100" alt="..." />
        </div>
        <div classname="carousel-item">
          <img src="./assets/1.png" classname="d-block w-100" alt="..." />
        </div>
        <div classname="carousel-item">
          <img src="./assets/3.jpg" classname="d-block w-100" alt="..." />
        </div>
        <div classname="carousel-item">
          <img src="./assets/4.jpg" classname="d-block w-100" alt="..." />
        </div>
        <div classname="carousel-item">
          <img src="./assets/4.jpg" classname="d-block w-100" alt="..." />
        </div>
      </div>
      <button classname="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span classname="carousel-control-prev-icon" aria-hidden="true" />
        <span classname="visually-hidden">Previous</span>
      </button>
      <button classname="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span classname="carousel-control-next-icon" aria-hidden="true" />
        <span classname="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  // Slider end
  );
  
  export default Content;
</div>
