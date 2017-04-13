import React from 'react';

const PreviewImage = ({ image, alt }) => {
  return (
    <div className='PreviewImage'>
      <img src={image}
           alt={alt} />
    </div>
  );
};

export default PreviewImage;
