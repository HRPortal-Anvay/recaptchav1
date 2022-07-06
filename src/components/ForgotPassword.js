import React, { useState } from 'react'
import './ForgotPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




export default function ForgotPassword({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });





  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="login">


      <form onSubmit={submitHandler}>


        <div className="form-inner">

          <br /><br /> <br />

          <h2>Forgot Password?</h2>
          <p>No worries, we'll send you reset instructions.</p>
          <br />
          <div className="form-group">
            <input type="text" name="username" id="username" placeholder='Enter your username' className='btn-css' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} required />
          </div>

          <div className='or'>Or</div>

          <div className="form-group">
            <input type="email" name="email" id="email" placeholder='Enter your email' className='btn-css' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          </div>

          <br />
          <div className="button">
            <Button
              type="submit"
              className="form-button"
            > Reset Password
            </Button>
          </div>
<br />
          <div className="login">
            <a href='#'>
            ← Back to log in
            </a>
          </div>

        </div>

      </form>




    </div>
  )
} 
