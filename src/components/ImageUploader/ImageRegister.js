import React, { useState } from 'react';
import styled from 'styled-components';
import ImageInput from './ImageInput';
import { hidden } from '../Style/Mixin';

const ImageRegisterStyle = styled.div`
  input {
    ${hidden}
  }
  label {
    display: inline-block;
    padding: 10px;
    border: 1px solid #ddd;
    font-size: 12px;
  }
`;

const ImageRegister = () => {
  const [images, setImages] = useState([]);

  const handleChange = (changeImages) => {
    setImages(prevImages => ([...prevImages, ...changeImages]));
  };

  return (
    <ImageRegisterStyle>
      <ImageInput id="input_img" label="이미지 추가" onChange={handleChange} />
      {images.length > 0 && images.map(({ file, meta }) => (
        <div key={file.name}>
          <img src={URL.createObjectURL(file)} alt={file.name} />
          <p>{JSON.stringify(meta, null, 4)}</p>
        </div>
      ))}
    </ImageRegisterStyle>
  );
};

export default ImageRegister;
