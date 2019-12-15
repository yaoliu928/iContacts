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

  handleCheckbox = (event) => {
    event.persist();
    this.setState((preState) => {
      const { name, value, id } = event.target;
      return {
        ...preState,
        [name]: !preState[name],
        [id]: !preState[name]
              ?preState.languages.concat(value)
              :preState.languages.filter(
              (ele) => ele !== value),
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
              <input onChange={this.handleChange} name='firstName' value={this.state.firstName} type='text' className='form-control' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >Last name</label>
              <input
                onChange={this.handleChange} name='lastName' value={this.state.lastName}
                type='text' className='form-control' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >City</label>
              <input
                onChange={this.handleChange} name='city' value={this.state.city}
                type='text' className='form-control' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >State</label>
              <input
                onChange={this.handleChange} name='state' value={this.state.state}
                type='text' className='form-control' required />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-3 mb-3'>
              <label >NMLS</label>
              <input
                onChange={this.handleChange} name='nmls' value={this.state.nmls}
                type='text' className='form-control' required />
            </div>
            <div className='col-md-9 mb-3'>
              <label >Description</label>
              <textarea
                onChange={this.handleChange} name='info' value={this.state.info}
                className='form-control' rows='3' required></textarea>
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
                id='languages'
                onChange={this.handleCheckbox}
              />
              <label className='form-check-label' >English</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='chinese'
                value='Chinese'
                id='languages'
                onChange={this.handleCheckbox} />
              <label className='form-check-label' >Chinese</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='spanish'
                value='Spanish'
                id='languages'
                onChange={this.handleCheckbox}
              />
              <label className='form-check-label' >Spanish</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='french'
                value='French'
                id='languages'
                onChange={this.handleCheckbox}
              />
              <label className='form-check-label' >French</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='japanese'
                value='Japanese'
                id='languages'
                onChange={this.handleCheckbox} />
              <label className='form-check-label' >Japanese</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='russian'
                value='Russian'
                id='languages'
                onChange={this.handleCheckbox} />
              <label className='form-check-label' >Russian</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='italian'
                value='Italian'
                id='languages'
                onChange={this.handleCheckbox} />
              <label className='form-check-label' >Italian</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox'
                name='german'
                value='German'
                id='languages'
                onChange={this.handleCheckbox} />
              <label className='form-check-label' >German</label>
            </div>
          </div>
          <div className='form-row'>
            <label className='col-md-12 mb-3'>Services :</label>
            <div className='form-check form-check-inline col-md-2 mb-3  '>
              <input className='form-check-input' type='checkbox' name='lowIncome'
                onChange={this.handleCheckbox} value='Low Income' id='services'/>
              <label className='form-check-label' >Low Income</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='minorities'
                onChange={this.handleCheckbox} value='Minorities' id='services' />
              <label className='form-check-label' >Minorities</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='doctorsHome'
                onChange={this.handleCheckbox} value='Doctors Home' id='services' />
              <label className='form-check-label' >Doctors Home</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='moveUpBuyers'
                onChange={this.handleCheckbox} value='Move-up Buyers' id='services'/>
              <label className='form-check-label' >Move-up Buyers</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='firstHomeBuyers'
                onChange={this.handleCheckbox} value='First Home Buyers' id='services'/>
              <label className='form-check-label' >First Home Buyers</label>
            </div>

            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='nonQmMortgage'
                onChange={this.handleCheckbox} value='Non-QM mortgage' id='services'/>
              <label className='form-check-label' >Non-QM mortgage</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='vALoans'
                onChange={this.handleCheckbox} value='VA Loans' id='services'/>
              <label className='form-check-label' >VA Loans</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='badCredit'
                onChange={this.handleCheckbox} value='Bad Credit' id='services'/>
              <label className='form-check-label' >Bad Credit</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' name='conventional'
                onChange={this.handleCheckbox} value='Conventional' id='services'/>
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
