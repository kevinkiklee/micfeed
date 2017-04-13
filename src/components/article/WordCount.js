import React from 'react';

const WordCount = ({ count }) => {
  return (
    <td className='WordCount'>
      <p>{ count }</p>
    </td>
  );
};

export default WordCount;
