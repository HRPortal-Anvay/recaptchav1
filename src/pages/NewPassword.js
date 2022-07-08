import React, { useState } from 'react'
import './NewPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




export default function NewPassword({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });





  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="login">


      <form onSubmit={submitHandler}>


        <div className="form-inner">


          <h2>Set new password</h2>
          <p>Your new password must be different from previously used password</p>


          <div className="rules">
            <h10><strong>Password Must:</strong></h10>
            <ul>
              <li className='regular'>Be between 12 and 32 characters</li>
              <li className='regular'>Include characters such as:</li>
              <li className="small">An uppercase letter</li>
              <li className="small">A lowercase letter</li>
              <li className="small">A number</li>
              <li className="small">A special character</li>
            </ul>
          </div>




          <div className="form-group">
            <input type="text" name="username" id="username" placeholder='Password' className='input-css' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} required />
          </div>


          <div className="form-group">
            <input type="email" name="email" id="email" placeholder='Confirm Password' className='input-css' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} required/>
          </div>


          <div className="button">
            <Button
              type="submit"
              className="form-button"
            > Reset Password
            </Button>
          </div>
          

        </div>

      </form>




    </div>
  )
} 