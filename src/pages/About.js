import React from 'react';
import './About.css';

function About() {
  return (
    <main className="about-page">
      <div className="about-header">
        <h1>About Purk</h1>
        <p>The Story Behind We The Ones</p>
      </div>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>We The Ones</h2>
            <p>
              Purk is more than just a clothing brand—it's a movement. Born from the streets, 
              fueled by creativity, and driven by a community of individuals who refuse to blend in. 
              We create premium streetwear for those who know that style is more than what you wear; 
              it's who you are.
            </p>
          </div>

          <div className="about-mission">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To create authentic streetwear that represents the culture and empowers individuals 
                to express themselves without compromise. We believe in quality, creativity, and community.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To become a global brand that is synonymous with streetwear excellence and cultural 
                relevance. We want to inspire the next generation of trendsetters and creatives.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Promise</h3>
              <p>
                Every piece we create is made with intention. Premium materials, meticulous craftsmanship, 
                and designs that matter. We promise authenticity in everything we do.
              </p>
            </div>
          </div>

          <div className="about-story">
            <h2>The Story</h2>
            <p>
              It started with a simple idea: create clothing that reflects the hustle, the culture, 
              and the uncompromising spirit of the streets. We noticed a gap in the market—brands were 
              either too commercialized or too underground. Purk exists in that sweet spot where 
              authenticity meets accessibility.
            </p>
            <p>
              Every drop, every design, every detail is carefully curated. We listen to our community, 
              we stay true to our values, and we never settle for mediocrity. This is what it means 
              to be one of "We The Ones."
            </p>
          </div>

          <div className="about-values">
            <h2>Our Core Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h4>🎨 Creativity</h4>
                <p>Bold, innovative designs that push boundaries</p>
              </div>
              <div className="value-item">
                <h4>🤝 Community</h4>
                <p>Building genuine connections with our customers</p>
              </div>
              <div className="value-item">
                <h4>⚡ Authenticity</h4>
                <p>Real talk, real products, real movement</p>
              </div>
              <div className="value-item">
                <h4>💎 Quality</h4>
                <p>Premium materials and meticulous craftsmanship</p>
              </div>
              <div className="value-item">
                <h4>🌟 Exclusivity</h4>
                <p>Limited drops and exclusive pieces for our community</p>
              </div>
              <div className="value-item">
                <h4>🚀 Innovation</h4>
                <p>Constantly evolving and staying ahead of trends</p>
              </div>
            </div>
          </div>

          <div className="about-team">
            <h2>The Team</h2>
            <p>
              Behind every design, every drop, every decision is a team of passionate individuals 
              who live and breathe this culture. We're designers, creatives, strategists, and most 
              importantly, we're part of the community we serve.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
