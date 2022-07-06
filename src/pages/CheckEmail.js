import React, { useState } from 'react'
import './CheckEmail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




export default function CheckEmail({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="login">


      <form onSubmit={submitHandler}>


        <div className="form-inner">

          <br /><br /> <br />

          <h2>Check your Email</h2>
          <p>We sent a password reset link to abc@prissoft.net</p>

          <div className="button">
            <Button
              type="submit"
              className="form-button"
            > Close
            </Button>
          </div>
          <br /> <br />
          <div className="message">
            Didn't recieve the email?
            <a href="#">Click to resend</a>
          </div>

        </div>

      </form>




    </div>
  )
} 
