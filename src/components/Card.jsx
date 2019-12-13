import React from 'react';
import avatar from '../assets/avatars/avatar.png';
import location from '../assets/icons/location.svg';
import slack from '../assets/logos/slack.svg';
function Card(props) {
  return (
    <li onClick={() => {
      props.handleClick(props.id);
    console.log(props.id);
    }} className='col-12 col-sm-6 col-lg-3'>
      <div className='single-card'>
        <div >
          <img className='single-card__hero' src={avatar} alt='avatar' />
            <div className='single-card__name'>
              <h6>{props.name}
              </h6>
              <p>NMLS #{props.nmls}
              </p>
            </div>
        </div>
        <div className='single-card__location'>
          <img className='single-card__location-icon' src={location} alt='location'/>
          <p>{props.city}, {props.state}</p>
          <img className='single-card__location-logo' src={slack} alt='slack'/>
        </div>
      </div>
    </li>
  )
}
export default Card;