import React from 'react';
import avatar from '../assets/avatars/avatar.png';
import location from '../assets/icons/location.svg';
import edit from '../assets/icons/edit.svg';
import chat from '../assets/icons/chat.svg';
import tick from '../assets/icons/tick.svg';

function Detail() {
  return (
    <section className='detail col-3'>
      <div className='detail__top'>
          <img src={avatar} className='detail__hero' alt='avatar' />
        <h2>Elise Beverley</h2>
        <p className='detail__id'>NMLS #9418074</p>
        <div className='detail__location'>
          <img className='detail__location-icon' src={location} alt='location'/>
          <p className='detail__location-text'>San Francisco, CA</p>
        </div>
        <button className='detail__button'>
          <img src={edit} alt='edit'/>
          <p>Ask for Quote</p>
        </button>
        <button className='detail__button'>
          <img src={chat} alt='chat' />
          <p>Chat</p>
        </button>
      </div>
      <p className='detail__info'>A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.
      </p>
      <div className='detail__language'>
        <h3>THE LANGUAGES I SPEAK:</h3>
        <span>English</span>
        <span>Spanish</span>
      </div>
      <div className='detail__services'>
        <h3>THE SERVICES I OFFER:</h3>
        <ul className='row'>
          <li className='col-6'>
            <img src={tick} alt='tick' />
            <p>Conventional</p>
          </li>
          <li className='col-6'>
            <img src={tick} alt='tick'/>
            <p>Minorities</p>
          </li>
          <li className='col-6'>
            <img src={tick} alt='tick'/>
            <p>Bad Credit</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Detail;