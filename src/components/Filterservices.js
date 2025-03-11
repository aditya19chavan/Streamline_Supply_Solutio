import React, { useState } from "react";

function Filterservices() {
  const productList = [
    {
      name: "LED Bulb",
      category: "electrical",
      price: 200,
      brand: "Phillips",
      material: "plastic",
      usage: "indoor",
    },
    {
      name: "Water Tap",
      category: "plumbing",
      price: 100,
      brand: "Jaquar",
      material: "metal",
      usage: "bathroom",
    },
    {
      name: "Ceramic Tile",
      category: "flooring",
      price: 500,
      brand: "Kajaria",
      material: "ceramic",
      usage: "indoor",
    },
    {
      name: "Wall Paint",
      category: "paints",
      price: 300,
      brand: "Asian Paints",
      material: "liquid",
      usage: "indoor",
    },
    {
      name: "Drill Machine",
      category: "tools",
      price: 1500,
      brand: "Bosch",
      material: "metal",
      usage: "outdoor",
    },
    {
      name: "LED Tube Light",
      category: "electrical",
      price: 200,
      brand: "Phillips",
      material: "plastic",
      usage: "indoor",
    },
    {
      name: "LED TV",
      category: "electrical",
      price: 20000,
      brand: "Sharp",
      material: "plastic",
      usage: "indoor",
    },
    {
      name: "Bathroom Tile",
      category: "flooring",
      price: 800,
      brand: "Kajaria",
      material: "ceramic",
      usage: "indoor",
    },
    {
      name: "Basin",
      category: "plumbing",
      price: 2000,
      brand: "XYZ",
      material: "ceramic",
      usage: "bathroom",
    },
  ];

  const [filters, setFilters] = useState({
    category: "all",
    price: 5000,
    brand: "",
    material: "all",
    usage: "all",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name === "price" ? parseInt(value, 10) : value,
    }));
  };

  const filteredProducts = productList.filter((product) => {
    return (
      (filters.category === "all" || product.category === filters.category) &&
      product.price <= filters.price &&
      (filters.brand === "" ||
        product.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (filters.material === "all" || product.material === filters.material) &&
      (filters.usage === "all" || product.usage === filters.usage)
    );
  });

  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <h1 style={styles.navbarTitle}>Product Filter App</h1>
      </header>
      <main style={styles.main}>
        <aside style={styles.filters}>
          <h2 style={styles.filterTitle}>Filter Products</h2>
          <form>
            <div style={styles.filterGroup}>
              <label style={styles.label}>Category:</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                style={styles.input}
              >
                <option value="all">All</option>
                <option value="electrical">Electrical Fittings</option>
                <option value="plumbing">Plumbing</option>
                <option value="flooring">Flooring</option>
                <option value="paints">Paints & Coatings</option>
                <option value="tools">Tools & Equipment</option>
              </select>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.label}>Price Range:</label>
              <input
                type="range"
                name="price"
                min="0"
                max="5000"
                step="100"
                value={filters.price}
                onChange={handleFilterChange}
                style={styles.range}
              />
              <span style={styles.priceText}>₹0 - ₹{filters.price}</span>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.label}>Brand:</label>
              <input
                type="text"
                name="brand"
                placeholder="Enter brand name"
                value={filters.brand}
                onChange={handleFilterChange}
                style={styles.input}
              />
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.label}>Material:</label>
              <select
                name="material"
                value={filters.material}
                onChange={handleFilterChange}
                style={styles.input}
              >
                <option value="all">All</option>
                <option value="metal">Metal</option>
                <option value="plastic">Plastic</option>
                <option value="ceramic">Ceramic</option>
              </select>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.label}>Usage:</label>
              <select
                name="usage"
                value={filters.usage}
                onChange={handleFilterChange}
                style={styles.input}
              >
                <option value="all">All</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
                <option value="bathroom">Bathroom</option>
              </select>
            </div>
          </form>
        </aside>
        <section style={styles.products}>
          <h2 style={styles.productListTitle}>Product List</h2>
          <div style={styles.productList}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div key={index} style={styles.productItem}>
                  <h3 style={styles.productTitle}>{product.name}</h3>
                  <p>Category: {product.category}</p>
                  <p>Price: ₹{product.price}</p>
                  <p>Brand: {product.brand}</p>
                  <p>Material: {product.material}</p>
                  <p>Usage: {product.usage}</p>
                </div>
              ))
            ) : (
              <p style={styles.noProducts}>No products match your filters.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F9EDD7", // Updated background color
    color: "#333",
    margin: "0",
    minHeight: "100vh", // Ensures it covers the full height of the viewport
  },
  navbar: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "15px 20px",
    textAlign: "center",
  },
  navbarTitle: {
    margin: "0",
    fontSize: "24px",
    fontWeight: "bold",
  },
  main: {
    display: "flex",
    margin: "40px auto",
    gap: "30px",
    maxWidth: "1200px",
  },
  filters: {
    flex: "1",
    padding: "25px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    border: "1px solid #ddd",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  filterTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: "20px",
  },
  filterGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    color: "#555",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginTop: "6px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "#fafafa",
  },
  range: {
    width: "100%",
    marginTop: "10px",
  },
  priceText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#4CAF50",
  },
  products: {
    flex: "3",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  productListTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  productList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  productItem: {
    padding: "20px",
    border: "2px solid #4CAF50",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "solidrgba(64, 124, 66, 0.85)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  productTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#4CAF50",
    marginBottom: "10px",
  },
  noProducts: {
    textAlign: "center",
    color: "#888",
    fontSize: "18px",
  },
};

export default Filterservices;