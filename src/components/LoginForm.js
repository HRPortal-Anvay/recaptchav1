import React, { useState } from 'react'
import './LoginForm.css'
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../images/ps-logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function LoginForm({ Login, error }) {

  const [details, setDetails] = useState({ email: "", password: "" });
  const [verified, setVerified] = useState(false)

  const onChange = (value) => {
    console.log("Captcha Value: ", value)
    setVerified(true)
  }

  const submitHandler = e => {
    e.preventDefault()
    Login(details)
  }

  return (
    <div className="login">

      <div className="col" id="left">
        <form onSubmit={submitHandler}>


          <div className="form-inner">

            <img src={logo} alt="logo" height="35px" />
            <br /><br /> <br />

            <h2>Login</h2>
            <p>Welcome! Please enter your details.</p>
            <br />
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder='Email' className='btn-css' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
            </div>

            {(error !== "") ? (
              <div className='error'>{error}</div>
            ) : (
              ""
            )}

            <div className="form-group">
              <input type="password" name="password" id="password" placeholder='Password' className='btn-css' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
            </div>


            <div className="g-recaptcha" data-sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL">
              <ReCAPTCHA
                sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL"
                onChange={onChange}
                data-type="image"
              />
            </div>

            {/* Remember Me + Forgot Password here */}
            <br />
            <div className="extra-info">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                &nbsp; Remember Me
              </div>
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <br />
            <div className="button">
              <Button
                type="submit"
                disabled={!verified}
                className="form-button"
                sx={{
                  border: "1px solid rgb(56,116,203)",
                }}
              >
                Sign In
              </Button>
            </div>

          </div>

        </form>
      </div>

      <div className="col" id='right'>
        <div className="image">
          <img src="https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg" alt="img" />
        </div>
      </div>

    </div>
  )
} 