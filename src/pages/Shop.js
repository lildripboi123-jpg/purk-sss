import React, { useState } from 'react';
import './Shop.css';

function Shop() {
  const [filter, setFilter] = useState('all');

  const products = [
    { id: 1, name: 'Classic Logo Hoodie', price: 79.99, category: 'hoodies', image: '🖤' },
    { id: 2, name: 'Oversized T-Shirt', price: 34.99, category: 'tees', image: '🟣' },
    { id: 3, name: 'Track Pants', price: 64.99, category: 'pants', image: '🩶' },
    { id: 4, name: 'Signature Cap', price: 29.99, category: 'accessories', image: '⚫' },
    { id: 5, name: 'Embroidered Hoodie', price: 89.99, category: 'hoodies', image: '🤎' },
    { id: 6, name: 'Vintage Tee', price: 39.99, category: 'tees', image: '⚪' },
    { id: 7, name: 'Cargo Pants', price: 74.99, category: 'pants', image: '🟫' },
    { id: 8, name: 'Beanie', price: 24.99, category: 'accessories', image: '🧶' },
    { id: 9, name: 'Thermal Hoodie', price: 84.99, category: 'hoodies', image: '🟰' },
    { id: 10, name: 'Graphic Tee', price: 44.99, category: 'tees', image: '🎯' },
    { id: 11, name: 'Joggers', price: 59.99, category: 'pants', image: '🧵' },
    { id: 12, name: 'Crossbody Bag', price: 69.99, category: 'accessories', image: '👜' }
  ];

  const categories = ['all', 'hoodies', 'tees', 'pants', 'accessories'];
  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <main className="shop-page">
      <div className="shop-header">
        <h1>Shop</h1>
        <p>Explore our collection of premium streetwear</p>
      </div>

      <div className="container shop-container">
        <div className="filters">
          <h3>Filter by Category</h3>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="products-section">
          <div className="products-count">
            <p>Showing {filteredProducts.length} products</p>
          </div>
          
          <div className="shop-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="shop-product-card">
                <div className="product-image-container">
                  <div className="product-image-large">{product.image}</div>
                  <div className="product-overlay">
                    <button className="btn btn-primary">Quick View</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="category-tag">{product.category}</p>
                  <p className="shop-price">${product.price}</p>
                  <button className="btn btn-secondary full-width">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Shop;
