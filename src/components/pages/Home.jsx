import React from 'react';
import Cards from '../Cards';
import Detail from '../Detail';
import Contacts from '../../models/Contacts';
import Empty from '../Empty';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: Contacts,
      detail: Contacts[0],
      activeId: '',
      blank: false,
    };
  }
  handleClick = (clickId) => {
    this.setState({
      detail: Contacts.find(
        ({ id }) => id === clickId
      ),
      activeId: clickId
    });  
  }
  handleRemove = (clickId) => {
    if (window.confirm("😊Do you want to remove this contact?👩")) {
      this.setState((preState) => {
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
