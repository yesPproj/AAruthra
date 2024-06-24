import React from 'react';
import { Link } from 'react-router-dom'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './products.css'; 
import image1 from './hollow.png'; 
import image2 from './flyash.png';
import image3 from './interlock.png';
import image4 from './solid.png';
import image5 from './aggre.png';

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
            <img src={image1} alt="Hollow Bricks" />
            <h3>Hollow Bricks</h3>
            <p>Experience the lightweight and thermal insulation benefits of hollow concrete blocks for versatile construction applications.</p>
            <Link to="/service/Hollow-brick">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image2} alt="Flyash Bricks" />
            <h3>Flyash Bricks</h3>
            <p>Discover eco-friendly construction solutions with superior strength and cost-effectiveness, using fly ash bricks.</p>
            <Link to="/service/Flyash-brick">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image3} alt="Interlock Bricks" />
            <h3>Interlock Bricks</h3>
            <p>Choose interlocking concrete pavers for easy installation, remarkable durability, and aesthetic appeal in your projects.</p>
            <Link to="/service/InterLocking-brick">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image4} alt="Solid Bricks" />
            <h3>Solid Bricks</h3>
            <p>Utilize the robustness and load-bearing capacity of solid bricks to ensure stability and strength in your construction.</p>
            <Link to="/service/Solid-brick">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image5} alt="Aggregates" />
            <h3>Aggregates</h3>
            <p>Integrate essential components like sand, gravel, and crushed stone for foundational strength and durability in construction.</p>
            <Link to="/service/Aggregates">
              <button className="more-button">More</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
