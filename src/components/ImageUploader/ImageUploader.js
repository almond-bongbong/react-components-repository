import React, { useState } from 'react';
import loadImage from 'blueimp-load-image';

const imageLoadOptions = {
  maxWidth: 1200,
  orientation: true,
};

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const handleImage = (e) => {
    const { files } = e.target;

    Array.from(files).forEach((file) => {
      loadImage(file, (img, meta) => {
        const { name, type, lastModified } = file;

        console.log('meta', meta.exif.getAll());

        img.toBlob((blob) => {
          const convertedFile = new File([blob], name, { type, lastModified });
          setImages(prevImages => ([...prevImages, convertedFile]));
        }, type);
      }, imageLoadOptions);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleImage} multiple />
      {images.length > 0 && images.map(image => (
        <img key={image.name} src={URL.createObjectURL(image)} alt="" />
      ))}
    </div>
  );
};

export default ImageUploader;
