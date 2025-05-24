import { useState, useEffect } from 'react';

function ImageGallery({ mainImage, thumbnails }) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  // Update selected image when the mainImage prop changes (e.g., switching products)
  useEffect(() => {
    setSelectedImage(mainImage);
  }, [mainImage]);

  return (
    <div className="single-pro-image">
      <img src={selectedImage} alt="Main" id="mainImage" width="100%" />
      <div className="small-img-group">
        {thumbnails.map((thumb, index) => (
          <div key={index} className="small-img-col">
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(thumb)}
              className="small-img"
              width="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
