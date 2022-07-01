import React, { useState } from 'react'
import './LoginForm.css'
import ReCAPTCHA from "react-google-recaptcha";
// import { Button } from '@mui/material';
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
    // <form className="login">
    
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type="email" placeholder="Enter email" />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCheckbox" />
    //     <Form.Check type="checkbox" label="Check me out" />
    // </Form.Group>
    // </Form>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    

    // </form>



    <form onSubmit={submitHandler}>


      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          {/* <label htmlFor="email">Email: </label><br /> */}
          <input type="email" name="email" id="email" placeholder='Email' className='btn-css' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div> <br />

        <div className="form-group">
          {/* <label htmlFor="password">Password: </label> <br /> */}
          <input type="password" name="password" id="password" placeholder='Password' className='btn-css' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
<br />
        

        <div className="g-recaptcha" data-sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL">
        <ReCAPTCHA
          sitekey="6LcVfaMgAAAAAJ2zCFyaqSpK3FodWzhEsmqNgcwL"
          onChange={onChange}
          data-type="image"
        />
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
            Log in
          </Button>
            </div>
        {(error !== "") ? (
          <div className='error'>{error}</div>
        ) : (
          ""
        )}

      </div>

    </form>
  )
} 
