import React from 'react';
import Contacts from '../../models/Contacts';
import uuid from 'uuid/v1';
export default class AddContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      nmls: '',
      city: '',
      state: '',
      info: '',
      languages: [],
      services: [],
      english: false,
      chinese: false,
      spanish: false,
      french: false,
      fapanese: false,
      russian: false,
      italian: false,
      german: false,
      lowIncome: false,
      minorities: false,
      doctorsHome: false,
      moveUpBuyers: false,
      firstHomeBuyers: false,
      nonQmMortgage: false,
      vALoans: false,
      badCredit: false,
      conventional: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLanguage = (event) => {
    event.persist();
    // console.log(this.state);
    this.setState((preState) => {
      return {
        ...preState,
        [event.target.name]: !preState[event.target.name],
        languages:
          !preState[event.target.name]
            ?
            preState.languages.concat(event.target.value)
            :
            preState.languages.filter(
              (element) => element !== event.target.value
            ),
        id: uuid()
      }
    })
  }

  handleService = (event) => {
    event.persist();
    this.setState((preState) => {
      return {
        ...preState,
        [event.target.name]: !preState[event.target.name],
        services:
          !preState[event.target.name]
            ?
            preState.services.concat(event.target.value)
            :
            preState.services.filter(
              (element) => element !== event.target.value
            ),
        id: uuid()
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    Contacts.push(this.state); 
    this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <form className='contain form-container' onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <div className='col-md-3 mb-3'>
              <label >First name</label>
              <input onChange={this.handleChange} name="firstName" value={this.state.firstName} type='text' className='form-control' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >Last name</label>
              <input
                onChange={this.handleChange} name="lastName" value={this.state.lastName}
                type='text' className='form-control' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >City</label>
              <input
                onChange={this.handleChange} name="city" value={this.state.city}
                type='text' className='form-control' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >State</label>
              <input
                onChange={this.handleChange} name="state" value={this.state.state}
                type='text' className='form-control' required />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-3 mb-3'>
              <label >NMLS</label>
              <input
                onChange={this.handleChange} name="nmls" value={this.state.nmls}
                type='text' className='form-control' required />
            </div>
            <div className='col-md-9 mb-3'>
              <label >Description</label>
              <textarea
                onChange={this.handleChange} name="info" value={this.state.info}
                className="form-control" rows="3" required></textarea>
            </div>
          </div>
          <div className='form-row'>
            <label className='col-md-12 mb-3'>Languages :</label>
          </div>
          <div className='form-row'>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='english'
                value='English'
                onChange={this.handleLanguage}
              />
              <label className='form-check-label' >English</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='chinese'
                value='Chinese'
                onChange={this.handleLanguage} />
              <label className='form-check-label' >Chinese</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='spanish'
                value='Spanish'
                onChange={this.handleLanguage}
              />
              <label className='form-check-label' >Spanish</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='french'
                value='French'
                onChange={this.handleLanguage}
              />
              <label className='form-check-label' >French</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='japanese'
                value='Japanese'
                onChange={this.handleLanguage} />
              <label className='form-check-label' >Japanese</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='russian'
                value='Russian'
                onChange={this.handleLanguage} />
              <label className='form-check-label' >Russian</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='italian'
                value='Italian'
                onChange={this.handleLanguage} />
              <label className='form-check-label' >Italian</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='german'
                value='German'
                onChange={this.handleLanguage} />
              <label className='form-check-label' >German</label>
            </div>
          </div>
          <div className='form-row'>
            <label className='col-md-12 mb-3'>Services :</label>
            <div className='form-check form-check-inline col-md-2 mb-3  '>
              <input className='form-check-input' type='checkbox' name='lowIncome'
                onChange={this.handleService} value='Low Income'/>
              <label className='form-check-label' >Low Income</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='minorities'
                onChange={this.handleService} value='Minorities' />
              <label className='form-check-label' >Minorities</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='doctorsHome'
                onChange={this.handleService} value='Doctors Home' />
              <label className='form-check-label' >Doctors Home</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='moveUpBuyers'
                onChange={this.handleService} value='Move-up Buyers'/>
              <label className='form-check-label' >Move-up Buyers</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='firstHomeBuyers'
                onChange={this.handleService} value='First Home Buyers'/>
              <label className='form-check-label' >First Home Buyers</label>
            </div>

            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='nonQmMortgage'
                onChange={this.handleService} value='Non-QM mortgage'/>
              <label className='form-check-label' >Non-QM mortgage</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='vALoans'
                onChange={this.handleService} value='VA Loans'/>
              <label className='form-check-label' >VA Loans</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='badCredit'
                onChange={this.handleService} value='Bad Credit'/>
              <label className='form-check-label' >Bad Credit</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='conventional'
                onChange={this.handleService} value='Conventional'/>
              <label className='form-check-label' >Conventional</label>
            </div>
          </div>
          <button
            className='btn btn-primary' type='submit'>Add contact</button>
        </form>
      </div>
    );
  }
}
