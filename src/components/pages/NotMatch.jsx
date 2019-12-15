import React from 'react';
import { notFound } from '../../constants/notices';
function NotMatch() {
  return (
    <div className='notice'>
    <div >{ notFound }</div>
  </div>)
}

export default NotMatch;