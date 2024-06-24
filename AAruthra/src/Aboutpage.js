import React from "react";
import './Aboutpage.css'
import aboutImage from './about.png'; // Import the image

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Aaruthra Interior work was established in 2011 and has successfully completed almost 13 years in interior works. We are doing following types of interior works:
            </p>
            <ul>
              <li>Modular Kitchen</li>
              <li>Wardrobe</li>
              <li>UPVC Cupboards</li>
              <li>Wooden Cupboards</li>
              <li>False Ceiling</li>
              <li>Aluminum Partition</li>
            </ul>
            <p>
              Working by residence, Shops, Showrooms and Offices also. We are very prompt and on time in our services. Our working people are 20 members, our Show Room in Erode.
            </p>
            <p>
              <b>Contact Us</b><br />
              Show Room - No. 136,<br />
              Nasiyanur Main Road,<br />
              Veerappampalayam Privu,<br />
              Erode - 638107.
            </p>
            <h4>UPVC Doors and Cupboards</h4>
            <p>
              UPVC cupboards are specifically designed to provide extra comfort. They are very durable and resistant to deterioration. We offer our range of UPVC cupboards in diverse sizes, colors, dimensions and also customize them according to the requirements of our clients.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" /> {/* Use the imported image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
