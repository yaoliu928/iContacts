import React from 'react';
import Cards from '../Cards';
import Detail from '../Detail';
import contacts from '../../models/Contacts';
import Empty from '../Empty';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts,
      detail: contacts[0],
      activeId: '',
      blank: false,
      //input:'fefe'
    };
  }
  handleClick = (clickId) => {
    this.setState({
      detail: contacts.find(
        ({ id }) => id === clickId
      ),
      activeId: clickId
    });  
  }
  handleRemove = (clickId) => {
    if (window.confirm("😊Do you want to remove this contact?👩")) {
      contacts.filter(
        ({ id }) => { return (id !== clickId) }
      );

      this.setState((preState) => {
        console.log(clickId);
        if (preState.contacts.length === 1) {
          return { blank: true };
        }
        return {
          contacts: preState.contacts.filter(
            ({ id }) => { return (id !== clickId) }
          ),
          detail:
            clickId === preState.activeId
              ? preState.contacts.filter(
                ({ id }) => { return (id !== clickId) }
              )[0]
              : preState.contacts[1]
        };
      })
    };
  };
  handleChange = (e) => {
    this.setState({
      input:e.target.value
    })
  }

  render() {
    return (
      <div> {
        this.state.blank
          ? <Empty />
          :
            <div className='contain row'>
              <Cards
                contacts={this.state.contacts}
                handleClick={this.handleClick}
                handleRemove={this.handleRemove}
              activeId={this.state.activeId}
              />
              <Detail
                detail={this.state.detail}
            />
           
          </div>
      }
      </div>
    );
  }
}
export default Home;
