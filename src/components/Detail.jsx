import React from 'react';
import avatar from '../assets/avatars/avatar.png';
import location from '../assets/icons/location.svg';

function Detail() {
  return (
    <section className='col-3 detail'>
      <div>
        <img className='detail__hero'/>
        <h2>Elise Beverley</h2>
        <p>NMLS #9418074</p>
        <div>
        <img className='single-card__location-icon' src={location} alt='location'/>
                <p>San Francisco, CA</p>
        </div>
        <button></button>
        <button></button>
      </div>
      <p>A loan officer is a representative of a bank,credits union,or other financial institutions who finds and assists borrowers in acquiring loans. Loan officers can work with a wide variety of lending products for both consumers and businesses.
      </p>
      <div>
        <h3>THE LANGUAGES I SPEAK:</h3>
        <span>English</span>
        <span>Spanish</span>
      </div>
      <div>
        <h3>THE SERVICES I OFFER:</h3>
        <ul>
          <li>
            <img />
            <p>Conventional</p>
          </li>
          <li>
            <img />
            <p>Minorities</p>
          </li>
          <li>
            <img />
            <p>Bad Credit</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Detail;