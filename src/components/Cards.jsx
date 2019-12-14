import React from 'react';
import Card from './Card';

function Cards(props) {
  return (
    <section className='cards col-12 col-xl-9'>
      <ul className='row'>
        {
          props.contacts.map(contact => {
            return (
              <Card
                key={contact.id}
                id={contact.id}
                name={contact.name}
                nmls={contact.nmls}
                city={contact.city}
                state={contact.state}
                handleClick={props.handleClick}
                activeId={props.activeId}
              />
            )
          })
        }
        
      </ul>
    </section>
  )
}
export default Cards;