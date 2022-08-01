import React, { useState } from 'react'
import axios from "axios"
import logo from './images/ps-logo.png'
import background from './images/background.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './App.css'
import ReCAPTCHA from "react-google-recaptcha";

// API: http://192.168.0.120:8080/intranet/v2/api-docs

export default function App() {
  const [emailId, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verified, setVerified] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  let navigate = useNavigate();


  const handleEmailId = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  const onChange = (value) => {
    console.log("CAPTCHA: ", value)
    setVerified(true)
  }


  const handleApi = () => {
    axios.post('http://192.168.0.120:8080/intranet/rest/v1/user/login', {
      emailId: emailId,
      password: password

    })

      .then(result => {

        if (result) {
          console.log(result.data)
          localStorage.setItem('Auth Token', result.data.authToken.token)
          localStorage.setItem('Auth Token Exp', result.data.authToken.expiry)
          localStorage.setItem('Refresh Token', result.data.refreshToken.token)
          localStorage.setItem('Refresh Token Exp', result.data.refreshToken.expiry)
          setVerified(true)
          console.log(result.config.data)
          // window.location.href="/dashboard"
          navigate("/dashboard");
        }

      })
      .catch(error => {
        console.log(error)
        setErrorMessage("Invalid Email/Password")
      })
  }

  return (
    <div className="login">
      <div className="col" id="left">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <img src={logo} alt="logo" height="35px" />
            <br /><br /><br />

            <h2>Login</h2>
            <p>Welcome! Please enter your details.</p>
            <br />

            <div className="form-group">
              <input
                type="email"
                name='email'
                id='email'
                value={emailId}
                onChange={handleEmailId}
                className='btn-css'
                placeholder='Email'
                required
              />
            </div>

            <div className="error">
              {errorMessage}
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePassword}
                className='btn-css'
                placeholder='Password'
                required
              />
            </div>

            <div className="g-recaptcha" data-sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL" >
              <ReCAPTCHA
                sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL"
                onChange={onChange}
                data-type="image"
              />
            </div>

            <br />

            <div className="extra-info">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                &nbsp; Remember Me
              </div>
              <div className="forgot-password">
                <Link to={'/forgot'}>Forgot Password?</Link>
              </div>
            </div>

            <br />

            {(verified) ? (

              <div className="button">
                <Button
                  onClick={handleApi}
                  type="submit"
                  disabled={!verified}
                  className='form-button'
                > Login</Button>
              </div>
            ) : (
              <div className="button">
                <Button
                  onClick={handleApi}
                  type="submit"
                  disabled={!verified}
                  className='form-button'
                >Login</Button>
              </div>
            )}


          </div>
        </form>
      </div>

      <div className="col" id='right'>
        <div className="image">
          <img src={background} alt="bgimage" />
        </div>
      </div>

    </div>

  )
}



