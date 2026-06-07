import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <h1 className="hero-title">PURK</h1>
          <p className="hero-subtitle">We The Ones</p>
          <p className="hero-description">Premium streetwear for the culture. Express yourself.</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-background">
          <div className="hero-glow"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-products">
        <div className="container">
          <h2 className="section-title">Featured Collection</h2>
          <div className="products-grid">
            {[
              {
                id: 1,
                name: 'Classic Logo Hoodie',
                price: '$79.99',
                image: '🖤',
                color: 'Black'
              },
              {
                id: 2,
                name: 'Oversized T-Shirt',
                price: '$34.99',
                image: '🟣',
                color: 'Purple'
              },
              {
                id: 3,
                name: 'Track Pants',
                price: '$64.99',
                image: '🩶',
                color: 'Gray'
              },
              {
                id: 4,
                name: 'Signature Cap',
                price: '$29.99',
                image: '⚫',
                color: 'Black'
              }
            ].map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3>{product.name}</h3>
                <p className="product-color">{product.color}</p>
                <p className="product-price">{product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Creative</h3>
              <p>Bold designs that push boundaries and challenge the norm.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Community</h3>
              <p>We're building a community of like-minded individuals who get it.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Authentic</h3>
              <p>Real quality, real culture, real movement. No compromises.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Exclusive</h3>
              <p>Limited drops and exclusive pieces for the ones who know.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <h2>Join The Movement</h2>
          <p>Be part of something bigger. Subscribe to get early access to new drops and exclusive offers.</p>
          <form className="cta-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Join Now</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
