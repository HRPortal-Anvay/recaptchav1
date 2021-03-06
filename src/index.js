import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/ForgotPassword'
import './pages/CheckEmail'
import './pages/NewPassword'
import './pages/PasswordReset'
import './pages/Roles'
import './components/Features'
import './pages/Profile'
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ForgotPassword from './pages/ForgotPassword'
import CheckEmail from './pages/CheckEmail'
import NewPassword from './pages/NewPassword'
import PasswordReset from './pages/PasswordReset';
import NavBar from './pages/Dashboard';
import Roles from './pages/Roles';
import Features from './components/Features';
import Profile from './pages/Profile'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/dashboard/" element={<NavBar />} >
        <Route path='roles' element={<Roles />}></Route>
        <Route path='features' element={<Features />}></Route>
      </Route>
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/check" element={<CheckEmail />} />
      <Route path="/reset" element={<NewPassword />} />
      <Route path="/new" element={<PasswordReset />} />
      <Route path="/roles" element={<Roles />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();