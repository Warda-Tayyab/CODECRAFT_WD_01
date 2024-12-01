import React from "react";
import pic from '../assets/image.png';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Space Wonders</h1>
      <img src={pic} alt="Galaxy" className="about-image" />
      <p className="about-text">
        Space Wonders was created for enthusiasts who dream of venturing beyond
        Earth. Our mission is to educate, inspire, and connect people with the
        wonders of space. Whether you are a budding astronaut or a casual
        stargazer, we’ve got something for everyone.
      </p>
      <p className="about-text">
        With detailed articles, stunning images, and the latest updates from
        space missions, our platform aims to ignite curiosity and encourage
        exploration.
      </p>
    </div>
  );
};

export default About;
