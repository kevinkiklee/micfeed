import React from 'react';

import spinner from '../../assets/loading.svg';
import '../../styles/Feed/Spinner.css';

const Spinner = () => {
  return (
    <div className='Spinner'>
      <img className='spinnerImage'
           src={spinner}
           alt='Loading Spinner'/>
      Loading Articles
    </div>
  );
};

export default Spinner;
