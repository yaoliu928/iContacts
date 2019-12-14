import React from 'react';
import tick from '../assets/icons/tick.svg';

function Service(props) {
  return (
    <li className='col-6'>
      <img src={tick} alt='tick' />
      <p>{props.service}</p>
    </li>
  )
}
export default Service;