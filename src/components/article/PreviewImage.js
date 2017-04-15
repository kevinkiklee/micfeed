import React from 'react';

const PreviewImage = ({ image, alt, link }) => {
  return (
    <div className='PreviewImage'>
      <a href={link} target='_blank'>
        <img src={image}
             alt={alt} />
      </a>
    </div>
  );
};

export default PreviewImage;
