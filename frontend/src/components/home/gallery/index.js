import React, { useState } from 'react';
import './gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'image1.webp' },
    { src: 'image2.webp' },
    { src: 'image3.webp' },
    { src: 'image4.webp' },
    { src: 'image5.webp' },
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery w-full">
      <h2 className='text-2xl text-center font-bold py-5'>Galeria</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={`/photos/${image.src}`}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="zoom-overlay">
          <img src={`/photos/${selectedImage}`} alt="Zoomed Image" />
          <button  className="btn btn-black btn-rounded-full" onClick={handleCloseZoom}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;