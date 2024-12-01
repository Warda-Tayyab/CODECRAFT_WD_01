import React from "react";
import pic from '../assets/th.jpg';
import './Service.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <div className="image-container">
        <img src={pic} alt="Astronaut in space" className="services-image" />
      </div>
      <p className="services-description">
      At Space Wonders, we offer a diverse range of services designed for all enthusiasts who share a passion for the wonders of space.
      </p>
      <ul className="services-list">
        <li>
          <strong>Stargazing Guides:</strong> Learn how to identify constellations and planets.
        </li>
        <li>
          <strong>Space News:</strong> Stay updated with discoveries and ongoing space missions.
        </li>
        <li>
          <strong>Educational Content:</strong> Dive deep into detailed articles and infographics.
        </li>
        <li>
          <strong>Photo Galleries:</strong> Explore stunning images of space phenomena.
        </li>
        <li>
          <strong>Community Forums:</strong> Connect with other space enthusiasts and share your thoughts.
        </li>
      </ul>
    </div>
  );
};

export default Services;
