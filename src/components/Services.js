import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Services.css";

const Services = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8082/booking/all")
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

const handleLogout = async () => {
  const userEmail = localStorage.getItem("userEmail");

  if (!userEmail) {
    console.error("No user email found in local storage.");
    return;
  }

  try {
    console.log("Attempting logout...");
    const response = await fetch("http://localhost:8082/api/v1/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail }),
    });

    console.log("Response status:", response.status);

    if (response.ok) {
      localStorage.clear(); // Clear all local storage
      alert("Logout successful!");
      navigate("/", { replace: true }); // Ensure redirection to home page
    } else {
      const responseData = await response.json();
      console.error("Logout failed:", responseData);
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};



  
  
  return (
    <div className="container">
      <div className="header">
        <h1>Explore Our Exclusive Collection of Products</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      {showPopup && (
        <div className="popup">
          <p>Product Added to Cart!</p>
        </div>
      )}

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-cards">
          {articles.length === 0 ? (
            <p>No products found.</p>
          ) : (
            articles.map((article) => (
              <div className="card" key={article.id}>
                <img src={article.image} alt={article.name} className="product-image" />
                <div className="card-content">
                  <h5>{article.name}</h5>
                  <p><strong>Description:</strong> {article.description}</p>
                  <p><strong>Price:</strong> ${article.price}</p>
                  <p><strong>Make Company:</strong> {article.makeCompany}</p>
                  <p><strong>Category:</strong> {article.category ? article.category.name : 'N/A'}</p>
                  <p><strong>Category Type:</strong> {article.category?.categoryType || 'N/A'}</p>
                  <p><strong>Created Date:</strong> {new Date(article.createdDate).toLocaleDateString()}</p>
                  <p><strong>Created By:</strong> {article.createdBy}</p>
                  <p><strong>PDF:</strong>
                    <a href={article.pdf} target="_blank" rel="noopener noreferrer" className="button">Download PDF</a>
                  </p>
                  <button onClick={() => handleAddToCart(article)} className="btn btn-primary">Buy</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
