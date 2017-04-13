import React from 'react';
import moment from 'moment';

const SubmitDate = ({ date }) => {
  return (
    <td className='SubmitDate'>
      <p>{ moment(date).fromNow() }</p>
    </td>
  );
};

export default SubmitDate;
