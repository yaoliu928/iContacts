import React from 'react';
import avatar from '../assets/avatars/avatar.png';
import location from '../assets/icons/location.svg';
import edit from '../assets/icons/edit.svg';
import chat from '../assets/icons/chat.svg';
import Language from './Language';
import Service from './Service';

function Detail(props) {
  const {
    name,
    nmls,
    city,
    state,
    info,
    languages,
    services
  } = props.detail;
  return (   
    <section className='detail col-12 col-xl-3'>
      <div className='detail__top'>
          <img src={avatar} className='detail__hero' alt='avatar' />
        <h2>{name}</h2>
        <p className='detail__id'>NMLS #{nmls}</p>
        <div className='detail__location'>
          <img className='detail__location-icon' src={location} alt='location'/>
          <p className='detail__location-text'>{city}, {state}</p>
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
      <p className='detail__info'>{info}
      </p>
      <div className='detail__language'>
        <h3>THE LANGUAGES I SPEAK:</h3>
        <ul>
          {
            languages.map((language, index) => {
              return (
                <Language
                key={index}
                language={language}
                />
              )
            })
          }
        </ul>
      </div>
      <div className='detail__services'>
        <h3>THE SERVICES I OFFER:</h3>
        <ul className='row'>
          {
            services.map(
              (service, index) => {
                return (
                  <Service
                    key={index}
                    service={service}
                  />
                )
              }
            )
          }
          {
            // <li className='col-6'>
            //   <img src={tick} alt='tick' />
            //   <p>Conventional</p>
            // </li>
            // <li className='col-6'>
            //   <img src={tick} alt='tick' />
            //   <p>Minorities</p>
            // </li>
            // <li className='col-6'>
            //   <img src={tick} alt='tick' />
            //   <p>Bad Credit</p>
            // </li>
          }
        </ul>
      </div>
    </section>
  )
}
export default Detail;