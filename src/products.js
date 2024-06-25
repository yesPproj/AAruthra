import React from 'react';
import { Link } from 'react-router-dom'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './products.css'; 
import image1 from './H2.jpg'; 
import image2 from './Br2.jpg';
import image3 from './Mk2.jpg';
import image4 from './pvc2.jpg';
import image5 from './W1.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-box">
            <img src={image1} alt="Hall Decoring" />
            <h3>Hall Decoring</h3>
            <p>Living area decoration enhances comfort and style, blending furniture, colors, and accessories to create a welcoming and cohesive space.</p>
            <Link to="/service/Hall-Decoring">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image2} alt="Living Room Decoring" />
            <h3>Living Room Decoring</h3>
            <p>Bedroom decoration prioritizes relaxation, featuring calming colors, cozy textiles, stylish furniture, and personal touches to create a serene sanctuary.</p>
            <Link to="/service/Living-Room">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image3} alt="Modular Kitchen" />
            <h3>Modular Kitchen</h3>
            <p>
            
A modular kitchen offers sleek, customizable design with efficient storage, modern appliances, and easy maintenance, optimizing space and functionality for a streamlined cooking experience.</p>
            <Link to="/service/Modular-Kitchen">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image4} alt="PVC Decoring" />
            <h3>PVC Decoring</h3>
            <p>Interior designs using PVC offer durability and versatility, featuring stylish panels, easy maintenance, and cost-effective solutions for walls and ceilings.</p>
            <Link to="/service/Pvc-Decor">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image5} alt="Aggregates" />
            <h3>Wardrobes & Cupboards</h3>
            <p>Wardrobe and cupboard interior design optimizes storage with customized shelves, drawers, and hanging spaces, combining functionality with aesthetic appeal.</p>
            <Link to="/service/Wardrobes-Cupboards">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
