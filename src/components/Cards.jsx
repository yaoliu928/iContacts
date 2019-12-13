import React from 'react';
import avatar from '../assets/avatars/avatar.png';
import location from '../assets/icons/location.svg';
import google from '../assets/logos/google.svg';

function Cards() {
  return (
    <section className='col-9 cards'>
      <ul className='row'>
        <li className='col-3'>
          <div className='single-card'>
            <div >
              <img className='single-card__hero' src={avatar} alt='avatar' />
              <div className='single-card__name'>
                <h6>Elise Beverley
                </h6>
                <p>NMLS #1028020
                </p>
              </div>
            </div>
            <div>
              <div className='single-card__location'>
                <img className='single-card__location-icon' src={location} alt='location'/>
                <p>San Francisco, CA</p>
                <img className='single-card__location-logo' src={google} alt='google'/>
              </div>
            </div>
          </div>
        </li>
        <li className='col-3'>
          <div className='single-card'>
            <div >
              <img className='single-card__hero' src={avatar} alt='avatar' />
              <div className='single-card__name'>
                <h6>Elise Beverley
                </h6>
                <p>NMLS #1028020
                </p>
              </div>
            </div>
            <div>
              <div className='single-card__location'>
                <img className='single-card__location-icon' src={location} alt='location'/>
                <p>San Francisco, CA</p>
                <img className='single-card__location-logo' src={google} alt='google'/>
              </div>
            </div>
          </div>
        </li>
        <li className='col-3'>
        <div className='single-card'>
          <div >
            <img className='single-card__hero' src={avatar} alt='avatar' />
            <div className='single-card__name'>
              <h6>Elise Beverley
              </h6>
              <p>NMLS #1028020
              </p>
            </div>
          </div>
          <div>
            <div className='single-card__location'>
              <img className='single-card__location-icon' src={location} alt='location'/>
              <p>San Francisco, CA</p>
              <img className='single-card__location-logo' src={google} alt='google'/>
            </div>
          </div>
        </div>
      </li>
      <li className='col-3'>
      <div className='single-card'>
        <div >
          <img className='single-card__hero' src={avatar} alt='avatar' />
          <div className='single-card__name'>
            <h6>Elise Beverley
            </h6>
            <p>NMLS #1028020
            </p>
          </div>
        </div>
        <div>
          <div className='single-card__location'>
            <img className='single-card__location-icon' src={location} alt='location'/>
            <p>San Francisco, CA</p>
            <img className='single-card__location-logo' src={google} alt='google'/>
          </div>
        </div>
      </div>
    </li>
  
      </ul>
    </section>
  )
}
export default Cards;