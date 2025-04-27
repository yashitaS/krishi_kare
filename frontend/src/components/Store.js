// Store.js
import React from "react";
import "./Store.css"; // Create a corresponding CSS file

const Store = () => {
  return (
    <div className="store-container">
      <header className="store-header">
        <h1>Farm Fresh Marketplace</h1>
        <input type="text" placeholder="Search for products..." className="search-input" />
      </header>

      <aside className="store-filters">
        <h3>Filters</h3>
        <ul>
          <li>Categories</li>
          <li>All Categories</li>
          <li>Vegetables</li>
          <li>Grains</li>
        </ul>
      </aside>

      <main className="store-products">
        <div className="product-grid">
          <div className="product-card">
            <img src="potatoes.jpg" alt="Organic Potatoes" />
            <div className="product-info">
              <h4>Organic Potatoes</h4>
              <p>$2.99/kg</p>
              <button>Add</button>
            </div>
          </div>
          <div className="product-card">
            <img src="carrots.jpg" alt="Fresh Carrots" />
            <div className="product-info">
              <h4>Fresh Carrots</h4>
              <p>$1.99/kg</p>
              <button>Add</button>
            </div>
          </div>
          <div className="product-card">
            <img src="rice.jpg" alt="Premium Rice" />
            <div className="product-info">
              <h4>Premium Rice</h4>
              <p>$5.49/kg</p>
              <button>Add</button>
            </div>
          </div>
          <div className="product-card">
            <img src="tomatoes.jpg" alt="Fresh Tomatoes" />
            <div className="product-info">
              <h4>Fresh Tomatoes</h4>
              <p>$1.99/kg</p>
              <button>Add</button>
            </div>
          </div>
          <div className="product-card">
            <img src="banana.jpg" alt="Organic Bananas" />
            <div className="product-info">
              <h4>Fresh Bananas</h4>
              <p>$1.99/kg</p>
              <button>Add</button>
            </div>
          </div>
          <div className="product-card">
            <img src="wheat.jpg" alt="Organic Wheat Flour" />
            <div className="product-info">
              <h4>Organic Wheat Flour</h4>
              <p>$1.99/kg</p>
              <button>Add</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Store;
