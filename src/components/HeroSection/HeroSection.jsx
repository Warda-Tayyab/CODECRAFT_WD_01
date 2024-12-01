import React from "react";
import "./HeroSection.css"; // Optional CSS for styling
import picture from '../../assets/space.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to Space Wonders</h1>
      <p>Explore the wonders of the universe and discover what lies beyond our planet. Join us on a journey through the stars!</p>
      <img src={picture} alt="Earth in space" className="hero-image" />
    </div>
  );
};

export default HeroSection;
