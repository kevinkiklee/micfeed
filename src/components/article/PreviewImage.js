import React from 'react';

const PreviewImage = ({ image, alt }) => {
  return (
    <img src={image}
         alt={alt} />
  );
};

export default PreviewImage;
