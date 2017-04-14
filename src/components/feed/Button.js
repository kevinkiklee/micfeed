import React from 'react';

const Button = ({ type, disabled, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick}>Load More...</button>
  );
};

export default Button;
