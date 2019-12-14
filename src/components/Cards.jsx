import React from 'react';
import Card from './Card';
import AddCardButton from './AddCardButton';

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
                firstName={contact.firstName}
                lastName={contact.lastName}
                nmls={contact.nmls}
                city={contact.city}
                state={contact.state}
                activeId={props.activeId}
                handleClick={props.handleClick}
                handleRemove={props.handleRemove}
                
              />
            )
          })
        }
        <AddCardButton
          //handleChange={props.handleChange}
          //input={props.input}
        />
      </ul>
    </section>
  )
}
export default Cards;