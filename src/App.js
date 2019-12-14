import React from 'react';
import Cards from './components/Cards';
import Detail from './components/Detail';
import contacts from './models/data';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      detail: {},
      activeId: ''
    };
  }
  componentDidMount() {
    this.setState({
      contacts,
      detail: contacts[1]
    });
  }
  handleClick = (clickId) => {
    this.setState({
      detail: contacts.find(
        ({ id } )=> id === clickId
      ),
      activeId: clickId
    });
    console.log(this.state.detail);
  }
  render() {
    return (
        <div className='contain row'>
          <Cards
            contacts={this.state.contacts}
            handleClick={this.handleClick}
            activeId={this.state.activeId}
          />
          <Detail
          detail={this.state.detail}
          languages={this.state.detail.languages}
          
          />  
        </div>
    );
  } 
}
export default App;
