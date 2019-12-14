import React from 'react';

function AddContactForm(props) {
  const linkProps = props.location.linkProps;

  return (
    <div>
      <form className='contain form-container'>
        <div className='form-row'>
          <div className='col-md-3 mb-3'>
            <label for='validationDefault03'>First name</label>
            <input type='text' className='form-control' id='validationDefault03' required />
          </div>
          <div className='col-md-3 mb-3'>
            <label for='validationDefault03'>Last name</label>
            <input type='text' className='form-control' id='validationDefault03' required />
          </div>
          <div className='col-md-3 mb-3'>
            <label for='validationDefault03'>City</label>
            <input type='text' className='form-control' id='validationDefault03' required />
          </div>
          <div className='col-md-3 mb-3'>
            <label for='validationDefault03'>State</label>
            <input type='text' className='form-control' id='validationDefault03' required />
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-3 mb-3'>
            <label for='validationDefault03'>NMLS</label>
            <input type='text' className='form-control' id='validationDefault03' required />
          </div>
          <div className='col-md-9 mb-3'>
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>


        </div>
        <div className='form-row'>
            <label for='validationDefault03' className='col-md-12 mb-3'>Languages :</label>
        </div>
        <div className='form-row'>
          <div className='form-check form-check-inline col-md-2 mb-3 col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' for='inlineCheckbox1'>English</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' for='inlineCheckbox2'>Chinese</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' for='inlineCheckbox1'>Spanish</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' for='inlineCheckbox2'>French</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' for='inlineCheckbox1'>Japanese</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' for='inlineCheckbox2'>Russian</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
              <label className='form-check-label' for='inlineCheckbox1'>Italian</label>
            </div>
            <div className='form-check form-check-inline col-md-2 mb-3 '>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
              <label className='form-check-label' for='inlineCheckbox2'>German</label>
            </div>
          </div>
          <div className='form-row'>
          <label for='validationDefault03' className='col-md-12 mb-3'>Services :</label>
          <div className='form-check form-check-inline col-md-2 mb-3  '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
            <label className='form-check-label' for='inlineCheckbox1'>Low Income</label>
          </div>
          <div className='form-check form-check-inline col-md-2 mb-3 '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
            <label className='form-check-label' for='inlineCheckbox2'>Minorities</label>
          </div>
          <div className='form-check form-check-inline col-md-2 mb-3 '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
            <label className='form-check-label' for='inlineCheckbox1'>Docters Home</label>
          </div>
          <div className='form-check form-check-inline col-md-2 mb-3 '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
            <label className='form-check-label' for='inlineCheckbox2'>Move-up Buyers</label>
          </div>
          <div className='form-check form-check-inline col-md-2 mb-3 '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
            <label className='form-check-label' for='inlineCheckbox2'>First Home Buyers</label>
          </div>
          
          <div className='form-check form-check-inline col-md-2 mb-3 '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
            <label className='form-check-label' for='inlineCheckbox1'>Non-QM mortgage</label>
          </div>
          <div className='form-check form-check-inline col-md-2 mb-3 '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
            <label className='form-check-label' for='inlineCheckbox2'>VA Loans</label>
          </div>
          <div className='form-check form-check-inline col-md-2 mb-3 '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='option1' />
            <label className='form-check-label' for='inlineCheckbox1'>Bad Credit</label>
          </div>
          <div className='form-check form-check-inline col-md-2 mb-3 '>
            <input className='form-check-input' type='checkbox' id='inlineCheckbox2' value='option2' />
            <label className='form-check-label' for='inlineCheckbox2'>Conventional</label>
          </div>
        </div>
      
        <button className='btn btn-primary' type='submit'>Add contact</button>
      </form>

    </div>
  );
}
export default AddContactForm;