import React from 'react';
import { Link } from 'react-router-dom';

function AddCardButton(props) {
  return (
    <li className='col-12 col-sm-6 col-lg-3'>
      <div className='single-card single-card--new'>
       +                     
      </div> 
      <div className='single-card--hover'>
        <Link
          to={{
            pathname: '/add',
            linkProps: props
          }}                 
        >
          <button
            className='single-card__button single-card__button--add'
            onClick
            >Add</button>
        </Link>
      </div>
    </li>
  )
}
export default AddCardButton;