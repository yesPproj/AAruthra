import React from "react";
import './Aboutpage.css'
import aboutImage from './about.png'; // Import the image
import mKitchen from './M1.jpg';
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
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" /> {/* Use the imported image */}
          </div>
          <h1 className="brandText">Aaruthra Interiors</h1>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
