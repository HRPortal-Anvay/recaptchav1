import React, { useState } from 'react'
import './PasswordReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




export default function PasswordReset({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = e => {
    e.preventDefault()

  }

  return (
    <div className="login">


      <form onSubmit={submitHandler}>


        <div className="form-inner">

          <h2>Password has been reset</h2>
          <p>Your password has been successfully reset.</p>
          <br />
          <div className="button">
            <Button
              type="submit"
              className="form-button"
            > Log In
            </Button>
          </div>
          

        </div>

      </form>




    </div>
  )
} 