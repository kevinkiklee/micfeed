import React from 'react';

const Author = ({ profile }) => {
  const name = `${profile.first_name} ${profile.last_name}`;

  return (
    <td>
      <p>{ name }</p>
    </td>
  );
};

export default Author;
