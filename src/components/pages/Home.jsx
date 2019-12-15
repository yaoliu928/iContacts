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
        Contacts.splice(Contacts.findIndex(({ id }) => id === clickId), 1);
        if (!Contacts.length) {
          return { blank: true };
        }
        return {
          contacts: Contacts,
          detail:
            clickId === preState.activeId
              ? Contacts[0]
              : preState.detail
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
