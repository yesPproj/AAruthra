import React, { useState } from 'react';
import './ImageGallery.css'; // Import the CSS file for styling

// Import images dynamically
const images = [
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
  { src: require('./hollow.png'), alt: 'Image 1' },
];

const ImageGallery = () => {
  const [visibleImages, setVisibleImages] = useState(8);

  const showMoreImages = () => {
    setVisibleImages(prevVisibleImages => Math.min(prevVisibleImages + 4, images.length));
  };

  return (
    <section className="image-gallery">
      <div className="container">
        <h2 className="gallery-heading">Our Works</h2> {/* Add heading */}
        <div className="gallery-grid">
          {images.slice(0, visibleImages).map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        {visibleImages < images.length && (
          <button className="show-more-button" onClick={showMoreImages}>
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
