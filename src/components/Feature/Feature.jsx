import React from "react";
import "./Feature.css"; // Optional CSS for styling

const Features = () => {
  return (
    <div className="features-section">
      <h2>Our Key Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Interactive Star Maps</h3>
          <p>Explore constellations and planets in real-time with our interactive tools.</p>
        </div>
        <div className="feature-item">
          <h3>Space Mission Updates</h3>
          <p>Follow live updates from NASA, SpaceX, and other space exploration agencies.</p>
        </div>
        <div className="feature-item">
          <h3>Personalized Space News</h3>
          <p>Get curated articles and updates based on your interests.</p>
        </div>
        <div className="feature-item">
          <h3>Exclusive Member Events</h3>
          <p>Join stargazing events and workshops hosted by space experts.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
