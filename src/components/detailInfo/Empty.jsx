import React from 'react';
import santa from '../../assets/icons/santa.svg';

function Empty() {
  return (
    <section className='col-12 col-xl-3 empty'>
      <img src={santa} alt='santa' />
    </section>)
}

export default Empty;