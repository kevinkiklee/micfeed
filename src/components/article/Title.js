import React from 'react';

const Title = ({ title, link }) => {
  return (
    <a href={link} target='_blank'>
      <h2 className='Title'>{ title }</h2>
    </a>
  );
};

export default Title;
