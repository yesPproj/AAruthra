import React from "react";
import './About.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>Who we are ?</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Established in 2011, Aaruthra Interior Work has been at the forefront of interior design and renovation services for over a decade. Our unwavering commitment to excellence and innovation has enabled us to bring our clients' visions to life across a wide range of projects.
            </p>
            <p>
              At Aaruthra Interior Work, we understand the importance of creating spaces that are both functional and aesthetically pleasing. Our services extend to residences, shops, showrooms, and offices, ensuring that each project is tailored to meet the unique needs and preferences of our clients.
            </p>
          
            <p>
              Our team of 20 skilled professionals is dedicated to delivering exceptional results on time. We pride ourselves on our punctuality and commitment to quality. Operating from our showroom in Erode, we provide personalized service to ensure our clients' complete satisfaction.
            </p>
            <p>
              With a focus on innovation and customer satisfaction, Aaruthra Interior Work is your trusted partner for all your interior design and renovation needs. We look forward to helping you create spaces that inspire and delight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
