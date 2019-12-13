import React from 'react';
import Cards from './components/Cards';
import Detail from './components/Detail';
import contacts from './models/data';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      detail: {}
    };
  }
  componentDidMount() {
    this.setState({ contacts, detail: contacts[0] });
  }
  handleClick = (clickId) => {
    this.setState({
      detail: contacts.find(
        ({ id } )=> id === clickId
      )
    });
    console.log(this.state.detail);
  }
  render() {
    return (
        <div className='contain row'>
          <Cards
            contacts={this.state.contacts}
            handleClick={this.handleClick}
          />
          <Detail
            detail={this.state.detail}
          />  
        </div>
    );
  } 
}
export default App;
