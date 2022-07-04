import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import PrimarySearchAppBar from "./pages/PrimarySearchAppBar";
import './App.css'

function App() {

  const adminUser = {
    email: "admin@prissoft.net",
    password: "admin123"
  }

 
  const [user, setUser] = useState({email: ""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)

    if (
      //make specifications checking ONLY for password and display various Dashboards based on username
      //criteria like "if name contains a U, then direct user to User Dashboard"
      details.email === adminUser.email && 
      details.password === adminUser.password
      ) {
        console.log("Logged In.")
        setUser({
          email: details.email
        })

      } else {
        console.log("Details do not match a user!")
        setError("Details do not match a user!\n Please try again." )
      }
  }

  // const Logout = () => {
  //   window.location.reload()
  // }
 
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
         <div className="navbar">
         <PrimarySearchAppBar />
         </div>
 <br /><br />
          <div className="content">
          <h2>Welcome <span>{user.email.split("@")[0]}!</span>
          </h2>
          <br /><br />
          {/* <button onClick={Logout} className="logout">Logout</button> */}

          </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
