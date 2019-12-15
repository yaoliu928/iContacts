import React from 'react';
import avatar from '../../assets/avatars/avatar.png';
import location from '../../assets/icons/location.svg';
import slack from '../../assets/logos/slack.svg';
import { handleCardClass } from '../../controllers/utils';

function Card(props) {
  const active = handleCardClass(props);
  const {
    firstName, lastName, nmls, city, state,
  } = props;
  return (
    <li className="col-12 col-sm-6 col-lg-3">
      <div className={`single-card ${active}`}>
        <div>
          <img className="single-card__hero" src={avatar} alt="avatar" />
          <div className="single-card__name">
            <h6>
              {firstName}
              {' '}
              {lastName}
            </h6>
            <p>
NMLS #
              {nmls}
            </p>
          </div>
        </div>
        <div className="single-card__location">
          <img className="single-card__location-icon" src={location} alt="location" />
          <p>
            {city}
,
            {' '}
            {state}
          </p>
          <img className="single-card__location-logo" src={slack} alt="slack" />
        </div>
      </div>
      <div className="single-card--hover">
        <button
          type="button"
          className="single-card__button single-card__button--view"
          onClick={() => { props.handleClick(props.id); }}
        >
view
        </button>
        <button
          type="button"
          className="single-card__button single-card__button--remove"
          onClick={() => { props.handleRemove(props.id); }}
        >
remove
        </button>
      </div>
    </li>
  );
}
export default Card;
