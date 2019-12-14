import React from 'react';
import Cards from './components/Cards';
import Detail from './components/Detail';
import contacts from './models/Contacts';
import Empty from './components/Empty';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts,
      detail: contacts[0],
      activeId: '',
      blank: false
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
export default App;
