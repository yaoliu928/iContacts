import React from 'react';
import Cards from '../Cards';
import Detail from '../Detail';
import Contacts from '../../models/Contacts';
import Empty from '../Empty';
import { remove } from '../../constants/notices';
import { deleteData } from '../../controllers/api';
import { handleDeleteActive, handleActive } from '../../controllers/utils';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: Contacts,
      detail: Contacts[0],
      activeId: Contacts[0].id,
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
    if (window.confirm(remove)) {
      this.setState((preState) => {
        deleteData(Contacts, clickId);
        if (!Contacts.length) {
          return { blank: true };
        }
        return {
          contacts: Contacts,
          activeId: handleActive(Contacts, preState, clickId),
          detail: handleDeleteActive(Contacts, preState, clickId)
        };
      })
    };
  };
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className='contain row'>
          <Cards
            contacts={this.state.contacts}
            handleClick={this.handleClick}
            handleRemove={this.handleRemove}
            activeId={this.state.activeId}
          />{
            this.state.blank
              ? <Empty />
              : <Detail
                detail={this.state.detail}
              />}
        </div>
      </div>
    );
  }
}
export default Home;
