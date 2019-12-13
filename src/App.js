import React from 'react';
import Cards from './components/Cards';
import Detail from './components/Detail';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  render() {
    return (
        <div className='row '>
          <Cards />
          <Detail />  
        </div>
    );
  } 
}

export default App;
