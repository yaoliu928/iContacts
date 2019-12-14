import React from 'react';

function AddCardButton() {
  return (
    <li className='col-12 col-sm-6 col-lg-3'>
      <div className='single-card single-card--new'>
       +                     
      </div> 
      <div className='single-card--hover'>
        <button
        className='single-card__button single-card__button--add'
        >Add</button>
      </div>
    </li>
  )
}
export default AddCardButton;