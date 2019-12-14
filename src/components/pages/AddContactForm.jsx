import React from 'react';
import Contacts from '../../models/Contacts';
export default class AddContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstName: '',
      // lastName: '',
      // nmls: '',
      // city: '',
      // state: '',
      // info: ''

    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    //Contac,s.splice(1, 10);
    //props.history.replace('/');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Contacts.push(this.state);
    this.props.history.replace('/');
    console.log(Contacts);
  }
  render() {
    return (
      <div>
     
        <form className='contain form-container' onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <div className='col-md-3 mb-3'>
              <label >First name</label>
              <input onChange={this.handleChange} name="firstName" value={this.state.firstName} type='text' className='form-control' id='validationDefault03' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >Last name</label>
              <input 
              onChange={this.handleChange} name="lastName" value={this.state.lastName}
              type='text' className='form-control' id='validationDefault03' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >City</label>
              <input
              onChange={this.handleChange} name="city" value={this.state.city}
                type='text' className='form-control' id='validationDefault03' required />
            </div>
            <div className='col-md-3 mb-3'>
              <label >State</label>
              <input
              onChange={this.handleChange} name="state" value={this.state.state}
                type='text' className='form-control' id='validationDefault03' required />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-3 mb-3'>
              <label >NMLS</label>
              <input
              onChange={this.handleChange} name="nmls" value={this.state.nmls}
                type='text' className='form-control' id='validationDefault03' required />
            </div>
            <div className='col-md-9 mb-3'>
              <label >Description</label>
              <textarea
              onChange={this.handleChange} name="info" value={this.state.info}
                className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
            </div>


          </div>
          <div className='form-row'>
            <label className='col-md-12 mb-3'>Languages :</label>
          </div>
          <div className='form-row'>
            <div className='form-check form-check-inline col-md-2 mb-3 col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' >English</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' >Chinese</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' >Spanish</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' >French</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' >Japanese</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' >Russian</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' >Italian</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' >German</label>
            </div>
          </div>
          <div className='form-row'>
            <label className='col-md-12 mb-3'>Services :</label>
            <div className='form-check form-check-inline col-md-2 mb-3  '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' >Low Income</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' >Minorities</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' >Docters Home</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' >Move-up Buyers</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' >First Home Buyers</label>
            </div>
          
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' >Non-QM mortgage</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' >VA Loans</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' >Bad Credit</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
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
