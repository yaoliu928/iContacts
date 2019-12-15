import React from 'react';
import { Link } from 'react-router-dom';

function AddCardButton () {
  return (
    <li className='col-12 col-sm-6 col-lg-3'>
      <div className='single-card single-card--new'>
        +
      </div>
      <div className='single-card--hover'>
        <Link
          to='/add'
        >
          <button
            className='single-card__button single-card__button--add'
          >Add</button>
        </Link>
      </div>
    </li>
  )
}
export default AddCardButton;