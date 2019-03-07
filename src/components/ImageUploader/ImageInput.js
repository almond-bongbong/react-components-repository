import React from 'react';
import PropTypes from 'prop-types';
import loadImage from 'blueimp-load-image';

const imageLoadOptions = {
  maxWidth: 1200,
  orientation: true,
};

const ImageInput = ({ id, label, onChange }) => {
  const handleImage = (e) => {
    const { files } = e.target;
    const images = [];

    Array.from(files).forEach((file, i) => {
      loadImage(file, (img, meta) => {
        const { name, type, lastModified } = file;

        img.toBlob((blob) => {
          const convertedFile = new File([blob], name, { type, lastModified });

          images.push({ file: convertedFile, meta: meta.exif.getAll() });
          if (i === files.length - 1 && onChange instanceof Function) onChange(images);
        }, type);
      }, imageLoadOptions);
    });
  };

  return (
    <div>
      <label htmlFor={id}>
        <input
          id={id}
          type="file"
          onChange={handleImage}
          multiple
          accept="image/*"
        />
        {label}
      </label>
    </div>
  );
};

ImageInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func,
};

ImageInput.defaultProps = {
  id: 'image_input',
  label: null,
  onChange: null,
};

export default ImageInput;
