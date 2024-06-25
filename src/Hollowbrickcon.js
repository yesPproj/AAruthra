import React from 'react';
import './HollowBricks.css'; // Import CSS file for styling
// import hollowBricksImage from './hollow-bricks.jpg'; // Import image for hollow bricks

const HollowBricksInfo = () => {
  return (
    <div className="hollow-bricks-info">
      <h2>Hall Decoring</h2>
      <p>
      A modular living hall features a flexible and customizable design approach, utilizing pre-fabricated units for furniture and decor. This allows for easy reconfiguration and adaptation to various spaces and styles. Emphasizing functionality and aesthetics, modular living halls combine contemporary design with practical storage solutions to create a versatile and harmonious living area.
      </p>
      {/* <img src={hollowBricksImage} alt="Hollow Bricks" /> */}
      <h3>Benefits of Hall Decoring</h3>
      <p>
        Hall Decoring offer several benefits:
      </p>
      <ul>
        <li>Customization: Easily tailored to individual tastes and space requirements, ensuring a perfect fit for any home.</li>
        <li>Flexibility: Components can be reconfigured or replaced without major renovations, accommodating changing needs and trends.</li>
        <li>Efficiency: Streamlined installation process reduces time and labor costs.</li>
        <li>Aesthetic Appeal: Modern designs and finishes enhance the visual appeal of the living area.</li>
        <li>Space Optimization: Smart storage solutions maximize the use of available space, keeping the area organized and clutter-free.</li>
      </ul>
      <h3>Applications</h3>
      <p>
        Hall Decoring Usage:
      </p>
      <ul>
        <li>Residential Spaces: Perfect for apartments and houses, providing adaptable solutions for living rooms, family rooms, and entertainment areas.</li>
        <li>Small Homes: Ideal for compact spaces, utilizing modular furniture to maximize functionality and storage.</li>
        <li>Office Lounges: Enhances comfort and style in corporate settings, offering flexible and professional lounge areas.</li>
        <li>Hospitality: Used in hotels and serviced apartments to offer stylish, practical, and easy-to-maintain living spaces for guests.</li>
        <li>Commercial Spaces: Suitable for waiting areas, showrooms, and retail environments, creating welcoming and versatile seating and display areas.</li>
      </ul>
    </div>
  );
}

export default HollowBricksInfo;
